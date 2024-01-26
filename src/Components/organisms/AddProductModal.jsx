import React from "react";
import Heading from "../atoms/Heading";

const AddProductModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="w-[60%] p-5 h-[90%] flex flex-col bg-[#fff] relative gap-5 overflow-y-auto rounded-lg">
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
          <Heading>Create Product</Heading>
          <form action="">
            <div className="mx-5">
              <div className="mb-4">
                <label className="text-md font-semibold">Product Name</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Product Name"
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Price</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Price"
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Weight</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Weight"
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Description</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Description"
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Image</label>
                <div>
                  <input className="" type="file" />
                </div>
              </div>
              <button className="border rounded-lg px-6 py-2 my-2 bg-green-500 text-white hover:bg-green-900">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProductModal;
