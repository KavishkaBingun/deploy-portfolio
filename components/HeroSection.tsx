"use client" // this is a client component
import React, { useState, useEffect } from 'react';
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai"



const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    handleResize(); // Set the initial value
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Kavishka!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            from Sri Lanka, driven by a passion to create magical software that brings ease and joy to people&#39;s lives.
          </p>
          <div className={`flex flex-row items-center ${isMobile ? 'justify-center' : 'justify-start'} space-x-2 mb-1`}>
      <a href="https://github.com/KavishkaBingun" rel="noreferrer" target="_blank">
        <AiOutlineGithub
          className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
          size={30}
        />
      </a>
      <a href="https://www.linkedin.com/in/kavishka-bingun-82a26520a/" rel="noreferrer" target="_blank">
        <AiOutlineLinkedin
          className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
          size={30}
        />
      </a>
      <a href="https://www.instagram.com/kavishkabingun/" rel="noreferrer" target="_blank">
        <AiOutlineInstagram
          className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
          size={30}
        />
      </a>
    </div>
        <br></br><br></br>
          <a
  href="https://drive.google.com/file/d/1OZ9tUhS35mcKBHpckge2_QFhodb-UK9C/view?usp=drive_link" // Replace this with the actual URL of your hosted CV file
  className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
  download="Kavishka Bingun CV.pdf" // Replace "Kavishka Bingun CV.pdf" with the desired name of the downloaded file
>
  Download CV
</a>

        </div >
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
