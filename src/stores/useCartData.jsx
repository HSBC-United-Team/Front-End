import { create } from "zustand";
import { persist } from "zustand/middleware";

const UseCart = (set) => ({
    cartData: [],
    removeAllProductsInCart: () => {
        set({ cartData: [] });
    },
    addProductToCart: (product) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            const productIndex = updatedCartData.findIndex(
                (prod) => prod.productName === product.name
            );
            if (productIndex !== -1) {
                // state.increaseProductAmount(productIndex);
                updatedCartData[productIndex].productAmount += 1;
                return { cartData: updatedCartData };
            } else {
                updatedCartData.push({
                    id: product.id,
                    productName: product.name,
                    productDescription: product.description,
                    productAmount: 1,
                    productPrice: product.price,
                    productImage: product.image,
                });
                return { cartData: updatedCartData };
            }
        });
    },
    removeProductInCart: (productIndex) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            updatedCartData.splice(productIndex, 1);
            return { cartData: updatedCartData };
        });
    },
    increaseProductAmount: (product) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            const productIndex = updatedCartData.findIndex(
                (prod) => prod.productName === product.productName
            );
            updatedCartData[productIndex] = {
                ...updatedCartData[productIndex],
                productAmount: state.cartData[productIndex].productAmount + 1,
            };
            return { cartData: updatedCartData };
        });
    },
    decreaseProductAmount: (product) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            const productIndex = updatedCartData.findIndex(
                (prod) => prod.productName === product.productName
            );
            if (product.productAmount > 1) {
                updatedCartData[productIndex] = {
                    ...updatedCartData[productIndex],
                    productAmount:
                        state.cartData[productIndex].productAmount - 1,
                };
            } else {
                alert("Jumlah product telah sampai pada batas MINIMUM");
            }
            return { cartData: updatedCartData };
        });
    },
});

export const UseCartData = create(persist(UseCart, { name: "use-cart-data" }));
