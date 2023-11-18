import BtnGreen from "../atoms/BtnGreen";
import { Navbar2 } from "../organisms/Navbar2";
import { UseCartData } from "../../stores/useCartData";
import { useCartState } from "../atoms/CartState";
import CheckoutModal from "../organisms/CheckoutModals";
import Logo from "../molecules/Logo";
import Navbar from "../organisms/Navbar";

function Cart() {
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
      <Navbar2>My Cart</Navbar2>
      
      <div className="flex flex-col py-28 pb-32    px-[5%]">
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
        <BtnGreen onClick={openModal}>
          <div>
            <span className="w-[134.125px] h-3.5 shrink-0 text-[#FCFCFC] text-lg not-italic font-semibold leading-[18px]">
              Checkout Pesanan
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
        />
      </div>
    </>
  );
}
export default Cart;
