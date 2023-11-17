import "../../style.css";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container flex justify-center m-auto">
                <div className="background-container" />
                <div
                    id="signup-section"
                    className="signup-section fixed flex flex-col items-center justify-center mt-[130px]"
                >
                    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                    <form
                        className="signup-form w-96 mb-4"
                        onSubmit="return validateSignupForm(event)"
                    >
                        <input
                            type="text"
                            id="signup-username"
                            placeholder="Username"
                            className="mb-4 p-2 border rounded w-full"
                            required=""
                        />
                        <input
                            type="email"
                            id="signup-email"
                            placeholder="Email"
                            className="mb-4 p-2 border rounded w-full"
                            required=""
                        />
                        <input
                            type="password"
                            id="signup-password"
                            placeholder="Password"
                            className="mb-4 p-2 border rounded w-full"
                            required=""
                        />
                        <input
                            type="password"
                            id="signup-confirm-password"
                            placeholder="Confirm Password"
                            className="mb-4 p-2 border rounded w-full"
                            required=""
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-4 rounded w-full"
                        >
                            Sign up
                        </button>
                    </form>
                    <p className="login-link contrast-text">
                        Already have an account?
                        <a
                            href="#"
                            className="text-blue-500"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
export default SignUpPage;
