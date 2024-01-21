
import React, { useState } from 'react';

function AccountSection({ title, iconSrc, onClick,isClicked }) {
  
  return (
      <div className={`flex md:px-16 px-7 md:py-5 py-7 justify-between ${isClicked?"":"border-b-2"}`}>
      <button className='flex justify-between w-full'onClick={onClick}>
        <div className="flex gap-4">
          <img className="w-7" src={iconSrc} alt="" />
          <p className="font-bold text-[18px]">{title}</p>
        </div>
          <img src="public\images\svg\backarrow.png" alt="" />
       
      </button>

    </div>
  );
}

export default AccountSection;
