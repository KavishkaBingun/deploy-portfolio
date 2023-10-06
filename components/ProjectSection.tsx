'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "components/SlideUp";
import { useState } from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Benthota Bake House",//my ITP project
    description:
      "(Restaurant Management System)",
      language:"MERN Stack",
    image: "/Benthota_bake_house.png",
    link: "https://github.com/KavishkaBingun/ITP_Project_Individual_Component",
    technology: " MongoDB , Express.js , React.js , Node.js , RESTful APIs" , 

  },
  {
    name: "Easy Works",//this is my MAD project
    description:
      "(Freelancing Mobile App)",
      language:"Kotlin - Android Studio",
    image: "/converted_image.jpg",
    link: "https://github.com/KavishkaBingun/MAD_Project",
    technology: " Android Studio , Kotlin , Firebase-Database " , 

  },

  {
    name: "To Do Application",
   
    description:"React",
    image: "/to_do_app.png",
    link: "https://github.com/KavishkaBingun/ToDo_Application",
    technology: " React , CSS-in-JS Libraries , Version Control , VS Code  " , 

  },
  {
    name: "THEWAYSHOP",
    description:"(E - Commerce System)",
    language:"Java - MVC Architecture",
    image: "/oop project.png",
    link: "https://github.com/KavishkaBingun/OOP-Project",
    technology: " Java , JDK , Eclipse , MySQL , JDBC , Apache Tomcat , Version Control  " , 

  },
  {
    name: "Pearl Boat Safari",
    description:"(Boat Safari Trip Management System)",
    language:"HTML , CSS , JS , PHP",
    image: "/IWT.png",
    link: "https://github.com/KavishkaBingun/OOP-Project",
    technology: " HTML , CSS , PHP , JS  " , 

  },
    {
    name: "My Blog",
    description:"(Web Application for Create blogs)",
    language:"MERN Stack",
    image: "/blog_app.png",
    link: "https://github.com/KavishkaBingun/My_Blog_Project",
    technology: " MongoDB , Express.js , React.js , Node.js , RESTful APIs " , 

  },
];


const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (idx: React.SetStateAction<number>) => {
    setHoveredIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <section id="projects">
      <div className="my-12 pb-12  md:pb-48">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div
                    className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12"
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="md:w-1/2 relative">
                      <div
                        className="relative rounded-xl shadow-xl hover:opacity-70"
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link href={project.link} target="_blank">
                          <Image
                            src={project.image}
                            alt=""
                            width={1000}
                            height={1000}
                            className="rounded-xl"
                          />
                        </Link>
                        {hoveredIndex === idx && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-teal-800 ">
                            <h1 className="text-white font-bold text-3xl text-center">
                              {project.name}
                            </h1>
                            <h2 className="text-white text-2xl text-center">
                              {project.description}
                            </h2>
                            <h4 className="text-white text-1xl text-center">
                              {project.language}
                            </h4>
                            <div className="mt-2">
                              <Link href={project.link} target="_blank">
                                <BsArrowUpRightSquare
                                  size={30}
                                  className="hover:-translate-y-1 transition-transform cursor-pointer bg-teal-500"
                                />
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-8 md:w-1/2 justify-center">
                      <h1 className="text-3xl mb-6 ">Tools and Technologies</h1>
                      <div className="flex flex-wrap md:justify-start">
                        <p
                          className="px-4 py-2 mr-2 text-teal-500 font-semibold text-2xl"
                        >
                          {project.technology}
                        </p>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            );
          })}
        </div>
        <style jsx>{`
          .mt-2 {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin-top: 50px;
            margin-right: 50px;
            padding: 20px;
            background-color: rgb(20, 184, 166);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProjectsSection;


