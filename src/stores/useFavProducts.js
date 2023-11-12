import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFav = (set) => ({
    favProducts: [],
    addFavProduct: (
        productName,
        productDescription,
        productPrice,
        productImage
    ) => {
        set((state) => {
            const updatedFavProducts = [...state.favProducts];
            updatedFavProducts.push({
                productName,
                productDescription,
                productPrice,
                productImage,
            });
            return { favProducts: [...updatedFavProducts] };
        });
    },
    removeFavProduct: (productIndex) => {
        set((state) => {
            const updatedFavProducts = [...state.favProducts];
            updatedFavProducts.splice(productIndex, 1);
            return { favProducts: [...updatedFavProducts] };
        });
    },
});

export const useFavProducts = create(
    persist(useFav, { name: "user-favorite-products" })
);
