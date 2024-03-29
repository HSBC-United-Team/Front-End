/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UseCartData } from "../../stores/useCartData";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CheckoutModal = ({
  total,
  weight,
  showModal,
  closeModal,
  selectedProvince,
  selectedCity,
  data,
  paymentMethods,
  handleProvinceChange,
  handleCityChange,
}) => {
  const navigate = useNavigate();
  const { removeAllProductsInCart, cartData } = UseCartData((state) => {
    return {
      removeAllProductsInCart: state.removeAllProductsInCart,
      cartData: state.cartData,
    };
  });
  const totalPrice = cartData.reduce((total, product) => {
    return total + parseFloat(product.productAmount * product.productPrice);
  }, 0);

  const [totalBiaya, setTotalBiaya] = React.useState("");

  const [namaPenerima, setNamaPenerima] = useState('');
  const [alamat, setAlamat] = useState('');
  const [prov, setProv] = useState('');
  const [kota, setKota] = useState('');
  const [pos, setPos] = useState('');
  // const [total, setTotal] = useState('');
  const [wight,setWeight] =useState('')
  const [cartId,setCartId] =useState('')
  const cart = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/carts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: "include",

      })
      const result = await response.json();
      const inCart=result.carts.id
      setCartId(inCart)
      console.log(inCart)
    } catch (error) {
      console.error(error)
    }

  }
  useEffect(() => {
    cart()
  }, []);
  console.log(`cart dengan id ${cartId}`)

  console.log(alamat, prov, kota, pos)
  const handleAlamat=(event)=>{
    setAlamat(event.target.value)
  }
  const handleProv=(event)=>{
    setProv(event.target.value)
    handleProvinceChange(event)
  }
  const handleKota=(event)=>{
    setKota(event.target.value)
    handleCityChange(event)
  }
  const handlePos=(event)=>{
    setPos(event.target.value)
  }
  console.log("total belanja "+ total)
  console.log("total weight "+ weight)
  const handlePesanClick = (e) => {
    e.preventDefault();
    const createOrder = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "shipping_address": alamat, kota, prov, pos,
            "total_price": total,
            "weight": weight,
            "cart_id": cartId
          }),
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Order created successfully:', responseData);
      } catch (error) {
        console.error('Error creating order. Response:')
      }
    };

    createOrder()
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Order has been accepted",
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: "Back to Home",
      confirmButtonColor: "#53B175",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        removeAllProductsInCart();
        navigate("/home");
      }
    });
  };

  const handleTotalBiayaChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setTotalBiaya(Number(value).toLocaleString("id-ID"));
  };


  return (
    showModal && (
      <div
        id="shippingForm"
        className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-80 flex justify-center items-center"
      >
        {/* <div className=" h-screen"> */}
        <div className=" bg-white p-8 rounded-md shadow-md w-2/3 h-[90%] box-border flex flex-col overflow-scroll">
          <h1 className="text-3xl mb-6 text-center font-bold text-green-600">
            <i className="fas fa-shipping-fast"></i> Detail Pengiriman
          </h1>
          <form>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                Provinsi
              </label>
              <select
                name="state"
                id="state"
                className="mt-1 p-3 w-full border rounded-md bg-gray-100"
                value={selectedProvince}
                onChange={handleProv}
              >
                {Object.keys(data).map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Kota Pengiriman
              </label>
              <select
                name="city"
                id="city"
                className="mt-1 p-3 w-full border rounded-md bg-gray-100"
                value={selectedCity}
                onChange={handleKota}
              >

                {selectedProvince &&
                  data[selectedProvince].cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                Kode Pos
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                onChange={handlePos}
                className="mt-1 p-3 w-full border rounded-md bg-gray-100"
                value={
                  selectedCity
                    ? data[selectedProvince].zips[
                    data[selectedProvince].cities.indexOf(selectedCity)
                    ]
                    : ""
                }
                readOnly
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="alamatPenerima"
                className="block text-sm font-medium text-gray-700"
              >
                Alamat Penerima
              </label>
              <input
                type="text"
                onChange={handleAlamat}
                name="alamatPenerima"
                className="mt-1 p-3 w-full border rounded-md bg-gray-100"
              />
            </div>
            <h1 className="text-3xl mt-8 text-center font-bold text-green-600">
              <i className="far fa-credit-card"></i> Informasi Pembayaran
            </h1>
            <div className="mt-4">
              <label
                htmlFor="paymentMethod"
                className="block text-sm font-medium text-gray-700"
              >
                Metode Pembayaran
              </label>
              <div className="relative">
                <select
                  name="paymentMethod"
                  id="paymentMethod"
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500 focus:shadow-outline-green focus:ring"
                >
                  {paymentMethods.map((method) => (
                    <option key={method} value={method.toLowerCase()}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="totalCost"
                className="block text-sm font-medium text-gray-700"
              >
                Total Biaya
              </label>
              <div className="relative">
                <span className="text-gray-700 absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* ${totalPrice.toLocaleString().substring(0, 5)} */}
                  ${total}
                </span>
                <input
                  type="text"
                  name="totalCost"
                  className="mt-1 p-3 pl-8 w-full border rounded-md bg-gray-100"
                  value={totalBiaya}
                  onChange={handleTotalBiayaChange}
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-8">
              <button
                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 focus:outline-none"
                onClick={handlePesanClick}
              >
                Pesan
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-8 py-3 rounded-md hover:bg-gray-700 focus:outline-none"
              >
                Kembali ke Keranjang
              </button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
    )
  );
};

export default CheckoutModal;
