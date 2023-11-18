
import React from 'react';

function AccountActions({ title, iconSrc, onClick }) {
  return (
    <div className="flex md:px-16 px-7 md:py-5 py-7 justify-between border-b-2">
      <div className="flex gap-4">
        <img className="w-7" src={iconSrc} alt="" />
        <p className="font-bold text-[18px]">{title}</p>
      </div>
      <button onClick={onClick}>
        <img src="public\images\svg\backarrow.png" alt="" />
      </button>
    </div>
  );
}

export default AccountActions;
