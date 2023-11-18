import "../../style.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="background-container" />
            <div className="main-section-container">
                <div
                    id="main-section"
                    className="flex flex-col items-center justify-center h-screen"
                >
                    <h1 className="text-4xl font-bold mb-3 poppins-font">
                        We, Nectar!
                    </h1>
                    <p className="mb-4 poppins-font">
                        We Get your groceries in as fast as one hour
                    </p>
                    <button
                        className="bg-green-500 text-white py-2 px-4 rounded"
                        onClick={() => navigate("/login")}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </>
    );
}
export default LandingPage;
