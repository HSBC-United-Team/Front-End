import { useEffect, useState } from "react";
import Heading from "../atoms/Heading";
import axios from "axios";

const EditProductModal = ({ open, onClose, selectedProduct }) => {
  if (!open) return null;

  const [values, setValues] = useState({
    name: "",
    stock_level: "",
    price: "",
    weight: "",
    description: "",
    img_url: "",
  });

  useEffect(() => {
    // Update the form values when selectedProduct changes
    setValues((prevValues) => ({
      ...prevValues,
      name: selectedProduct.name,
      stock_level: selectedProduct.stock_level,
      price: selectedProduct.price,
      weight: selectedProduct.weight,
      description: selectedProduct.description,
      img_url: selectedProduct.img_url,
    }));
  }, [selectedProduct]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const { id } = selectedProduct;
    axios
      .put(`http://localhost:3000/api/v1/products/${id}`, values, {
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
          <form onSubmit={handleUpdate}>
            <div className="mx-5">
              <div className="mb-4">
                <label className="text-md font-semibold">Product Name</label>
                <input
                  className="border rounded-lg w-full h-10 px-3"
                  type="text"
                  placeholder="Product Name"
                  value={values.name}
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
                  value={values.stock_level}
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
                  value={values.price}
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
                  value={values.weight}
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
                  value={values.description}
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
                  value={values.img_url}
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

export default EditProductModal;
