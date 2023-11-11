import PropTypes from "prop-types";
import BtnAddProduct from "./BtnAddProdcut";

function ProductCard(props) {
    const product = props.product;

    return (
        <>
            <div className="flex flex-col justify-beetwen p-4 h-64 border-[1px] border-[#E2E2E2] rounded-2xl hover:scale-105 hover:border-green-800">
                <button className="flex h-[55%] mx-auto my-auto">
                    <img
                        className="max-h-full mx-auto my-auto"
                        src={product.image}
                        alt="Product Picture"
                    />
                </button>
                <div className=" h-[45%]">
                    <h3 className="nama font-semibold">{product.name}</h3>
                    <p className="text-[#7C7C7C] text-[14px]">
                        {product.weight}
                    </p>
                    <div className="flex justify-between items-end">
                        <span className="harga font-semibold">
                            {product.price}
                        </span>
                        <BtnAddProduct />
                    </div>
                </div>
            </div>
        </>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        weight: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
};

export default ProductCard;
