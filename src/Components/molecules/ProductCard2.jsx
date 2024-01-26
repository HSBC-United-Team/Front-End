import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductCard2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/products");
    setProducts(response.data.products);
  };
  return (
    <>
      {products.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product) => {
          return (
            <div key={product.id}>
              <div className="flex relative flex-col justify-beetwen p-4 h-64 border-[1px] border-[#E2E2E2] rounded-2xl hover:scale-105 hover:border-green-800">
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
                  <div className="mt-6">
                    <span className="harga font-semibold">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ProductCard2;
