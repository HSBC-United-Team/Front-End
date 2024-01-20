import { useState } from "react";
import MyProduct from "../molecules/MyProduct";
import AddProductModal from "./addProductModal";
import SearchMyProduct from "../molecules/SearchMyProduct";

function AdmMyProduct() {
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  return (
    <>
      <div className="m-auto w-[90%]">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold pt-4">My Products</h1>
          <div className="flex items-center gap-5">
            <SearchMyProduct />
            <button
              className="border-2 px-5 py-3 rounded-lg bg-green-500 text-white font-medium mb-2"
              onClick={() => setOpenModalAddProduct(true)}
            >
              Add Product
            </button>
          </div>
        </div>
        <div className="border rounded-lg p-3 border-green-500">
          <MyProduct />
          <MyProduct />
        </div>
      </div>
      <AddProductModal
        open={openModalAddProduct}
        onClose={() => setOpenModalAddProduct(false)}
      />
    </>
  );
}
export default AdmMyProduct;
