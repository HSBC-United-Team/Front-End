import { IconBackArrow } from "../../../public/icons";
import BtnGreen from "../atoms/BtnGreen";
import { Navbar2 } from "../organisms/Navbar2";
import products from "/public/data/productList";

function Fav() {
    products;
    return (
        <>
            <Navbar2>Favorite</Navbar2>
            <div className="flex flex-col py-24 pb-32    px-[5%]">
                {products.map((product) =>
                    <>
                        <div className="flex justify-between h-[114px] items-center  ">
                            <div className="grid grid-cols-2 w-[60%]  justify-arround">
                                <div className=" flex justify-center items-center">
                                    <img
                                        className=" object-contain  w-[100px] h-[100px]"
                                        src={product.image}
                                        alt="img"
                                    />
                                </div>
                                <div className=" flex flex-col justify-center ">
                                    <h3>{product.name}</h3>
                                    <p>{product.weight}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {product.price}
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
