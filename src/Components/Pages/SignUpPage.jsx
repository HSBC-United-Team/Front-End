import { useState } from "react";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../stores/useUserInfo";

function SignUpPage() {
    const { setUserInfo } = useUserInfo((state) => {
        return { setUserInfo: state.setUserInfo };
    });
    const navigate = useNavigate();

    const [first_name, setFirst_name] = useState();
    const [last_name, setLast_name] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repassword, setRePassword] = useState();

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (password === repassword) {
            try {
                console.log(JSON.stringify({ username, first_name, last_name, email, password, repassword }));
                const response = await fetch(
                    "http://localhost:3000/api/v1/users/signUp",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username, first_name, last_name, email, password,repassword }),
                    }
                )
                const user = await response.json();
                // console.log(user);
                setUserInfo({ ...user });
                setUsername("");
                setFirst_name("");
                setLast_name("");
                setEmail("");
                setPassword("");
                setRePassword("");
                alert("Akun berhasil di daftarkan, Silahkan melakukan Login")
                navigate("/login")
              
            } catch (error) {
                console.error("Terjadi kesalahan:", error);
                if (error instanceof Response) {
                    try {
                        const errorData = await error.json();
                        console.error("Respons dari server:", errorData);
                    } catch (jsonError) {
                        console.error("Gagal mengurai JSON:", jsonError);
                        console.error("Respons dari server (bukan JSON):", await error.text());
                    }
                }
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
                            type="text"
                            id="signup-first_name"
                            placeholder="First Name"
                            className="mb-4 p-2 border rounded w-full"
                            required
                            onChange={(e) => setFirst_name(e.target.value)}
                        />
                        <input
                            type="text"
                            id="signup-last_name"
                            placeholder="Last Name"
                            className="mb-4 p-2 border rounded w-full"
                            required
                            onChange={(e) => setLast_name(e.target.value)}
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
                            onChange={(e) => setRePassword(e.target.value)}
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
