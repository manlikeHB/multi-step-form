import { useState } from "react";

const NextButton = (props) => {
  // State management on mouse over
  const [isMovedOver, setMovedOver] = useState(false);

  // Handle mouse ouver event
  const handleMouseOver = () => {
    setMovedOver(true);
  };

  // Handle mouse out event
  const handleMouseOut = () => {
    setMovedOver(false);
  };

  return (
    <button
      style={{ backgroundColor: isMovedOver ? "black" : "white" }}
      onClick={props.handleClick}
      className={props.class}
      type="button"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {/* When it gets to last page,change next tosubmit */}
      {props.currentPage === 3 ? "Submit" : props.dir}
    </button>
  );
};

export default NextButton;
