import products from "/public/data/productList";
import ProductCard from "./ProductCard";

function ProductList() {
    return (
        <div className="px-6 mb-32">
            <div className="flex">
                <h1 className="font-semibold text-[24px]">Exclusive Offer</h1>
            </div>
            <div
                className="card grid grid-cols-2 gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4"
                id="cards"
            >
                {products.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
