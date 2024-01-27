import React, { useEffect, useState } from "react";
import Heading from "../atoms/Heading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProductModal = ({ open, onClose }) => {
  if (!open) return null;

  const [values, setValues] = useState({
    name: "",
    stock_level: "",
    price: "",
    weight: "",
    description: "",
    img_url: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/v1/products", values, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        onClose();
        location.reload();
      })
      .catch((err) => console.log(err));
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
          <form onSubmit={handleSubmit}>
            <div className="mx-5">
              <div className="mb-4">
                <label className="text-md font-semibold">Product Name</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Product Name"
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Stock</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Stock"
                  onChange={(e) =>
                    setValues({ ...values, stock_level: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Price</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Price"
                  onChange={(e) =>
                    setValues({ ...values, price: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Weight</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Weight"
                  onChange={(e) =>
                    setValues({ ...values, weight: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Description</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Description"
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="text-md font-semibold">Image Url</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Image Url"
                  onChange={(e) =>
                    setValues({ ...values, img_url: e.target.value })
                  }
                />
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
