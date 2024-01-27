import { useEffect, useState } from "react";
import Heading from "../atoms/Heading";

const API = ({ }) => {


    return null;
};

export const Pending = ({ onClick, prodId }) => {
    const [prodIds, setProdIds] = useState([]);

    const fetchData = async () => {
        const dataOrders = await fetch("http://localhost:3000/api/v1/orders/own-orders", {
            credentials: "include"
        });
        const response = await dataOrders.json();
        const orders = response.orders;
        const filteredOrders = orders.filter(order => order.order_status === "waiting for confirmation");
        setProdIds(filteredOrders);
        console.log(orders)
    };

    useEffect(() => {

        fetchData();
    }, []);


    return (
        <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="w-[75%] p-1 pt-5 h-[60%] rounded-lg items-center flex flex-col gap-5 bg-[#fff] relative">
                <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>
                <Heading>Waiting Confirmation</Heading>
                <API prodId={prodIds} />
                {prodIds && prodIds.length > 0 ? (
                    prodIds.map((order, index) => (
                        <div className="w-[90%] flex gap-3 text-xs" key={index}>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Order Id :</p><p>{order.id}</p>
                            </div>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Weight :</p><p>{order.weight} Kg</p>
                            </div>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Price :</p><p>$ {order.total_price}</p>
                            </div>
                            <div className="w-[55%] flex flex-col items-center text-center">
                                <p className="font-semibold">Address :</p><p>{order.shipping_address}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-[50%] flex flex-col items-center gap-5 justify-center">
                        <img className="w-[50%]" src="public/images/tracking_order/empty-box.png" alt="" />
                        <p className="font-bold text-lg">Empty</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export const Processed = ({ onClick }) => {
    const [prodId, setProdIds] = useState([]);

    const fetchData = async () => {
        const dataOrders = await fetch("http://localhost:3000/api/v1/orders/own-orders", {
            credentials: "include"
        });
        const response = await dataOrders.json();
        const orders = response.orders;
        const filteredOrders = orders.filter(order => order.order_status == "pending");
        setProdIds(filteredOrders);

    };

    useEffect(() => {

        fetchData();
    }, []);

    return (
        <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
            <div className="w-[75%] p-1 pt-5 h-[60%] rounded-lg  items-center flex flex-col gap-5 bg-[#fff] relative">
                <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>
                <Heading>On Process</Heading>
                {prodId && prodId.length > 0 ? (
                    prodId.map((order, index) => (
                        <div className="w-[90%] flex gap-3  text-xs " key={index}>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Order Id :</p><p> {order.id}</p>
                            </div>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Weight :</p><p> {order.weight} Kg</p>
                            </div>
                            <div className=" w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Price :</p><p> $ {order.total_price}</p>
                            </div>
                            <div className="w-[55%] flex flex-col items-center text-center">
                                <p className="font-semibold">Address :</p><p> {order.shipping_address}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-[50%] flex flex-col items-center gap-5 justify-center">
                        <img className="w-[50%]" src="public/images/tracking_order/empty-box.png" alt="" />
                        <p className="font-bold text-lg">Empty</p>
                    </div>
                )}

            </div>
        </div>)
}
export const Shipping = ({ onClick }) => {
    const [prodId, setProdIds] = useState([]);

    const fetchData = async () => {
        const dataOrders = await fetch("http://localhost:3000/api/v1/orders/own-orders", {
            credentials: "include"
        });
        const response = await dataOrders.json();
        const orders = response.orders;
        const filteredOrders = orders.filter(order => order.order_status == "shipped");
        setProdIds(filteredOrders);

    };

    useEffect(() => {

        fetchData();
    }, []);
    return (
        <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
            <div className="w-[75%] p-1 pt-5 h-[60%] rounded-lg  items-center flex flex-col gap-5 bg-[#fff] relative">
                <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>
                <Heading>Shipping</Heading>
                {prodId && prodId.length > 0 ? (
                    prodId.map((order, index) => (
                        <div className="w-[90%] flex gap-3  text-xs " key={index}>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Order Id :</p><p> {order.id}</p>
                            </div>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Weight :</p><p> {order.weight} Kg</p>
                            </div>
                            <div className=" w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Price :</p><p> $ {order.total_price}</p>
                            </div>
                            <div className="w-[55%] flex flex-col items-center text-center">
                                <p className="font-semibold">Address :</p><p> {order.shipping_address}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-[50%] flex flex-col items-center gap-5 justify-center">
                        <img className="w-[50%]" src="public/images/tracking_order/empty-box.png" alt="" />
                        <p className="font-bold text-lg">Empty</p>
                    </div>
                )}

            </div>
        </div>)
}
export const Delivered = ({ onClick }) => {
    const [prodId, setProdIds] = useState([]);

    const fetchData = async () => {
        const dataOrders = await fetch("http://localhost:3000/api/v1/orders/own-orders", {
            credentials: "include"
        });
        const response = await dataOrders.json();
        const orders = response.orders;
        const filteredOrders = orders.filter(order => order.order_status == "delivered");
        setProdIds(filteredOrders);

    };

    useEffect(() => {

        fetchData();
    }, []);
    return (
        <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
            <div className="w-[75%] p-1 pt-5 h-[60%] rounded-lg  items-center flex flex-col gap-5 bg-[#fff] relative">
                <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>
                <Heading>Delivered</Heading>
                {prodId && prodId.length > 0 ? (
                    prodId.map((order, index) => (
                        <div className="w-[90%] flex gap-3  text-xs " key={index}>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Order Id :</p><p> {order.id}</p>
                            </div>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Weight :</p><p> {order.weight} Kg</p>
                            </div>
                            <div className=" w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Price :</p><p> $ {order.total_price}</p>
                            </div>
                            <div className="w-[55%] flex flex-col items-center text-center">
                                <p className="font-semibold">Address :</p><p> {order.shipping_address}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-[50%] flex flex-col items-center gap-5 justify-center">
                        <img className="w-[50%]" src="public/images/tracking_order/empty-box.png" alt="" />
                        <p className="font-bold text-lg">Empty</p>
                    </div>
                )}

            </div>
        </div>)
}
export const Cancelled = ({ onClick }) => {
    const [prodId, setProdIds] = useState([]);

    const fetchData = async () => {
        const dataOrders = await fetch("http://localhost:3000/api/v1/orders/own-orders", {
            credentials: "include"
        });
        const response = await dataOrders.json();
        const orders = response.orders;
        const filteredOrders = orders.filter(order => order.order_status == "cancelled");
        setProdIds(filteredOrders);

    };

    useEffect(() => {

        fetchData();
    }, []);
    return (
        <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
            <div className="w-[75%] p-1 pt-5 h-[60%] rounded-lg  items-center flex flex-col gap-5 bg-[#fff] relative">
                <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>
                <Heading>Cancelled</Heading>
                {prodId && prodId.length > 0 ? (
                    prodId.map((order, index) => (
                        <div className="w-[90%] flex gap-3  text-xs " key={index}>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Order Id :</p><p> {order.id}</p>
                            </div>
                            <div className="w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Weight :</p><p> {order.weight} Kg</p>
                            </div>
                            <div className=" w-[15%] flex flex-col items-center">
                                <p className="font-semibold">Price :</p><p> $ {order.total_price}</p>
                            </div>
                            <div className="w-[55%] flex flex-col items-center text-center">
                                <p className="font-semibold">Address :</p><p> {order.shipping_address}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-[50%] flex flex-col items-center gap-5 justify-center">
                        <img className="w-[50%]" src="public/images/tracking_order/empty-box.png" alt="" />
                        <p className="font-bold text-lg">Empty</p>
                    </div>

                )}

            </div>
        </div>)
}