import Heading from "../atoms/Heading";

const DetailMyProduct = ({ open, onClose, selectedProduct }) => {
  if (!open || !selectedProduct) return null;
  return (
    <>
      <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="w-[50%] p-5 h-[75%] flex flex-col bg-[#fff] relative gap-5 overflow-y-auto rounded-lg">
          <span
            className="absolute top-3 right-3 cursor-pointer"
            onClick={onClose}
          >
            &times;
          </span>
          <Heading>Product Detail</Heading>
          <div className="flex-none w-[50%] h-[40%] border-2 rounded-lg mx-auto">
            <img
              className="max-h-full mx-auto"
              src={selectedProduct.image}
              alt=""
            />
          </div>
          <div className="flex mx-5 gap-2">
            <h1 className="text-3xl font-semibold">{selectedProduct.name}</h1>
            <h2 className="text-[#7C7C7C] text-sm pt-4">
              ${selectedProduct.price}/{selectedProduct.weight}Kg
            </h2>
          </div>
          <div>
            <h2 className="font-medium pb-1">Description</h2>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              harum nesciunt labore dolore dicta corporis iusto id sit incidunt,
              autem, magni fugiat maiores tenetur cumque alias dolorem ex
              distinctio odio nihil, esse dolorum tempora? Earum modi illo ex
              nisi doloribus.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMyProduct;
