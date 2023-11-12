import ProfileComponent from "../../component+s/ProfileComponent";
import BodyProfile from "../../component+s/BodyProfile";
import ButtonProfile from "../../component+s/ButtonProfile";
import Header from "../organisms/Header";

function ProfilePage() {
  return (
    <main className="mt- m-20 md:mt-0">
      <section>
        <Header />
        <ProfileComponent />
        <BodyProfile />
        <ButtonProfile />
      </section>
    </main>
  );
}

export default ProfilePage;
