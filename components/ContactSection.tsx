'use client'

import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const ContactSection = () => {
  const receiverEmail = "kavishkabingun99@gmail.com";
  const phoneNumber = "+94704584332";

  const handleEmailClick = () => {
    window.location.href = `mailto:${receiverEmail}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <section id="contact">
      {/* ... other code ... */}
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Contact
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col items-center justify-center animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 my-8">
          {/* Add "my-8" for vertical margin */}
          <div
            className="circle-outline , hover:bg-teal-700 "
            onClick={handleEmailClick}
          >
            <AiOutlineMail size={100} color="rgb(20 184 166)" />
          </div>
          <div
            className="circle-outline , hover:bg-teal-700 "
            onClick={handleWhatsAppClick}
          >
            <AiOutlineWhatsApp size={100} color="rgb(20 184 166)" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .circle-outline {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid #f0f0f0;
          border-radius: 50%;
          margin-top: 50px;
          margin-right: 50px;
         
          padding: 20px;
          border-color: rgb(20 184 166);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
