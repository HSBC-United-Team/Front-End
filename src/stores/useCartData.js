import { create } from "zustand";
import { persist } from "zustand/middleware";

const UseCart = (set) => ({
    cartData: [],
    addProductToCart: (product) => {
      console.log("nyambung")
        set((state) => {
            const updatedCartData = [...state.cartData];
            console.log(updatedCartData)
            const productIndex = updatedCartData.findIndex(
                (prod) => prod.productName === product.name
            );
            if (productIndex !== -1) {
                // state.increaseProductAmount(productIndex);
                updatedCartData[productIndex].productAmount +=1
                console.log(`quantity ${updatedCartData[productIndex].productName} ditambah 1 menjadi ${updatedCartData[productIndex].productAmount}`)
                return{cartData:updatedCartData}
            } else {
                updatedCartData.push({
                    productName:product.name,
                    productDescription:product.weight,
                    productAmount: 1,
                    productPrice:product.price,
                    productImage:product.image,
                });
                console.log("item baru di tambahkan ke keranjang")
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
    increaseProductAmount: (productIndex) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            updatedCartData[productIndex] = {
                ...updatedCartData[productIndex],
                productAmount: state.cartData[productIndex].productAmount + 1,
            };
            return { cartData: updatedCartData };
        });
    },
    decreaseProductAmount: (productIndex) => {
        set((state) => {
            const updatedCartData = [...state.cartData];
            updatedCartData[productIndex] = {
                ...updatedCartData[productIndex],
                productAmount: state.cartData[productIndex].productAmount - 1,
            };
            return { cartData: updatedCartData };
        });
    },
});

export const UseCartData = create(persist(UseCart, { name: "use-cart-data2" }));
