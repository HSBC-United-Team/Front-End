import BtnGreen from "../atoms/BtnGreen";
import { Navbar2 } from "../organisms/Navbar2";
import { UseCartData } from "../../stores/useCartData";
import { useCartState } from "../atoms/CartState";
import CheckoutModal from "../organisms/CheckoutModals";
import { useEffect, useState } from "react";
function Cart() {
    const [cart,setCart]=useState([])
    const getCart = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/v1/carts`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: "include",
  
          })
          const result = await response.json();
          const inCart=result.carts.Products
          setCart(inCart)
          console.log(inCart)
        } catch (error) {
          console.error(error)
        }
  
      }
      useEffect(() => {
        getCart()
      }, []);
    const {
        showModal,
        openModal,
        closeModal,
        selectedProvince,
        selectedCity,
        data,
        paymentMethods,
        handleProvinceChange,
        handleCityChange,
    } = useCartState();

    const {
        cartData,
        increaseProductAmount,
        decreaseProductAmount,
        removeProductInCart,
    } = UseCartData((state) => ({
        cartData: state.cartData,
        increaseProductAmount: state.increaseProductAmount,
        decreaseProductAmount: state.decreaseProductAmount,
        removeProductInCart: state.removeProductInCart,
    }));
    const productsWithTotalPrice = cart.map((product) => {
        const totalPrice = parseFloat(product.productPrice) * product.productAmount;
        return { ...product, totalPrice };
    })
    const products = productsWithTotalPrice;

    const handleInc = (product) => {
        increaseProductAmount(product);
    };

    const handleDec = (product) => {
        decreaseProductAmount(product);
    };

    const handleRem = (product) => {
        removeProductInCart(product);
    };
    const totalPrice = cart.reduce((total, prod) => total + parseFloat(prod.Cart_item.subtotal_price), 0);
    const total = totalPrice.toString().substring(0, 5)
    const totalWeight = cart.reduce((weight, prod) => weight + parseFloat(prod.Cart_item.quantity), 0);
    const weight = totalWeight.toString().substring(0, 5)

    return (
        <>
            <Navbar2>My Cart</Navbar2>

            <div className="flex flex-col md:py-28 py-14 pb-32  gap-7  px-[5%]">
                {cart.map((product) => (
                    <>
                        <div className="flex justify-between md:h-[114px] h-auto items-center  ">
                            <div className="flex md:flex-row flex-col w-[60%]   justify-arround">
                                <div className=" flex justify-center md:justify-start items-center">
                                    <button onClick={() => handleRem(product)} className="mr-10 w-8 shrink-0">
                                        <img src="/images/svg/exit-full-screen.png" alt="" />
                                    </button>
                                    <img
                                        className=" object-contain  w-[100px] h-[100px]"
                                        src={product.img_url}
                                        alt="img"
                                    />
                                </div>
                                <div className=" flex flex-col justify-center items-center font-bold ">
                                    <h3 className="p-1">{product.name}</h3>
                                    {/* <p>{product.weight} Kg</p> */}
                                    <div className="flex">
                                        <button
                                            onClick={() => handleDec(product)}
                                            className="rounded-xl border border-gray-200 w-[45.67px] h-[45.668px] px-2 py-2 text-grey-300 bg-white-300 text-lg"
                                        >
                                            -
                                        </button>
                                        <span className="px-2 py-2">{product.Cart_item.quantity} Kg</span>
                                        <button
                                            onClick={() => handleInc(product)}
                                            className="rounded-xl border border-gray-200 w-[45.67px] h-[45.668px] px-2 py-2 text-grey-300 bg-white-300 text-lg"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold flex items-center justify-end " >
                                <span>$</span>
                                {product.Cart_item.subtotal_price}

                            </div>
                        </div>
                        <hr className="md:hidden border" />
                    </>
                ))}
            </div>
            <div>
                <BtnGreen onClick={openModal}>
                    <div>
                        <span className="w-[134.125px] h-3.5 shrink-0 text-[#FCFCFC] text-lg not-italic font-semibold leading-[18px]">
                            Checkout <span className=" absolute right-[5%]">{'Total: $' + total}</span>
                        </span>
                    </div>
                </BtnGreen>

                <CheckoutModal
                    showModal={showModal}
                    closeModal={closeModal}
                    selectedProvince={selectedProvince}
                    selectedCity={selectedCity}
                    data={data}
                    paymentMethods={paymentMethods}
                    handleProvinceChange={handleProvinceChange}
                    handleCityChange={handleCityChange}
                    total={total}
                    weight={weight}
                    
                />
            </div>
        </>
    );
}
export default Cart;
