import React from "react";
import { challengesData } from "./challengesData";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import "./style.css";
import Image from "next/image";

// Updated animation for heading (bottom to top)
const fadeInFromBottom = {
  hidden: { opacity: 0, y: 50 }, // Changed from -50 to 50 (now animates upwards)
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Challenges = () => {
  return (
    <div>
      {/* Animated Heading */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col text-white`}
      >
        <TitleText
          title={
            <motion.div
              variants={fadeInFromBottom} // Changed animation direction
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              style={{ textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)" }}
              className="text-white text-[50px] md:text-[70px] lg:text-[4.5rem] pirata-one-regular mb-8"
            >
              Challenges
            </motion.div>
          }
          textStyles="text-center"
        />
      </motion.div>

      {/* Challenges Section */}
      <section
        id="challenges"
        className="relative p-4 md:p-10 mx-auto w-[95%] md:w-[80%] mt-2 overflow-hidden bg-[#221e1e]/60 backdrop-blur-md rounded-3xl"
      >
  <div className="flex flex-col gap-6">
          {challengesData && challengesData.length > 0 ? (
            challengesData.map((challenge, index) => (
              <motion.div
                key={index || challenge.key}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex md:flex-row flex-col justify-between items-center rounded-xl shadow-2xl p-4 text-white"
              >
                {/* Image Animation */}
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="float-left p-5 mr-auto h-[200px] flex justify-center w-full items-center"
                >
                  <picture>
                    <Image
                      src={challenge.img}
                      className={`object-cover ${
                        challenge.key === "Aptos" ? "w-[150px]" : "w-[300px]"
                      } ${
                        challenge.key === "polygon" ||
                        ["beginnersHack", "allGirls", "hardware","Devdock"].includes(
                          challenge.key
                        )
                          ? "invert-0"
                          : "invert"
                      }
                      ${
                        ["beginnersHack", "allGirls", "hardware"].includes(
                          challenge.key
                        )
                          ? "w-[150px] h-[150px]"
                          : ""
                      }`}
                      alt={challenge.key + "-challenge"}
                    />
                  </picture>
                </motion.div>

                {/* Challenge Details */}
                <div className="ml-auto w-full">
                  <div className="flex flex-col justify-between h-full space-y-4 max-sm:text-center">
                    <div className="px-3">
                      <ul className={challenge.list}>
                        {challenge.desc.map((element, descIndex) => (
                          <li
                            className="md:pt-1 md:tracking-tighter text-[20px]"
                            key={descIndex}
                          >
                            {element}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {!challenge.noButton && (
                      <a
                        href={challenge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="lg:w-1/2 text-center p-2 mx-auto lg:mx-6 text-base border-2 border-gray-200 rounded-md cursor-pointer hover:bg-gray-200 hover:border-gray-200 hover:text-black"
                        >
                          More Details
                        </motion.div>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400">
              No challenges available.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Challenges;
