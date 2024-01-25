import { useEffect, useState } from "react";
import DetailMyProduct from "./DetailMyProduct";
import axios from "axios";

function MyProduct() {
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3000/api/v1/products");
    setProducts(response.data);
  };
  return (
    <>
      {products.map((product) => (
        <div
          className="flex flex-wrap border border-green-500 px-5 py-2 mx-5 my-2 rounded-lg"
          key={product.id}
        >
          <div className="flex-none w-40 h-24 border-2 mx-2 rounded-lg">
            <img className="max-h-full mx-auto" src={product.image} alt="" />
          </div>
          <div className="flex flex-col mx-10 my-auto">
            <div>
              <h1 className="text-2xl font-semibold">{product.name}</h1>
            </div>
            <div>${product.price}</div>
          </div>
          <div className="flex flex-wrap md:ml-auto gap-5">
            <button
              className="border-2 my-6 px-5 rounded-lg border-green-300 hover:bg-green-500 hover:text-white"
              onClick={() => {
                setSelectedProduct(product);
                setOpenModalProduct(true);
              }}
            >
              View
            </button>
            <button className="border-2 my-6 px-5 rounded-lg border-yellow-300 hover:bg-yellow-500 hover:text-white">
              Edit
            </button>
            <button className="border-2 md:my-6 px-5 rounded-lg border-red-300 hover:bg-red-500 hover:text-white">
              Delete
            </button>
          </div>
        </div>
      ))}

      <DetailMyProduct
        open={openModalProduct}
        onClose={() => {
          setSelectedProduct(null);
          setOpenModalProduct(false);
        }}
        selectedProduct={selectedProduct}
      />
    </>
  );
}
export default MyProduct;
