import "./Next.css";
import NextButton from "./NextButton";

function NextSection() {
  return (
    <div className="next-section">
      <NextButton dir="Prev" />
      <NextButton dir="Next" />
    </div>
  );
}

export default NextSection;
