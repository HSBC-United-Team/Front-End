import BtnGreen from "../atoms/BtnGreen";
import { Navbar2 } from "../organisms/Navbar2";
import { UseCartData } from "../../stores/useCartData";


function Cart() {

    const { cartData, increaseProductAmount, decreaseProductAmount, removeProductInCart } = UseCartData((state) => ({
        cartData: state.cartData,
        increaseProductAmount: state.increaseProductAmount,
        decreaseProductAmount: state.decreaseProductAmount,
        removeProductInCart: state.removeProductInCart
    }));
    const products = cartData
    const handleInc = (product) => {
        increaseProductAmount(product)
    }
    const handleDec = (product) => {
        decreaseProductAmount(product)
    }
    const handleRem = (product) => {
        removeProductInCart(product)
    }
    
    return (
        <>
            <Navbar2>My Cart</Navbar2>
            <div className="flex flex-col py-24 pb-32  gap-7  px-[5%]">
                {products.map((product) =>
                    <>
                        <div className="flex items-center justify-between md:h-[114px] ">

                            <div className=" flex md:grid-cols-4 w-[50%] md:w-[100%]  md:justify-start justify-center  ">
                                <button onClick={() => handleRem()} className=" shrink-0 mr-10 w-8"><img src="/images/svg/exit-full-screen.png" alt="" /></button>
                                <div className="flex flex-col md:flex-row md:gap-[90px]">
                                    <div className=" flex md:justify-start justify-center items-center ">
                                        <img className=" object-contain  w-[100px] h-[100px]" src={product.productImage} alt="img" />
                                    </div>
                                    <div className=" flex flex-col md:justify-center justify-start items-center
                                    w-[150px] gap-1 ">
                                        <h3><b>{product.productName}</b></h3>
                                        <p>{product.productWeight}</p>
                                        <div className="flex">
                                            <button onClick={() => handleDec(product)} className="rounded-xl border border-gray-200 w-[45.67px] h-[45.668px] px-2 py-2 text-grey-300 bg-white-300 text-lg">-</button>
                                            <span className="px-2 py-2">{product.productAmount}</span>
                                            <button onClick={() => handleInc(product)} className="rounded-xl border border-gray-200 w-[45.67px] h-[45.668px] px-2 py-2 text-grey-300 bg-white-300 text-lg">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end justify-end mb-6">
                                <b><span>$</span>{product.productPrice}</b>
                            </div>
                        </div>
                        <hr className="mt-3 md:hidden border" />
                    </>
                )}
            </div>
            <div >
                <BtnGreen>
                    <div>
                        <span className="w-[134.125px] h-3.5 shrink-0 text-[#FCFCFC] text-lg not-italic font-semibold leading-[18px]">Go to Checkout</span>
                        {/* <span className="rounded-md bg-green-500 text-[#FCFCFC] text-xs not-italic font-semibold leading-[18px]">PPPPP</span> */}
                    </div>
                </BtnGreen>
            </div>
        </>
    )
}
export default Cart

