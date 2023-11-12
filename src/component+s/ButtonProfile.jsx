function ButtonProfile() {
  const handleLogOut = () => {
    localStorage.removeItem("cartItems");
    window.location.href = "../../index.html";
  };

  return (
    <section className="px-6 mt-28">
      <button
        id="btnLogOut"
        className="bg-[#F2F3F2] w-full h-16 rounded-3xl flex items-center justify-center gap-4"
        onClick={handleLogOut}
      >
        <img src="../../src/img/svg/logout.png" alt="" />
        <h2 className="text-[18px] font-bold text-green-500">Log Out</h2>
      </button>
    </section>
  );
}

export default ButtonProfile;
