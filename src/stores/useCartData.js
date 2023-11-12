import { create } from "zustand";
import { persist } from "zustand/middleware";

const UseCart = (set) => ({
    cartData: [],
    addProductToCart: (
        productName,
        productDescription,
        productPrice,
        productImage
    ) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            const productIndex = updatedCartData.findIndex(
                (product) => product.name === productName
            );
            if (productIndex != -1) {
                state.increaseProductAmount(productIndex);
            } else {
                const updatedCartData = [...state.cartData];
                updatedCartData.push({
                    productName,
                    productDescription,
                    productAmount: 1,
                    productPrice,
                    productImage,
                });
                return { cartData: [...updatedCartData] };
            }
        });
    },
    removeProductInCart: (productIndex) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            updatedCartData.splice(productIndex, 1);
            return { cartData: [...updatedCartData] };
        });
    },
    increaseProductAmount: (productIndex) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            updatedCartData[productIndex] = {
                ...updatedCartData[productIndex],
                productAmount: state.cartData[productIndex].productAmount + 1,
            };
            return { cartData: [...updatedCartData] };
        });
    },
    decreaseProductAmount: (productIndex) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            updatedCartData[productIndex] = {
                ...updatedCartData[productIndex],
                productAmount: state.cartData[productIndex].productAmount - 1,
            };
            return { cartData: [...updatedCartData] };
        });
    },
});

export const UseCartData = create(persist(UseCart, { name: "use-cart-data" }));
