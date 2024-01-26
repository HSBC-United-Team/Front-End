import React from "react";
import { useNavigate } from "react-router-dom";

const BtnBack = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/glyphpack/26/nav-arrow-left-512.png"
          alt=""
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default BtnBack;
