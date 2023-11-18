
import React from 'react';

function LogoutButton({ onClick }) {
  return (
    <button
      id="btnLogOut"
      className="bg-[#F2F3F2] w-full h-16 rounded-3xl flex items-center justify-center gap-4 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
      onClick={onClick}
    >
      <img src="../../src/img/svg/logout.png" alt="" />
      <h2 className="text-[18px] font-bold text-green-500">Log Out</h2>
    </button>
  );
}

export default LogoutButton;
