import { Fragment, useEffect, useState } from "react";
import { IconKeranjang } from "../../../public/icons";
import { useFavProducts } from "../../stores/useFavProducts";
import BtnGreen from "../atoms/BtnGreen";
import { Navbar2 } from "../organisms/Navbar2";
import axios from "axios";


const Fav = () => {
    const { favProducts, removeFavProduct } = useFavProducts((state) => ({
        favProducts: state.favProducts,
        removeFavProduct: state.removeFavProduct
    }));


    const [fav, setFav] = useState()
    const userDataString = localStorage.getItem("user-info")
    const userData = JSON.parse(userDataString).state.user.username;
    console.log(typeof (userData.user_id))
    console.log(userData)

    const dataFav = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/favorites`,
                {
                    credentials: 'include',
                }
            )
            const data = await response.json();
            const favoritesArray = data.favorites;
            console.log(favoritesArray)
            setFav(favoritesArray)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handlerem = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/favorites/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
        dataFav()
    }


    useEffect(() => {
        dataFav();
    }, []);
    console.log(fav)
    return (
        <>
            <Navbar2>Favorite</Navbar2>

            <div className="flex flex-col py-14 md:py-28 pb-32    px-[5%]">
                {fav ? (
                    fav.map((product, index) => {
                        return (
                            <Fragment key={index}>
                                <div className="flex justify-between md:h-[114px] h-auto items-center  ">
                                    <div className="flex md:flex-row flex-col w-[60%]   justify-arround">
                                        <div className=" flex justify-center md:justify-start items-center">
                                            <button onClick={() => handlerem(product.Product.id)} className="mr-10 w-8 shrink-0">
                                                <img src="/images/svg/exit-full-screen.png" alt="" />
                                            </button>
                                            <img
                                                className=" object-contain  w-[100px] h-[100px]"
                                                src={product.Product.img_url}
                                                alt="img product"
                                            />
                                        </div>
                                        <div className="font-bold flex flex-col justify-center items-center ">
                                            <h3>{product.Product.name}</h3>
                                            <p>{product.Product.weight} kg</p>
                                        </div>
                                    </div>
                                    <button className="font-bold flex items-center gap-4">
                                        <p>${product.Product.price} </p>

                                        <IconKeranjang />
                                    </button>
                                </div>
                                <hr className="md:hidden border" />
                            </Fragment>)
                    }
                    )) : (
                    <p className="text-center font-bold text-xl">Keranjang Favorit Kosong</p>
                )}

            </div>
            <BtnGreen>Add All To Cart</BtnGreen>
        </>
    );
}
export default Fav;
