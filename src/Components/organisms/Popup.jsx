import React, { useState } from 'react';

const PopUp = ({ message, onYes, onNo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleYes = () => {
    setIsOpen(false);
    onYes(); // Panggil fungsi onYes saat pengguna memilih "Yes"
  };

  const handleNo = () => {
    setIsOpen(false);
    onNo(); // Panggil fungsi onNo saat pengguna memilih "No"
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Tampilkan Pop-up</button>
      {isOpen && (
        <div>
          <div>{message}</div>
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>
      )}
    </div>
  );
};

export default PopUp;
