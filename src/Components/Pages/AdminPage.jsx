import MySales from "../molecules/AdmMySales";
import AdmMyProduct from "../organisms/AdmMyProduct";
import Header from "../organisms/Header";

const Admin = () => {
  return (
    <>
      <Header />
      <MySales />
      <AdmMyProduct />
    </>
  );
};
export default Admin;
