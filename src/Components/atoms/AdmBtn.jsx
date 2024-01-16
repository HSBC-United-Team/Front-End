// import { IconPlus } from "../../../public/icons";
import { useState } from "react"

function AdmBtn({ onClickk,children,className }) {

    // const [active, setActive]=useState(false)
    // const color= {
    //     backgroundColor:active? "white": "green",
    //     color:active?"green":"white"
    // }
    // const btnActive=()=>{
    //     setActive(!active)
    // } 
    return (
        <button className = {`py-2 ${className} border border-green-500 border-b-0 font-bold  rounded-t-lg w-full hover:scale-105`} onClick={onClickk}>
            {children}
        </button>
    );
}

export default AdmBtn;
