import AccountImage from "../atoms/AccountImage"
import AccountInfo from "../molecules/AccountInfo"

function ProfileAccount (){
    const userData = {
        name: 'Afsar Hossen',
        email: 'imsuvo97@gmail.com',
};

return (
    <div className="flex gap-8 items-center mb-6 px-16">
      <AccountImage src="public/images/svg/userprof.png" alt="" />
      <AccountInfo name={userData.name} email={userData.email} />
    </div>
  );
}

export default ProfileAccount;
