import { IconAccount, IconCart, IconExplore, IconFavorite, IconShop } from "../../../public/icon"
import { List } from "../atoms/List"

export function Ulnavbar() {
    return (
        <ul className="items-center flex justify-around h-[70px]">
            <List><IconShop /> Shop</List>
            <List><IconExplore /> Explore</List>
            <List><IconCart />Cart</List>
            <List><IconFavorite /> Favorite</List>
            <List><IconAccount />Account</List>
        </ul>
    )
}