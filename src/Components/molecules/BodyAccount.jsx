import { useNavigate } from "react-router-dom";
import AccountSection from "../atoms/AccountSection";
import AccountActions from "./AccountActions";
import { useState } from "react";

function BodyAccount() {
    const navigate = useNavigate();
    const sections = [
        {
            title: "Orders",
            iconSrc: "public/images/svg/Ordersicon.png",
            content: (
                <div className="flex w-[70%] justify-around items-center ">
                    <div className="w-12 h-12 rounded-full flex justify-center items-center border border-black">
                        <img src="public/images/tracking_order/to-do-list.png" className="w-8 h-8" alt="" />
                    </div>
                    <div className="w-12 h-12 rounded-full flex justify-center items-center border border-black">
                        <img src="public/images/tracking_order/box.png" className="w-8 h-8" alt="" />
                    </div>
                    <div className="w-12 h-12 rounded-full flex justify-center items-center border border-black">
                        <img src="public/images/tracking_order/delivery-truck.png" className="w-8 h-8" alt="" />
                    </div>
                    <div className="w-12 h-12 rounded-full flex justify-center items-center border border-black">
                        <img src="public/images/tracking_order/cash-on-delivery.png" className="w-8 h-8" alt="" />
                    </div>
                </div>
            )
        },
        {
            title: "My Details",
            iconSrc: "public/images/svg/id.png",
            content: (
                <div>
                    <p>ini konten</p>
                </div>
            )
        },
        {
            title: "Delivery Address",
            iconSrc: "public/images/svg/map.png",
            content: (
                <div>
                    <p>ini konten</p>
                </div>
            )
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
    const [showContent, setShowContent] = useState(false);

    const handleButtonClick = (index) => {
        setShowContent((prevSelected) => (prevSelected === index ? null : index));
        console.log(index)
    };

    return (
        <section>
            {sections.map((section, index) => (
                <div key={index}>
                    <AccountSection
                        title={section.title}
                        iconSrc={section.iconSrc}
                        onClick={() => handleButtonClick(index)}
                    />
                    {showContent === index && (
                        <div className="flex justify-center items-center border-b-2 p-2">
                            {section.content}

                        </div>
                    )}
                </div>
            ))}
            <AccountActions onLogout={handleLogOut} />
        </section>
    );
}
export default BodyAccount;
