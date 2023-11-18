import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFav = (set) => ({
  favProducts: [],
  addFavProduct: (product) => {
    console.log("Connect");
    set((state) => {
      const updatedFavProducts = [...state.favProducts];
      console.log(updatedFavProducts);
      const productIndex = updatedFavProducts.findIndex(
        (prod) => prod.productName === product.name
      );
      console.log("index ditemukan" + productIndex);
      if (productIndex !== -1) {
        // state.increaseProductAmount(productIndex);
        updatedFavProducts.splice(productIndex, 1);
        console.log("product sudah ada");
        return { favProducts: updatedFavProducts };
      } else {
        updatedFavProducts.push({
          id: product.id,
          productName: product.name,
          productDescription: product.description,
          productAmount: 1,
          productPrice: product.price,
          productImage: product.image,
        });
        console.log("product baru di tambahkan");
        return { favProducts: updatedFavProducts };
      }
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
