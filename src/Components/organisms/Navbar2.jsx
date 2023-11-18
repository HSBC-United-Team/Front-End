import Logo from "../molecules/Logo"
import Navbar from "./Navbar"
export function Navbar2({children}){
    return(
        <div
                className="fixed text-center w-full bg-white md:justify-center md:flex md:mx-auto  md:px-12 md:py-2 md:items-center flex-around"
                style={{
                    boxShadow: "-12px 0px 37px 0px rgba(230, 235, 243, 0.5)",
                }}
            >
                <Logo className=" hidden " />
                <h1 className=" text-center font-bold my-4 text-[30px] md:w-[35%] ">{children}</h1>
                <hr className="md:hidden border" />
                <Navbar />
            </div>
    )
}