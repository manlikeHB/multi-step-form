import PersonalInfoCard from "../cards/PersonalInfoCard";
import "./Container.css";
import Hero from "../hero/Hero";
import NextSection from "../next/NextSection";
import { useState } from "react";
import AddressInfoCard from "../cards/AddressInfoCard";
import AccountInfoCard from "../cards/AccountInfoCard";

const Container = () => {
  // Initialize the Various pages to be rendered into a pages array
  const pages = [
    <PersonalInfoCard />,
    <AddressInfoCard />,
    <AccountInfoCard />,
  ];

  // Use usestate to manage the state of when the next or prev buttons get clicked
  const [currentPage, setCurrentPage] = useState(0);

  // Handle the click event on next or prev button
  const handleClick = (event) => {
    // Get class name of the buttons
    const className = event.target.className;

    // Check if the curent button is the next button
    if (className === "next-button") {
      // Initialize a next page number and set the value to cuurrent page number + 1
      const nextPage = currentPage + 1;

      // Check if the next page number is less than the pages array length and setCurrentpage
      nextPage < pages.length && setCurrentPage(nextPage);
    }

    // Check if the curent button is the prev button
    if (className === "prev-button") {
      // Initialize prev page number and set value to current page -1
      const prevPage = currentPage - 1;

      //  Check if the prev page number is greter or equal to zero then setCurrentpage
      prevPage >= 0 && setCurrentPage(prevPage);
    }
  };

  return (
    <div className="container">
      {/*passing the current page value to enable track the current page  */}
      <Hero currentPage={currentPage + 1} />
      {/* Rendering pages based on the clicked button */}
      {pages[currentPage]}
      {/* Passing the handleClick function and current page value through props to the buttons */}
      <NextSection handleClick={handleClick} currentPage={currentPage + 1} />
    </div>
  );
};

export default Container;
