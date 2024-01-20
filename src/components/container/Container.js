import PersonalInfoCard from "../cards/PersonalInfoCard";
import "./Container.css";
import Hero from "../hero/Hero";
import NextSection from "../next/NextSection";

function Container() {
  return (
    <div className="container">
      <Hero />
      <PersonalInfoCard />
      <NextSection />
    </div>
  );
}

export default Container;
