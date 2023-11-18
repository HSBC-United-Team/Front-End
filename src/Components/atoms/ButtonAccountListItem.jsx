function ButtonAccountListItem({ button, handleClick }) {
    return (
       <button onClick={() => handleClick(button)}>
         <img src={button.iconSrc} alt="" />
       </button>
    );
   }
   
   export default ButtonAccountListItem;