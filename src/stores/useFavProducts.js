import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFav = (set) => ({
  favProducts: [],
  addFavProduct: async (product) => {
    set((state) => {
      const updatedFavProducts = [...state.favProducts];
      const productIndex = updatedFavProducts.findIndex(
        (prod) => prod.productName === product.name
      );
      if (productIndex !== -1) {
        updatedFavProducts.splice(productIndex, 1);
      } else {
        updatedFavProducts.push({
          id: product.id,
          productName: product.name,
          productDescription: product.description,
          productAmount: 1,
          productPrice: product.price,
          productImage: product.image,
          isFavorite: !product.isFavorite,
        });
      }
      return { favProducts: updatedFavProducts };
    });

    // Sending POST request to the API
    try {
      const response = await fetch('https://localhost:3000/api/v1/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: product.name,
          productDescription: product.description,
          productAmount: 1,
          productPrice: product.price,
          productImage: product.image,
          isFavorite: !product.isFavorite,
        }),
      });

      if (!response.ok) {
        // Handle error response from the server
        console.error('Error adding favorite product:', response.status);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error adding favorite product:', error);
    }
  },
  removeFavProduct: () => {
    set((state) => {
      const updatedFavProducts = [...state.favProducts];
      // Implement your logic to remove a favorite product
      return { favProducts: updatedFavProducts };
    });
  },
});

export const useFavProducts = create(
  persist(useFav, { name: "user-favorite-products" })
);
