import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFav = (set) => ({
  favProducts: [],
  addFavProduct: (product) => {
    set((state) => {
      const updatedFavProducts = [...state.favProducts];
      const productIndex = updatedFavProducts.findIndex(
        (prod) => prod.productName === product.name
      );
      if (productIndex !== -1) {
        updatedFavProducts.splice(productIndex, 1);
        return { favProducts: updatedFavProducts };
      } else {
        updatedFavProducts.push({
          id: product.id,
          productName: product.name,
          productDescription: product.description,
          productAmount: 1,
          productPrice: product.price,
          productImage: product.image,
          isFavorite:!product.isFavorite
        });
        return { favProducts: updatedFavProducts };
      }
    });
  },
  removeFavProduct: (favProducts) => {
    set((state) => {
        const updateFav = [...state.favProducts];
        const productName=favProducts.id
        const productIndex = updateFav.findIndex(
            (prod) => prod.id===productName
        );
        if (productIndex !== -1) {
            updateFav.splice(productIndex, 1);
          }
        return { favProducts: updateFav };
    });
  },
});

export const useFavProducts = create(
  persist(useFav, { name: "user-favorite-products" })
);
