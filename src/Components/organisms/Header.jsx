import Logo from "../molecules/Logo";
import Navbar from "./Navbar";
import SearchBox from "../molecules/SearchBox";
import BtnAddProduct from "../atoms/BtnAddProdcut";
import LogoutButton from "../atoms/LogOutButton";
import Heading from "../atoms/Heading";

function Header() {
  return (
    <div
      className="md:flex md:mx-6 md:my-12 md:items-center"
      style={{
        boxShadow: "-12px 0px 37px 0px rgba(230, 235, 243, 0.5)",
      }}
    >
      <Logo />
      <SearchBox />
      <Navbar />
    </div>
  );
}

export default Header;
