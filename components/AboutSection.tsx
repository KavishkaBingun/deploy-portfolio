import React from "react"
import Image from "next/image"

const skills = [
  { skill: "OOP" },
  { skill: "MERN Stack  " },
  { skill: "Next.js" },
  { skill: "React" },
  { skill: "SQL" },
  { skill: "Python" },
  { skill: "Version Control  " },
  { skill: "Kotlin" },
  { skill: "HTML" },
  { skill: "Tailwind CSS" },
  { skill: "JavaScript " },
  { skill: "GitHub" },
  { skill: "PHP" },
  { skill: "CSS" },
  
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Kavishka and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Sri Lanka.
            </p>
            <br />
            <p>
            I am all about pushing boundaries and creating awesome websites, 
            smooth MERN stack projects, Java solutions, and impactful mobile apps.
            </p>
            <br />
            <p>
            I offer a range of services, including 
            <span className="font-bold text-teal-500">
            {" "}Backend Development, 
            Frontend development, Full-Stack development, {" "}
            </span>
            and 
            <span className="font-bold text-teal-500">
            {" "}Mobile Application Development{" "}
            </span>
            </p>
            <br />
            <p>
            I am always learning, dreaming big, and committed to making a difference.
             Join me on this incredible journey as we leave a mark in the world of 
             software engineering and shape the future of technology together.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div><br></br>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold "
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
