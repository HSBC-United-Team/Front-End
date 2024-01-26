import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFav = create(persist((set) => ({
  favProducts: [],
  addFavProduct: (productId) => {
    // Cek apakah produk dengan ID yang sama sudah ada di dalam favProducts
    const isProductInFav = set((state) => state.favProducts.some((p) => p.id === productId));

    if (isProductInFav) {
      // Jika produk sudah ada, hapus produk dengan ID tersebut
      set((state) => ({ favProducts: state.favProducts.filter((p) => p.id !== productId) }));
    } else {
      // Jika produk belum ada, tambahkan produk dengan ID tersebut
      set((state) => ({ favProducts: [...state.favProducts, { id: productId }] }));
    }
  },
  removeFavProduct: (productId) => {
    set((state) => ({
      favProducts: state.favProducts.filter((product) => product.id !== productId),
    }));
  },
}), { name: 'fav-store' }));  // Sesuaikan dengan konfigurasi persist yang Anda miliki

export { useFav };
