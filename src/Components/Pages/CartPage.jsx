import BtnGreen from "../atoms/BtnGreen";
import Logo from "../molecules/Logo";
import Navbar from "../organisms/Navbar";
// import products from "../../../public/data/productList";
import { UseCartData } from "../../stores/useCartData";

function Cart() {
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
  console.log(cartData);
  const products = cartData;
  const handleInc = (product) => {
    increaseProductAmount(product);
  };
  const handleDec = (product) => {
    decreaseProductAmount(product);
  };
  const handleRem = (product) => {
    removeProductInCart(product);
  };

  return (
    <>
      <div
        className="fixed text-center w-full bg-white md:justify-center md:flex md:mx-auto  md:px-12 md:py-2 md:items-center flex-around"
        style={{
          boxShadow: "-12px 0px 37px 0px rgba(230, 235, 243, 0.5)",
        }}
      >
        <Logo className=" hidden " />
        <h1 className=" text-center font-bold my-4 text-[30px] md:w-[35%] ">
          My Cart
        </h1>
        <hr className="md:hidden border" />
        <Navbar />
      </div>
      <div className="flex flex-col py-24 pb-32    px-[5%]">
        {products.map((product) => (
          <>
            <div className="flex justify-between h-[114px] ">
              <div className="grid grid-cols-3 w-[100%]  justify-arround ">
                <div className=" flex justify-start items-center ">
                  <button onClick={() => handleRem()} className="mr-10 w-8">
                    <img src="/images/svg/exit-full-screen.png" alt="" />
                  </button>
                  <img
                    className=" object-contain  w-[100px] h-[100px]"
                    src={product.productImage}
                    alt="img"
                  />
                </div>
                <div className=" flex flex-col justify-center ">
                  <h3>{product.productName}</h3>
                  <p>{product.productWeight}</p>
                  <div className="flex">
                    <button
                      onClick={() => handleDec(product)}
                      className="rounded-xl border border-gray-200 w-[45.67px] h-[45.668px] px-2 py-2 text-grey-300 bg-white-300 text-lg"
                    >
                      -
                    </button>
                    <span className="px-2 py-2">{product.productAmount}</span>
                    <button
                      onClick={() => handleInc(product)}
                      className="rounded-xl border border-gray-200 w-[45.67px] h-[45.668px] px-2 py-2 text-grey-300 bg-white-300 text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end mb-6">
                <span>Price </span>
                {product.productPrice}
              </div>
            </div>
            <hr className="md:hidden border" />
          </>
        ))}
      </div>
      <div>
        <BtnGreen>
          <div>
            <span className="w-[134.125px] h-3.5 shrink-0 text-[#FCFCFC] text-lg not-italic font-semibold leading-[18px]">
              Go to Checkout
            </span>
            {/* <span className="rounded-md bg-green-500 text-[#FCFCFC] text-xs not-italic font-semibold leading-[18px]">PPPPP</span> */}
          </div>
        </BtnGreen>
      </div>
    </>
  );
}
export default Cart;
