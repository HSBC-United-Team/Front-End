import AccountImage from "../atoms/AccountImage"
import AccountInfo from "../molecules/AccountInfo"

function ProfileAccount() {
  const userDataString = localStorage.getItem("user-info")
  const userData = JSON.parse(userDataString).state.user.username;



  // console.log(userData.first_name)
  // const firstName = userData.state.user.username.first_name;
  console.log(userData);
  //     const userData = {
  //         name: 'Afsar Hossen',
  //         email: 'imsuvo97@gmail.com',
  // };

  return (
    <div className="flex gap-8 items-center mb-6 px-16">
      <AccountImage src="public/images/svg/userprof.png" alt="" />
      <AccountInfo name={userData.first_name+" "+userData.last_name} email={userData.email} />
    </div>
  );
}

export default ProfileAccount;
