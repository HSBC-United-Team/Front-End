import { useState } from "react";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../stores/useUserInfo";

function SignUpPage() {
    const { setUserInfo } = useUserInfo((state) => {
        return { setUserInfo: state.setUserInfo };
    });
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            console.log();
            try {
                const response = await fetch(
                    "https://dummyjson.com/users/add",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username, email, password }),
                    }
                );

                const user = await response.json();
                console.log(user);
                setUserInfo({ ...user });
                setUsername("");
                setEmail("");
                setPassword("");
                navigate("/home");
            } catch (error) {
                console.error("Ada yang salah nih kwkwk");
            }
        } else {
            console.log("Password tidak sama");
        }
    };
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
                        onSubmit={handleSignUp}
                    >
                        <input
                            type="text"
                            id="signup-username"
                            placeholder="Username"
                            className="mb-4 p-2 border rounded w-full"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="email"
                            id="signup-email"
                            placeholder="Email"
                            className="mb-4 p-2 border rounded w-full"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            id="signup-password"
                            placeholder="Password"
                            className="mb-4 p-2 border rounded w-full"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            id="signup-confirm-password"
                            placeholder="Confirm Password"
                            className="mb-4 p-2 border rounded w-full"
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
