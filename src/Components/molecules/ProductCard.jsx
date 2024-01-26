import BtnAddProduct from "../atoms/BtnAddProdcut";
import axios from "axios";
import { useState, useEffect } from "react";
import { UseCartData } from "../../stores/useCartData";
import { useFavProducts } from "../../stores/useFavProducts";
import { IconPlus } from "../../../public/icons";
function ProductCard() {

  const { addProductToCart } = UseCartData((UseCart) => {
    return {
      addProductToCart: UseCart.addProductToCart,
    };
  });
  const handleAddToCarts = (product) => {
    addProductToCart(product);
  };
  // const { addFavProduct, favProducts } = useFavProducts((UseFav) => {
  //   return {
  //     addFavProduct: UseFav.addFavProduct,
  //     favProducts: UseFav.favProducts,
  //   };
  // });

  const dataFav = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/favorites/${userData.user_id}`,
        {
          credentials: 'include',
        }
      )
      const data = await response.json();
      const favoritesArray = data.favorites;
      console.log(favoritesArray)
      setFav(favoritesArray)
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  const addFav = async (product) => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "product_id": product
        }),
        credentials: "include"
      });
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  };
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/products")
      .then((res) => {
        console.log(res)
        const updatedProducts = res.data.products.map((product) => ({
          ...product,
          isFavorite: false,
        }));
        setProductList(updatedProducts);
      });
    console.log(productList)
    dataFav()
  }, []);
  return (
    <>
      {productList.length < 1 ? (
        <h1>Loading...</h1>
      ) : (
        productList.map((product) => {
          return (
            <div key={product.id}>
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
                  <p className="text-[#7C7C7C] text-[14px]">{product.weight}</p>
                  <div className="flex justify-between items-end">
                    <span className="harga font-semibold">
                      ${product.price}
                    </span>
                    <BtnAddProduct
                      className="absolute top-2 right-2 "
                      onClick={() => addFav(product.id)}
                    >
                      <img
                        className="w-[26px] h-[26px]"
                        // src={
                        //   fav.find(
                        //     (fav) => fav.id === product.id
                        //   )
                        //     ? "/images/svg/heart (2).png"
                        //     : "/images/svg/heart (1).png"
                        // }
                        alt=""
                      />
                    </BtnAddProduct>
                    <div className="flex gap-2 items-end justify-center">
                      <BtnAddProduct onClick={() => handleAddToCarts(product)}>
                        <IconPlus />
                      </BtnAddProduct>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default ProductCard;
