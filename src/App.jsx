import HomePage from "../src/Components/Pages/Homepage";
import Fav from "./Components/Pages/Favoritepage";
import Cart from "./Components/Pages/CartPage";
import LandingPage from "./Components/Pages/LandingPage";
import LoginPage from "./Components/Pages/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import AccountPage from "./Components/Pages/AccountPage";
import Admin from "./Components/Pages/AdminPage";
import FrontPage from "./Components/Pages/frontpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Fav />} />
          <Route path="/profile" element={<AccountPage />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
