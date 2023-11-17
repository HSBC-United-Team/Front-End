import "../../style.css";
function LoginPage() {
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
            onsubmit="return validateLoginForm(event)"
          >
            <input
              type="text"
              id="login-username"
              placeholder="Username"
              className="mb-4 p-2 border rounded w-full"
              required=""
            />
            <input
              type="password"
              id="login-password"
              placeholder="Password"
              className="mb-4 p-2 border rounded w-full"
              required=""
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded w-full"
            >
              Login
            </button>
          </form>
          <p className="signup-link">
            Don't have an account?
            <a
              href="#"
              className="text-blue-500"
              onclick="showSection('signup-section')"
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
