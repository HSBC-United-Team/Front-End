import React, { useState } from "react";
import Heading from "../atoms/Heading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProductModal = ({ open, onClose }) => {
  if (!open) return null;

  const [name, setName] = useState("");
  const [stock_level, setStocklevel] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [img_url, setImgUrl] = useState("");

  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("stock_level", stock_level);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("weight", weight);
    formData.append("img_url", img_url);
    try {
      await axios.post("http://localhost:3000/api/v1/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          credentials: "include",
        },
      });
      navigate("/admin");
    } catch (error) {
      console.log("add product error", error);
    }
  };

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
          <form onSubmit={saveProduct}>
            <div className="mx-5">
              <div className="mb-4">
                <label className="text-md font-semibold">Product Name</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Product Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Stock</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Stock"
                  value={stock_level}
                  onChange={(e) => setStocklevel(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Price</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Weight</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Description</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Image</label>
                <div>
                  <input
                    className=""
                    type="file"
                    value={img_url}
                    onChange={(e) => setImgUrl(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="border rounded-lg px-6 py-2 my-2 bg-green-500 text-white hover:bg-green-900"
                type="submit"
              >
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
