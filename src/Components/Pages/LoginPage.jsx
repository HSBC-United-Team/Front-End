import { useState } from "react";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../stores/useUserInfo";
function LoginPage() {
    const navigate = useNavigate();
    const { setUserInfo } = useUserInfo((state) => {
        return { setUserInfo: state.setUserInfo };
    });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                const user = await response.json();
                setUserInfo({ ...user });
                setUsername("");
                setPassword("");
                navigate("/home");
                console.log("Login successful:", user);
            } else {
                console.log("Invalid username or password");
            }
        } catch (error) {
            console.error("Error message:", error.message);
        }
    };
    return (
        <>
            <div className="background-container" />
            <div className="container flex justify-center m-auto">
                <div
                    id="login-section"
                    className="login-section fixed flex flex-col items-center justify-center mt-[200px]"
                >
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form
                        className="login-form w-96 mb-4"
                        onSubmit={handleLogin}
                    >
                        <input
                            type="text"
                            id="login-username"
                            placeholder="Username"
                            className="mb-4 p-2 border rounded w-full"
                            required=""
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            id="login-password"
                            placeholder="Password"
                            className="mb-4 p-2 border rounded w-full"
                            required=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-4 rounded w-full"
                        >
                            Login
                        </button>
                    </form>
                    <p className="signup-link">
                        Don &#39;t have an account?
                        <a
                            href="#"
                            className="text-blue-500"
                            onClick={() => navigate("/signup")}
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
export default LoginPage;
