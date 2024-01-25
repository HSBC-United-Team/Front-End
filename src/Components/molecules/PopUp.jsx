
import Heading from "../atoms/Heading";

export const Pending = ({ onClick }) => {
    return (
        <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
            <div className="w-[20%] p-3 h-[60%] justify-center items-center flex flex-col gap-5 bg-[#fff] relative">
                <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>
                <Heading>INVOICE</Heading>
                <img alt="Product Picture" />

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
        </div>)
}
export const Processed = ({ onClick }) => {
    return (
        <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
            <div className="w-[20%] p-3 h-[60%] justify-center items-center flex flex-col gap-5 bg-[#fff] relative">
                <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>

            </div>
        </div>)}
export const Shipping = ({ onClick }) => {
        return (
            <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
                <div className="w-[20%] p-3 h-[60%] justify-center items-center flex flex-col gap-5 bg-[#fff] relative">
                    <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>

                </div>
            </div>)}
export const Delivered = ({ onClick }) => {
            return (
                <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
                    <div className="w-[20%] p-3 h-[60%] justify-center items-center flex flex-col gap-5 bg-[#fff] relative">
                        <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>

                    </div>
                </div>)}
export const Cancelled = ({ onClick }) => {
                return (
                    <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50 ">
                        <div className="w-[20%] p-3 h-[60%] justify-center items-center flex flex-col gap-5 bg-[#fff] relative">
                            <span className="absolute top-3 right-3 cursor-pointer" onClick={onClick}>&times;</span>

                        </div>
                    </div>)}