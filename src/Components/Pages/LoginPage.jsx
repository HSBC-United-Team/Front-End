import { useState } from "react";
import "../../style.css";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "../../stores/useUserInfo";
import BtnBack from "../atoms/BtnBack";
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
      const response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include"
      });
      if (response.ok) {
        const user = await response.json();
        console.log(user.role);
        setUserInfo({ ...user });
        setUsername("");
        setPassword("");
        user.role == "seller" ? navigate("/admin") : navigate("/home");

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
      <div className="pt-6 md:ps-10">
        <BtnBack />
      </div>
      <div className="" />
      {/* <div className="background-container" /> */}
      <div className="container flex justify-center m-auto">
        <img src="../src/assets/background.jpeg" className="md:w-[80%] fixed md:-left-40 object-cover" alt="" />
        <div
          id="login-section"
          className="login-section fixed flex flex-col items-center justify-center mt-[130px]"
        >
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="login-form w-96 mb-4" onSubmit={handleLogin}>
            <input
              type="text"
              id="login-username"
              placeholder="Username"
              className="mb-4 p-2 border rounded w-full"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="login-password"
              placeholder="Password"
              className="mb-4 p-2 border rounded w-full"
              required
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
