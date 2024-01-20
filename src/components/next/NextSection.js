import "./Next.css";
import NextButton from "./NextButton";

const NextSection = () => {
  return (
    <div className="next-section">
      <NextButton dir="Prev" />
      <NextButton dir="Next" />
    </div>
  );
};

export default NextSection;
