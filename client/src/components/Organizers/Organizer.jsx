"use client";
import React from "react";
import Image from "next/image";
import OrganizersLogoWall from "./Logowall";

// Importing images data
import { leadOrganizers } from "./organizerData";

export default function Organizers() {
  return (
    <div
      id="Organizers"
      className="bg-transparent relative w-full h-auto text-center items-center px-4 md:px-16 lg:px-32"
    >
      {/* Lead Organizers Section */}
      <h2
        className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-white text-center mb-6 md:mb-10"
        style={{
          fontFamily: "Pirata One, sans-serif",
          textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Lead Organizers
      </h2>

      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 sm:gap-4 md:gap-6 lg:gap-10 mx-auto">
        {leadOrganizers.map((leader, index) => (
          <Image
            key={index}
            src={leader.image}
            alt={leader.name}
            className="rounded-sm w-[80%] sm:w-[45%] md:w-[30%] lg:w-[32%] max-w-[320px] h-auto object-cover"
            loading="lazy"
          />
        ))}
      </div>

      {/* Organizers Section */}
      <h2
        className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] text-white text-center mb-6 md:mb-8 md:mt-14 custom:mt-12 xs:mt-10"
        style={{
          fontFamily: "Pirata One, sans-serif",
          textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Organizers
      </h2>

      <OrganizersLogoWall />
    </div>
  );
}
