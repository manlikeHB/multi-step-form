import { useState } from "react";

const NextButton = (props) => {
  const [isMovedOver, setMovedOver] = useState(false);

  const handleMouseOver = () => {
    setMovedOver(true);
  };

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
      {props.currentPage === 3 ? "Submit" : props.dir}
    </button>
  );
};

export default NextButton;
