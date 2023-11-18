import BtnAddProduct from "../atoms/BtnAddProdcut";
import axios from "axios";
import { useState, useEffect } from "react";
import { UseCartData } from "../../stores/useCartData";
import { useFavProducts } from "../../stores/useFavProducts";
import { IconPlus } from "../../../public/icons";

// import { UseCartData } from "../../stores/useCartData";

function ProductCard() {
  const [productList, setProductList] = useState([]);
  const { addProductToCart } = UseCartData((UseCart) => {
    return {
      addProductToCart: UseCart.addProductToCart
    }})
    const handleAddToCarts = (product) => {
      addProductToCart(
        product
      );
    };
  const { addFavProduct } = useFavProducts((UseFav) => {
    return {
      addFavProduct: UseFav.addFavProduct
    }})
    const handleFav = (product) => {
      addFavProduct(
        product
      );
    };
// mengganti image icon fav 
const [imageSrc, setImageSrc] = useState("/images/svg/heart (1).png")
const [isImageChanged, setIsImageChanged] = useState(false);
const handleImageChange = () => {

  if (!isImageChanged) {
    setImageSrc("/images/svg/heart (2).png");
    setIsImageChanged(true);
  } else {
    setImageSrc("/images/svg/heart (1).png");
    setIsImageChanged(false);
  }
};
const handleBothFunctions = (product) => {
  handleImageChange(product.id);
  handleFav(product);
};

  useEffect(() => {
    axios
      .get("https://65582f239c0b643cb2d6e01b.mockapi.io/products")
      .then((res) => {
        setProductList(res.data);
      });
  }, []);
  return (
    <>
      {productList.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        productList.map((product) => {
          return (
            <>
              <div className="flex relative flex-col justify-beetwen p-4 h-64 border-[1px] border-[#E2E2E2] rounded-2xl hover:scale-105 hover:border-green-800">
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
                      ${product.price}
                    </span>
                    <BtnAddProduct className="absolute top-2 right-2 " onClick={() =>
                      handleBothFunctions(product)
                    } ><img className="w-[26px] h-[26px]" src={imageSrc} alt="" /></BtnAddProduct>
                    <div className="flex gap-2 items-end justify-center">
                      <BtnAddProduct onClick={() =>
                        handleAddToCarts(product)
                      } ><IconPlus/></BtnAddProduct>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default ProductCard;
