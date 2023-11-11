import products from "/public/data/productList";
import ProductCard from "../molecules/ProductCard";
import ExclusiveOffer from "../atoms/ExclusiveOffer";

function ProductList() {
    return (
        <div className="px-6 mb-32">
            <ExclusiveOffer />
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
