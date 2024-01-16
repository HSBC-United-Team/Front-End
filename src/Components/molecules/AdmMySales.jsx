import { data } from "autoprefixer"
import AdmBtn from "../atoms/AdmBtn"
import Heading from "../atoms/Heading"
import { useEffect, useState } from "react"
import React from "react"

const MySales = () => {
    const [popup, setPopup] = useState(false)
    const btnPop = () => {
        setPopup(true)
    }
    function PopUp({ onClose }) {

        return (
            <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
                <div className="w-[20%] p-3 h-[60%] justify-center items-center flex flex-col gap-5 bg-[#fff] relative">
                    <span className="absolute top-3 right-3 cursor-pointer" onClick={onClose}>&times;</span>
                    <Heading>INVOICE</Heading>
                    <img alt="Product Picture"/>
                    <p>{console.log(data)}</p>
                    <div className="w-[50%]">
                    <h3 className="font-semibold">Customer</h3>
                    <p>Name :</p>
                    <p>Telp :</p>
                    <p>Address :</p>
                    <p>Quantity :</p>
                    <p>Price :</p>
                    <p>Total :</p>
                    </div>
                </div>
            </div>

        )
    }

    const [active, setActive] = useState(1)
    const btnActive = (btnNumber) => {
        setActive(btnNumber)
    }
    const BelumSelesai = () => {
        const [data, setData] = useState(null)
        useEffect(() => {
            const fetchdata = async () => {
                try {
                    const response = await fetch('https://dummyjson.com/products')
                    const result = await response.json()
                    console.log(result.products)
                    setData(result.products)

                } catch (error) {
                    console.error('error fetching data')
                }
            }
            fetchdata()
        }, [])
        console.log(typeof (data))
        console.log(data)

        return (
            data ? (
                <div className="flex flex-col ">
                    {data.map((poto, index) => (
                        <div className="grid-cols-3 items-center justify-center grid m-2 border p-2 rounded-lg border-green-400" key={index}>
                            {/* <div className="flex justify-evenly" key={index}> */}
                            <div className="flex justify-center">

                                <img src={poto.thumbnail} className="h-12 w-12" />
                            </div>
                            <p>{poto.title}</p>
                            <div className="flex justify-center gap-2">
                                <button className="p-2 text-white font-semibold border rounded-lg bg-green-500" onClick={() => { btnPop() }}>Invoice</button>
                                <button className="p-2 text-white font-semibold border rounded-lg bg-green-500">Shipment</button>
                            </div>
                        </div>
                    ))}
                    {popup && <PopUp onClose={() => setPopup(false)} />}

                </div>
            ) : (
                <p>Loading data</p>
            )
        );
    }
    const Berjalan = () => {
        return (
            <div className="flex justify-around p-3">
                {/* <div className="flex justify-around p-3"> */}
                <p>gambar</p>
                <p>nama produk</p>
                <button className="p-1 border rounded-lg border-green-400">Invoice</button>

            </div>
        )
    }
    const Selesai = () => {
        return (
            <div className="flex justify-around p-3">
                <p>gambar</p>
                <p>nama produk</p>
                <button >Status: Terkirim</button>

            </div>
        )
    }
    const Total = () => {
        return (
            <div className="flex justify-around p-3">
                <table className="w-full text-center rounded-lg">
                    <tr>
                        <td className="border border-green-400">Nama Produk</td>
                        <td className="border border-green-400">Harga</td>
                        <td className="border border-green-400">Quantity</td>
                        <td className="border border-green-400">Total</td>
                        <td className="border border-green-400">Saldo</td>
                    </tr>

                </table>
            </div>
        )
    }
    return (
        <div className="flex flex-col m-auto w-[90%] pb-[40px] border-green-600">
            <Heading>My Sales</Heading>
            <div className="border-1 border-green-500  border-b-0 flex justify-around bg-green-500 rounded-tr-lg rounded-tl-lg">
                <AdmBtn onClickk={() => { btnActive(1) }} className={`${active == 1 ? "bg-white text-green-400 hover:bg-white" : "bg-green-500 text-white"}`}>Belum diproses</AdmBtn>
                <AdmBtn onClickk={() => { btnActive(2) }} className={`${active == 2 ? "bg-white text-green-400 hover:bg-white" : "bg-green-500 text-white"}`}>Dalam Pengiriman</AdmBtn>
                <AdmBtn onClickk={() => { btnActive(3) }} className={`${active == 3 ? "bg-white text-green-400 hover:bg-white" : "bg-green-500 text-white"}`}>Orderan Selesai</AdmBtn>
                <AdmBtn onClickk={() => { btnActive(4) }} className={`${active == 4 ? "bg-white text-green-400 hover:bg-white" : "bg-green-500 text-white"}`}>Total Order</AdmBtn>
            </div>
            <div className="border border-t-0 border-green-400">
                {active == 1 && <BelumSelesai />}
                {active == 2 && <Berjalan />}
                {active == 3 && <Selesai />}
                {active == 4 && <Total />}
            </div>
        </div>
    )
}
export default MySales;