import {  IconKeranjang } from "../../../public/icons";
import { useFavProducts } from "../../stores/useFavProducts";
import BtnGreen from "../atoms/BtnGreen";
import { Navbar2 } from "../organisms/Navbar2";


function Fav() {

    const { favProducts,removeFavProduct } = useFavProducts((state) => ({
        favProducts: state.favProducts,
        removeFavProduct:state.removeFavProduct
    }));
    const handlerem=(product)=>{
        removeFavProduct(product)
    }
    return (
        <>
            <Navbar2>Favorite</Navbar2>

            <div className="flex flex-col py-14 md:py-28 pb-32    px-[5%]">
                {favProducts.map((product) =>
                    <>
                        <div className="flex justify-between md:h-[114px] h-auto items-center  ">
                            <div className="flex md:flex-row flex-col w-[60%]   justify-arround">
                                <div className=" flex justify-center md:justify-start items-center">
                                    <button onClick={()=>handlerem(product)} className="mr-10 w-8 shrink-0">
                                        <img src="/images/svg/exit-full-screen.png" alt="" />
                                    </button>
                                    <img
                                        className=" object-contain  w-[100px] h-[100px]"
                                        src={product.productImage}
                                        alt="img"
                                    />
                                </div>
                                <div className="font-bold flex flex-col justify-center items-center ">
                                    <h3>{product.productName}</h3>
                                    <p>{product.productWeight}</p>
                                </div>
                            </div>
                            <button className="font-bold flex items-center gap-2">
                            <span>$</span>{product.productPrice}
                                <IconKeranjang />
                            </button>
                        </div>
                        <hr className="md:hidden border" />
                    </>
                )}
            </div>
            <BtnGreen>Add All To Cart</BtnGreen>
        </>
    );
}
export default Fav;
