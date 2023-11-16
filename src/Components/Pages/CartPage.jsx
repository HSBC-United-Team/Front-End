
import BtnGreen from "../atoms/BtnGreen";
import Logo from "../molecules/Logo";
import Navbar from "../organisms/Navbar";
import products from "../../../public/data/productList";


function Cart() {
    products
    return (
        <>
            <div
                className="fixed text-center w-full bg-white md:justify-center md:flex md:mx-auto  md:px-12 md:py-2 md:items-center flex-around"
                style={{
                    boxShadow: "-12px 0px 37px 0px rgba(230, 235, 243, 0.5)",
                }}
            >
                <Logo className=" hidden " />
                <h1 className=" text-center font-bold my-4 text-[30px] md:w-[35%] ">My Cart</h1>
                <hr className="md:hidden border" />
                <Navbar />
            </div>
            <div className="flex flex-col py-24 pb-32    px-[5%]">
                {products.map((prod) =>
                    <>
                        <div className="flex justify-between h-[114px] ">
                            <div className="grid grid-cols-3 w-[100%]  justify-arround ">
                                <div className=" flex justify-center items-center ">
                                    <img className=" object-contain  w-[100px] h-[100px]" src={prod.image} alt="img" />
                                </div>
                                <div className=" flex flex-col justify-center ">
                                    <h3>{prod.name}</h3>
                                    <p>{prod.weight}</p>
                                    <div className="flex">
                                    
                                    
                                    <button className="rounded-xl border border-gray-200 w-[45.67px] h-[45.668px] px-2 py-2 text-grey-300 bg-white-300 text-lg">-</button>
                                    <span className="px-2 py-2">1</span>
                                    <button className="rounded-xl border border-gray-200 w-[45.67px] h-[45.668px] px-2 py-2 text-grey-300 bg-white-300 text-lg">+</button>
                                 
                                    </div>
                                    
                                   
                                   
                                </div>
                            </div>
                               <div className="flex items-end justify-end mb-6">
                                        {prod.price}
                                    </div>
                        </div>
                        <hr className="md:hidden border" />
                    </>
                )}
            </div>
            <div >
            <BtnGreen>
                <div>
                <span className="w-[134.125px] h-3.5 shrink-0 text-[#FCFCFC] text-lg not-italic font-semibold leading-[18px]">Go to Checkout</span>
                <span className="rounded-md bg-green-500 text-[#FCFCFC] text-xs not-italic font-semibold leading-[18px]">PPPPP</span>
                </div>
            </BtnGreen>
            </div>
        </>
    )
}
export default Cart

