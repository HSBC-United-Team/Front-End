import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Admin from "./Components/Pages/AdminPage.jsx";
import DetailMyProduct from "./Components/molecules/detailMyProduct.jsx";
import BtnAddProduct from "./Components/atoms/BtnAddProdcut.jsx";
import AddProductModal from "./Components/organisms/addProductModal.jsx";
import FrontPage from "./Components/Pages/frontpage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // <FrontPage />
  // <Admin />
  // </React.StrictMode>
);
