import React from "react";
import { useNavigate } from "react-router-dom";

const BtnBack = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="border rounded-md bg-red-500 px-5 py-1 text-white font-medium hover:bg-red-700"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default BtnBack;
