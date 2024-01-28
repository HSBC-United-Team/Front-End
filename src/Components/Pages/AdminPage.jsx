import MySales from "../molecules/AdmMySales";
import Logo from "../molecules/Logo";
import AdmMyProduct from "../organisms/AdmMyProduct";
import Header from "../organisms/Header";
import Heading from "../atoms/Heading";
import LogoutButton from "../atoms/LogOutButton";
import { Navigate ,useNavigate} from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("use-cart-data");
    localStorage.removeItem("user-info");
    navigate("/");
  }
  return (
    <>
      {/* <Header /> */}
      <div className="grid grid-cols-3  mt-12 px-14">
        <Logo/>
      <p className={"w-[80%] text-center text-4xl font-bold"}>Admin Page</p>
      <LogoutButton onClick={handleLogOut}/>
      </div>
      <MySales />
      <AdmMyProduct />
    </>
  );
};
export default Admin;
