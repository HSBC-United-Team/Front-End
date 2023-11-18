import Header from "../organisms/Header";
import BodyAkun from "../organisms/BodyAkun";
import ProfileAccount from "../organisms/ProfileAccount";
function AccountPage() {
  return (
    <main className="mt- m-20 md:mt-0">
      <section>
        <Header />
        <ProfileAccount />
        <BodyAkun />
      </section>
    </main>
  );
}

export default AccountPage;
