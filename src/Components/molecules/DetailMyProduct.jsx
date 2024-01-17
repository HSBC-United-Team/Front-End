import Heading from "../atoms/Heading";

const DetailMyProduct = ({ open, onClose }) => {
  if (!open) return null;
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
              src="https://img.freepik.com/free-vector/realistic-fruits-composition-with-images-whole-sliced-apple-fruit-blank-background-vector-illustration_1284-66032.jpg?size=626&ext=jpg&ga=GA1.2.1586005244.1694536376&semt=sph"
              alt=""
            />
          </div>
          <div className="flex mx-5 gap-2">
            <h1 className="text-3xl font-semibold">Apple</h1>
            <h2 className="text-[#7C7C7C] text-sm pt-4">$1.00/1.0Kg</h2>
          </div>
          <div>
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              rem impedit asperiores repellendus ipsa, temporibus iste omnis
              consequuntur inventore vitae accusantium blanditiis dolorum,
              aliquid id nemo expedita, deleniti harum iusto incidunt. Quidem
              suscipit, maxime ex magnam quod, nobis natus nihil laborum eveniet
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailMyProduct;
