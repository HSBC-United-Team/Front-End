import { IconBackArrow } from "../../../public/icons";
import BtnGreen from "../atoms/BtnGreen";
import Logo from "../molecules/Logo";
import Navbar from "../organisms/Navbar";
import products from "/public/data/productList";


function Fav() {
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
                <h1 className=" text-center font-bold my-4 text-[30px] md:w-[35%] ">Favorite</h1>
                <hr className="md:hidden border" />
                <Navbar />
            </div>
            <div className="flex flex-col py-24 pb-32    px-[5%]">
                {products.map((prod) =>
                    <>
                        <div className="flex justify-between h-[114px] items-center  ">
                            <div className="grid grid-cols-2 w-[60%]  justify-arround">
                                <div className=" flex justify-center items-center">
                                    <img className=" object-contain  w-[100px] h-[100px]" src={prod.image} alt="img" />
                                </div>
                                <div className=" flex flex-col justify-center ">
                                    <h3>{prod.name}</h3>
                                    <p>{prod.weight}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {prod.price}
                                <IconBackArrow />
                            </div>
                        </div>
                        <hr className="md:hidden border" />
                    </>
                )}
            </div>
            <BtnGreen>Add All To Cart</BtnGreen>
        </>
    )
}
export default Fav

