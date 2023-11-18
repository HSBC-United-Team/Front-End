import { useNavigate } from "react-router-dom";
import AccountSection from "../atoms/AccountSection";
import AccountActions from "./AccountActions";

function BodyAccount() {
    const navigate = useNavigate();
    const sections = [
        {
            title: "Orders",
            iconSrc: "public/images/svg/Ordersicon.png",
        },
        {
            title: "My Details",
            iconSrc: "public/images/svg/id.png",
        },
        {
            title: "Delivery Address",
            iconSrc: "public/images/svg/map.png",
        },
        {
            title: "Payment Method",
            iconSrc: "public/images/svg/payment.png",
        },
        {
            title: "Promo Card",
            iconSrc: "public/images/svg/promo.png",
        },
        {
            title: "Notification",
            iconSrc: "public/images/svg/notif.png",
        },
        { title: "Help", iconSrc: "public/images/svg/help.png" },
        { title: "About", iconSrc: "public/images/svg/about.png" },
    ];

    const handleLogOut = () => {
        localStorage.removeItem("use-cart-data");
        localStorage.removeItem("user-info");
        navigate("/");
    };

    return (
        <section>
            {sections.map((section, index) => (
                <AccountSection
                    key={index}
                    title={section.title}
                    iconSrc={section.iconSrc}
                    onClick={() =>
                        console.log(`Button clicked for ${section.title}`)
                    }
                />
            ))}
            <AccountActions onLogout={handleLogOut} />
        </section>
    );
}

export default BodyAccount;
