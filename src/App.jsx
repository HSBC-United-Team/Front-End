import HomePage from "../src/Components/Pages/Homepage";
import Fav from "./Components/Pages/Favoritepage";
import Cart from "./Components/Pages/CartPage";
import LandingPage from "./Components/Pages/LandingPage";
import LoginPage from "./Components/Pages/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import AccountPage from "./Components/Pages/AccountPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorite" element={<Fav />} />
                    <Route path="/profile" element={<AccountPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
