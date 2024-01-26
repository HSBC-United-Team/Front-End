import { useNavigate } from "react-router-dom";
import AccountSection from "../atoms/AccountSection";
import AccountActions from "../molecules/AccountActions";
import { useState } from "react";
import BtnTrackOrder from "../atoms/BtnTrackOrder";
import { Cancelled, Delivered, Pending, Processed, Shipping } from "../molecules/PopUp";

function BodyAccount() {
    const navigate = useNavigate();
    const userDataString = localStorage.getItem("user-info")
    const userData = JSON.parse(userDataString).state.user.username;
    console.log(userData)
    
    const [show, setShow] = useState(false)
    const handleShow = (number) => {
        setShow(number)
    }
    const handleClosePopup = () => {
        setShow(false)
    }
    const sections = [
        {
            title: "Orders",
            iconSrc: "public/images/svg/Ordersicon.png",
            content: (
                <div className="flex w-[70%] justify-around items-center  p-2">
                    <BtnTrackOrder onClick={() => handleShow(1)} src="public/images/tracking_order/to-do-list.png">Pending</BtnTrackOrder>
                    <BtnTrackOrder onClick={() => handleShow(2)} src="public/images/tracking_order/box.png">Processed</BtnTrackOrder>
                    <BtnTrackOrder onClick={() => handleShow(3)} src="public/images/tracking_order/delivery-truck.png">Shipping</BtnTrackOrder>
                    <BtnTrackOrder onClick={() => handleShow(4)} src="public/images/tracking_order/cash-on-delivery.png">Delivered</BtnTrackOrder>
                    <BtnTrackOrder onClick={() => handleShow(5)} src="public/images/tracking_order/cancelled.png">Cancelled</BtnTrackOrder>

                </div>
            )
        },
        {
            title: "My Details",
            iconSrc: "public/images/svg/id.png",
            content: (
                <div className="flex flex-col w-[70%] items-center bg-green-200 p-2">
                    <p>First Name : {userData.first_name} </p>
                    <p>Last Name  : {userData.last_name} </p>
                    <p>Role       : {userData.role} </p>
                </div>
            )
        },
        {
            title: "Delivery Address",
            iconSrc: "public/images/svg/map.png",
            content: (
                <div className="flex w-[70%] justify-around items-center bg-green-200 p-2">
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
    const [isClicked, setIsClicked] = useState(false)

    const handleButtonClick = (index) => {
        setShowContent((prevSelected) => (prevSelected === index ? null : index));
        setIsClicked((prevSelected) => (prevSelected === index ? null : index))

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
                        <div className="flex justify-center items-center border-b-2 bg-green-200">
                            {section.content}

                        </div>
                    )}
                </div>
            ))}
            {show == 1 && <Pending onClick={handleClosePopup} />}
            {show == 2 && <Processed onClick={handleClosePopup} />}
            {show == 3 && <Shipping onClick={handleClosePopup} />}
            {show == 4 && <Delivered onClick={handleClosePopup} />}
            {show == 5 && <Cancelled onClick={handleClosePopup} />}
            <AccountActions onLogout={handleLogOut} />
        </section>
    );
}
export default BodyAccount;
