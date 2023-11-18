import BtnAddProduct from "../atoms/BtnAddProdcut";
import axios from "axios";
import { useState, useEffect } from "react";

function ProductCard() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("https://65582f239c0b643cb2d6e01b.mockapi.io/products")
      .then((res) => {
        setProductList(res.data);
      });
  }, []);
  return (
    <>
      {productList.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        productList.map((product) => {
          return (
            <>
              <div className="flex flex-col justify-beetwen p-4 h-64 border-[1px] border-[#E2E2E2] rounded-2xl hover:scale-105 hover:border-green-800">
                <button className="flex h-[55%] mx-auto my-auto">
                  <img
                    className="max-h-full mx-auto my-auto"
                    src={product.image}
                    alt="Product Picture"
                  />
                </button>
                <div className=" h-[45%]">
                  <h3 className="nama font-semibold">{product.name}</h3>
                  <p className="text-[#7C7C7C] text-[14px]">{product.weight}</p>
                  <div className="flex justify-between items-end">
                    <span className="harga font-semibold">
                      ${product.price}
                    </span>
                    <BtnAddProduct />
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default ProductCard;
