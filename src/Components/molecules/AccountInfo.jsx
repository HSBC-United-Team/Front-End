
import React from 'react';

function AccountInfo({ name, email }) {
  return (
    <div>
      <h1 className="text-[32px] font-bold">{name}</h1>
      <p className="text-gray-500">{email}</p>
    </div>
  );
}

export default AccountInfo;
