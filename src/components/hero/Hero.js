import "./Hero.css";
import SectionNumber from "./SectionNumber";
import Line from "./Line";

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="sub-hero">
        <SectionNumber num="1" currentPage={props.currentPage} />
        <Line />
        <SectionNumber num="2" currentPage={props.currentPage} />
        <Line />
        <SectionNumber num="3" currentPage={props.currentPage} />
      </div>
    </div>
  );
};

export default Hero;
