// import { IconPlus } from "../../../public/icons";

function BtnAddProduct({ onClick,children,className }) {

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export default BtnAddProduct;
