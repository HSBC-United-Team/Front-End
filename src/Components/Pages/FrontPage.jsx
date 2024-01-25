import React from "react";
import Logo from "../molecules/Logo";
import SearchBox from "../molecules/SearchBox";
import Banner from "../molecules/Banner";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="md:flex md:mx-6 md:my-12 md:items-center flex-col md:flex-row"
        style={{
          boxShadow: "-12px 0px 37px 0px rgba(230, 235, 243, 0.5)",
        }}
      >
        <div className="md:w-[40%] flex justify-end md:order-last order-first mt-4 md:mt-0">
          <button
            className="me-5 border rounded-md px-7 py-2 bg-green-500 border-green-500 text-white font-semibold hover:bg-green-700"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            className="me-5 border rounded-md px-4 border-green-500 font-semibold hover:bg-green-600 hover:text-white"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
        <Logo className="order-last md:order-first" />
        <SearchBox />
      </div>
      <Banner />
    </>
  );
};

export default FrontPage;
