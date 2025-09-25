"use client";

import { useState } from "react";
import { exploreWorlds, tabData } from "./data";
import { TitleText } from "./CustomTexts";
import ExploreCard from "./ExploreCard.jsx";
import styles from "./style";

const Explore = () => {
  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <section className={`${styles.paddings}`} id="themes">
      <div className="text-[50px] text-center sm:text-[70px] md:text-[4.5rem] font-bold pirata-one-regular"
        style={{
          color: "#FFFFFF", // White color for the heading text
          textTransform: "uppercase",
          letterSpacing: "2px",
          textShadow: "-5px 8px 4px rgb(0, 0, 0)",
        }}>
        Themes
      </div>
      <div className="mt-12 mb-20 sm:mb-8 md:px-24 xl:px-2 xl:mx-24 2xl:mx-28 flex lg:flex-row flex-col min-h-[85vh] md:min-h-[50vh] gap-10 md:gap-8">
          {tabData.map((world, index) => (
            <ExploreCard
              key={index} // Use index as a fallback
              {...world}
              index={index}
              active={active}
              handleClick={handleActive}
            />
          ))}
        </div>
      {/* <div className="flex justify-center items-center w-full mt-8">
        <div className="flex items-center justify-center h-[40vh] w-[90%] max-w-5xl sm:h-[50vh] lg:h-[60vh] bg-cover bg-center relative text-white border rounded-lg mx-auto">
          <div className="absolute inset-0 bg-transparent backdrop-blur-md rounded-lg"></div>
          <div className="relative z-10 text-center p-6">
            <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl pirata-one-regular" style={{ textShadow: "-3px 4px 2px rgb(0, 0, 0)" }}>
              Coming Soon
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg">
              We are working on this. Stay tuned!
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Explore;
