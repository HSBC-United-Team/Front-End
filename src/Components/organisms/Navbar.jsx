import NavList from "../atoms/NavList";
import {
    IconShop,
    IconExplore,
    IconCart,
    IconFavorite,
    IconAccount,
} from "../../../public/icons";

function Navbar() {
    return (
        <div className="w-[100%] fixed bottom-0 md:static md:w-[40%] z-10">
            <nav className="bg-white rounded-tr-[15px] rounded-tl-[15px] md:w-[100%]">
                <ul className="items-center flex justify-around h-[70px]">
                    <NavList src={"/home"}>
                        <IconShop />
                        Shop
                    </NavList>
                    <NavList>
                        <IconExplore />
                        Explore
                    </NavList>
                    <NavList src={"/cart"}>
                        <IconCart />
                        Cart
                    </NavList>
                    <NavList src={"/favorite"}>
                        <IconFavorite />
                        Favorite
                    </NavList>
                    <NavList src={"/profile"}>
                        <IconAccount />
                        Account
                    </NavList>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
