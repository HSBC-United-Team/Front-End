// ButtonAccount.js
import React from "react";
import ButtonAccountListItem from "../atoms/ButtonAccountListItem";

function ButtonAccount({ buttons, handleClick }) {
  return (
    <section>
      {buttons.map((button, index) => (
        <ButtonAccountListItem
          key={index}
          button={button}
          handleClick={handleClick}
        />
      ))}
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
        }

        /* Style for the button */
        button {
          background-color: #F2F3F2;
          width: 100%;
          height: 50px;
          border: none;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Hover effect */
        button:hover {
          background-color: #53B175;
          color: #ffffff; /* White text color */
        }
      `}</style>
    </section>
  );
}

export default ButtonAccount;
