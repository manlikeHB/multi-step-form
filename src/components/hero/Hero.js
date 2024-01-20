import "./Hero.css";
import SectionNumber from "./SectionNumber";
import Line from "./Line";

const Hero = () => {
  return (
    <div className="hero">
      <div className="sub-hero">
        <SectionNumber num="1" />
        <Line />
        <SectionNumber num="2" />
        <Line />
        <SectionNumber num="3" />
      </div>
    </div>
  );
};

export default Hero;
