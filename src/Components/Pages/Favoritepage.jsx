import { IconBackArrow } from "../../../public/icons";
import { useFavProducts } from "../../stores/useFavProducts";
import BtnGreen from "../atoms/BtnGreen";
import { Navbar2 } from "../organisms/Navbar2";
import Logo from "../molecules/Logo";
import Navbar from "../organisms/Navbar";


function Fav() {

    const { favProducts,} = useFavProducts((state) => ({
        favProducts: state.favProducts,
    }));
    console.log(favProducts)
    return (
        <>
            <Navbar2>Favorite</Navbar2>
            
            <div className="flex flex-col py-28 pb-32    px-[5%]">
                {favProducts.map((product) =>
                    <>
                        <div className="flex justify-between h-[114px] items-center  ">
                            <div className="grid grid-cols-2 w-[60%]  justify-arround">
                                <div className=" flex justify-center items-center">
                                    <img
                                        className=" object-contain  w-[100px] h-[100px]"
                                        src={product.productImage}
                                        alt="img"
                                    />
                                </div>
                                <div className=" flex flex-col justify-center ">
                                    <h3>{product.productName}</h3>
                                    <p>{product.productWeight}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {product.productPrice}
                                <IconBackArrow />
                            </div>
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
