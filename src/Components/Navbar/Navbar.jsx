import Account from "./Account";
import Cart from "./Cart";
import Explore from "./Explore";
import Favorite from "./Favorite";
import Shop from "./Shop";

function Navbar() {
    return (
        <div className="w-[100%] fixed bottom-0 md:static md:w-[40%] z-10">
            <nav className="bg-white rounded-tr-[15px] rounded-tl-[15px] md:w-[100%]">
                <ul className="items-center flex justify-around h-[70px]">
                    <Shop />
                    <Explore />
                    <Cart />
                    <Favorite />
                    <Account />
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
