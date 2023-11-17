import HomePage from "../src/Components/Pages/Homepage";
import Fav from "./Components/Pages/Favoritepage";
import Cart from "./Components/Pages/CartPage";
import LandingPage from "./Components/Pages/LandingPage";
import LoginPage from "./Components/Pages/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorite" element={<Fav />} />
            </Routes>
        </Router>
    );
}
export default App;
