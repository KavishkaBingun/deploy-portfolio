'use client'
import React from "react"
import { AiOutlineUpSquare } from "react-icons/ai"

const Footer = () => {
  const scrollToHome = () => {
    // Get the home section by its id (replace "home-section" with the actual id of the section)
    const homeSection = document.getElementById("home");

    // Scroll to the top of the home section with smooth behavior
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Kavishka Bingun<a href="/" className="hover:underline"></a>
        </div>

        <div>
          <AiOutlineUpSquare
            color="rgb(20 184 166)"
            size={30}
            onClick={scrollToHome} // Call the scrollToHome function on click
            style={{ cursor: "pointer" }} // Add a pointer cursor to indicate it's clickable
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
