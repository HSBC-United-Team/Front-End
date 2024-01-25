import { useEffect, useState } from "react";
import { IconKeranjang } from "../../../public/icons";
import { useFavProducts } from "../../stores/useFavProducts";
import BtnGreen from "../atoms/BtnGreen";
import { Navbar2 } from "../organisms/Navbar2";


const Fav=async()=>{

    const { favProducts, removeFavProduct } = useFavProducts((state) => ({
        favProducts: state.favProducts,
        removeFavProduct: state.removeFavProduct
    }));
    const handlerem = (product) => {
        removeFavProduct(product)
    }
    const [fav, setFav] = useState()
    const customerId = 1;

    try {
        const response = await fetch('https://localhost:3000/api/v1/favorites');
        const data= await response.json()
        console.log(data)
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching products:', response.status, errorData);
            // Handle error response
        } else {
            const products = await response.json();
            console.log('Products:', products);
            // Handle successful response
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        // Handle network or other errors
    }
    console.log(fav)
    return (
        <>
            <Navbar2>Favorite</Navbar2>

            <div className="flex flex-col py-14 md:py-28 pb-32    px-[5%]">
                {fav > 0 ? (
                    fav.map((product) =>
                        <>
                            <div className="flex justify-between md:h-[114px] h-auto items-center  ">
                                <div className="flex md:flex-row flex-col w-[60%]   justify-arround">
                                    <div className=" flex justify-center md:justify-start items-center">
                                        <button onClick={() => handlerem(product)} className="mr-10 w-8 shrink-0">
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
                    )) : (
                    <p className="text-center font-bold text-xl">Keranjang Favorit Kosong</p>
                )}

            </div>
            <BtnGreen>Add All To Cart</BtnGreen>
        </>
    );
}
export default Fav;
