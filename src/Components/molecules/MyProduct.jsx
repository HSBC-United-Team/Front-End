import { useState } from "react";
import DetailMyProduct from "./detailMyProduct";
import AddProductModal from "../organisms/addProductModal";

function MyProduct() {
  const [openModalProduct, setOpenModalProduct] = useState(false);
  return (
    <>
      <div className="flex flex-wrap border-2 px-5 py-2 mx-5 my-2 rounded-lg">
        <div className="flex-none w-40 h-24 border-2 mx-2 rounded-lg">
          <img
            className="max-h-full mx-auto"
            src="https://img.freepik.com/free-vector/realistic-fruits-composition-with-images-whole-sliced-apple-fruit-blank-background-vector-illustration_1284-66032.jpg?size=626&ext=jpg&ga=GA1.2.1586005244.1694536376&semt=sph"
            alt=""
          />
        </div>
        <div className="flex flex-col mx-10 my-auto">
          <div>
            <h1 className="text-2xl font-semibold">Name</h1>
          </div>
          <div>price</div>
        </div>
        <div className="flex flex-wrap md:ml-auto gap-5">
          <button
            className="border-2 my-6 px-5 rounded-lg border-green-300 hover:bg-green-500 hover:text-white"
            onClick={() => setOpenModalProduct(true)}
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
      <DetailMyProduct
        open={openModalProduct}
        onClose={() => setOpenModalProduct(false)}
      />
    </>
  );
}
export default MyProduct;
