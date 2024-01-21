import PersonalInfoCard from "../cards/PersonalInfoCard";
import "./Container.css";
import Hero from "../hero/Hero";
import NextSection from "../next/NextSection";
import { useState } from "react";
import AddressInfoCard from "../cards/AddressInfoCard";
import AccountInfoCard from "../cards/AccountInfoCard";

const Container = () => {
  const pages = [
    <PersonalInfoCard />,
    <AddressInfoCard />,
    <AccountInfoCard />,
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (event) => {
    const className = event.target.className;

    if (className === "next-button") {
      const nextPage = currentPage + 1;

      nextPage < pages.length && setCurrentPage(nextPage);
    }

    if (className === "prev-button") {
      const prevPage = currentPage - 1;

      prevPage >= 0 && setCurrentPage(prevPage);
    }
  };

  return (
    <div className="container">
      <Hero currentPage={currentPage + 1} />
      {pages[currentPage]}
      <NextSection handleClick={handleClick} currentPage={currentPage + 1} />
    </div>
  );
};

export default Container;
