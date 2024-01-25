import Header from "../organisms/Header";
import ProfileAccount from "../organisms/ProfileAccount";
import BodyAccount from "../organisms/BodyAccount";
function AccountPage() {
    return (
        <main className="mt- m-20 md:mt-0">
            <section>
                <Header />
                <ProfileAccount />
                <BodyAccount />
            </section>
        </main>
    );
}

export default AccountPage;
