import "./Next.css";
import NextButton from "./NextButton";

const NextSection = (props) => {
  return (
    <div className="next-section">
      <NextButton
        handleClick={props.handleClick}
        class="prev-button"
        dir="Prev"
      />
      <NextButton
        handleClick={props.handleClick}
        class="next-button"
        dir="Next"
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default NextSection;
