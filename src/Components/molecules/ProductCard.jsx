import BtnAddProduct from "../atoms/BtnAddProdcut";
import axios from "axios";
import { useState, useEffect } from "react";
import { UseCartData } from "../../stores/useCartData";

function ProductCard() {
    const [productList, setProductList] = useState([]);
    const { addProductToCart } = UseCartData((UseCart) => {
        return {
            addProductToCart: UseCart.addProductToCart,
        };
    });

    const handleAddToCarts = (product) => {
        addProductToCart(product);
    };

    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res) => {
            setProductList(res.data.products);
        });
    }, []);
    return (
        <>
            {productList.length < 1 ? (
                <h1>Loading...</h1>
            ) : (
                productList.map((product) => {
                    // console.log(product)
                    return (
                        <div
                            className="flex flex-col justify-beetwen p-4 h-64 border-[1px] border-[#E2E2E2] rounded-2xl hover:scale-105 hover:border-green-800"
                            key={product.id}
                        >
                            <button className="flex h-[55%] mx-auto my-auto">
                                <img
                                    className="max-h-full mx-auto my-auto"
                                    src={product.thumbnail}
                                    alt="Product Picture"
                                />
                            </button>
                            <div className=" h-[45%]">
                                <h3 className="nama font-semibold">
                                    {product.title}
                                </h3>
                                <p className="text-[#7C7C7C] text-[14px]">
                                    {product.category}
                                </p>
                                <div className="flex justify-between items-end">
                                    <span className="harga font-semibold">
                                        ${product.price}
                                    </span>
                                    <BtnAddProduct
                                        onClick={() =>
                                            // remove
                                            handleAddToCarts(product)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </>
    );
}

export default ProductCard;
