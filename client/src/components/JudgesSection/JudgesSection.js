import Image from "next/image";
import { Pirata_One } from "next/font/google";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import judge1Image from "../../assets/judges/judge1.webp";
import judge2Image from "../../assets/judges/judge2.webp";
import judge3Image from "../../assets/judges/judge3.webp";
import judge4Image from "../../assets/judges/judge4.webp";
import judge5Image from "../../assets/judges/judge5.webp";
import judge6Image from "../../assets/judges/judge6.webp";
import judge7Image from "../../assets/judges/judge7.webp";
import judge8Image from "../../assets/judges/judge8.webp";
import judge9Image from "../../assets/judge9.png";

import mentor1Image from "../../assets/judges/abhishek.png";
import mentor2Image from "../../assets/judges/Gauri.png";
import mentor3Image from "../../assets/judges/Adhishraya.png";
import mentor4Image from "../../assets/judges/Gurkirat.png";
import mentor5Image from "../../assets/judges/Aryan.png";
import mentor6Image from "../../assets/judges/Avishrant.png";

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const LeftArrowIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8L8 12M8 12L12 16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const RightArrowIcon = () => (
  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16L16 12M16 12L12 8M16 12H8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const judges = [
  {
    id: 10,
    name: "Siddharth Shivkumar",
    image: judge9Image,
    linkedin: "https://www.linkedin.com/in/siddharth-shivkumar/",
  },
  {
    id: 9,
    name: "Avishrant Sharma",
    image: mentor6Image,
    linkedin: "https://www.linkedin.com/in/avishrantsh/",
  },
  {
    id: 1,
    name: "Megha Arora",
    image: judge1Image,
    linkedin: "https://www.linkedin.com/in/devrelmegha/",
  },
  {
    id: 2,
    name: "Sachin Jha",
    image: judge2Image,
    linkedin: "https://www.linkedin.com/in/sachin-jha-/",
  },
  {
    id: 3,
    name: "Shekhar Patel",
    image: judge3Image,
    linkedin: "https://www.linkedin.com/in/shekhar-patel-149bb0224",
  },
  {
    id: 4,
    name: "Himank Varshney",
    image: judge4Image,
    linkedin: "https://www.linkedin.com/in/varhimank/",
  },
  {
    id: 5,
    name: "Devansh Sood",
    image: judge5Image,
    linkedin: "https://www.linkedin.com/in/sood2105/",
  },
  {
    id: 6,
    name: "Dhiraj Kumar",
    image: judge6Image,
    linkedin: "https://www.linkedin.com/in/dhiraj-kumar-71620b45/",
  },
  {
    id: 7,
    name: "Vikrant Khedkar",
    image: judge7Image,
    linkedin: "https://www.linkedin.com/in/vikrant-khedkar/",
  },
  {
    id: 8,
    name: "Aman Kr. Poddar",
    image: judge8Image,
    linkedin: "https://www.linkedin.com/in/amanpoddar10/",
  },
];

const mentors = [
  { id: 1, name: "Abhishek Nautiyal", image: mentor1Image, linkedin: "https://www.linkedin.com/in/abhinauti/" },
  { id: 2, name: "Gauri Kaushal", image: mentor2Image, linkedin: "https://www.linkedin.com/in/gauri-kaushal-61b588229/" },
  { id: 3, name: "Adhishraya Sharma", image: mentor3Image, linkedin: "https://www.linkedin.com/in/adhishraya-sharma-55000b229/" },
  { id: 4, name: "Gurkirat Kaur Gill ", image: mentor4Image, linkedin: "https://www.linkedin.com/in/gurkirat-kaur-gill/" },
  { id: 5, name: "Aryan Prasher", image: mentor5Image, linkedin: "https://www.linkedin.com/in/aryan-prasher/" },
];

export default function JudgesSection() {
  const judgesScrollRef = useRef(null);
  const mentorsScrollRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(250); // Default

  useEffect(() => {
    if (judgesScrollRef.current) {
      const card = judgesScrollRef.current.querySelector(".judge-card");
      if (card) {
        setScrollAmount(card.offsetWidth + 16); // Ensure smooth scroll distance
      }
    }
  }, []);

  const scroll = (direction, type) => {
    const scrollRef = type === 'judges' ? judgesScrollRef : mentorsScrollRef;
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector(".judge-card"); // Get one card
  
      if (card) {
        const cardWidth = card.offsetWidth + 24; // Include spacing (adjust if needed)
        const maxScroll = container.scrollWidth - container.clientWidth; // Maximum scroll limit
        const newScrollPosition =
          direction === "left"
            ? Math.max(0, container.scrollLeft - cardWidth)
            : Math.min(maxScroll, container.scrollLeft + cardWidth);
  
        container.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });
      }
    }
  };
  

  return (
    <section id="judges" className="relative w-full overflow-hidden">
      <div className="relative w-full flex flex-col items-center justify-start">
        
        {/* Animated Title */}
        <motion.h2
          className={`${pirataOne.className} text-[40px] sm:text-[60px] md:text-[70px] lg:text-[4.5rem] text-center text-white mt-3 mb-6 sm:mb-8 md:mb-10`}
          style={{ textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Previous Judges & Speakers
        </motion.h2>

        <div className="relative w-full flex items-center justify-center">
          
          {/* Left Button */}
          <motion.button
            className="absolute left-2 sm:left-5 md:left-8 bg-transparent text-white z-10 opacity-50 hover:opacity-100"
            onClick={() => scroll("left", "judges")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LeftArrowIcon />
          </motion.button>

          {/* Judges Scrollable List */}
          <motion.div
            ref={judgesScrollRef}
            className="flex overflow-x-auto scrollbar-hide w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-6xl space-x-6 px-4 sm:px-6 md:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {judges.map((judge, index) => (
              <JudgeCard key={judge.id} judge={judge} index={index} />
            ))}
          </motion.div>


          {/* Right Button */}
          <motion.button
            className="absolute right-2 sm:right-5 md:right-8 bg-transparent text-white z-10 opacity-50 hover:opacity-100"
            onClick={() => scroll("right", "judges")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <RightArrowIcon />
          </motion.button>

        </div>
      </div>

      <div className="relative w-full flex flex-col items-center justify-start">
        
        {/* Animated Title */}
        <motion.h2
          className={`${pirataOne.className} text-[40px] sm:text-[60px] md:text-[4.5rem] text-center text-white mt-3 mb-6 sm:mb-8 md:mb-10`}
          style={{ textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Esteemed Mentors
        </motion.h2>

        <div className="relative w-full flex items-center justify-center">
          
          {/* Left Button */}
          <motion.button
            className="absolute left-2 sm:left-5 md:left-8 bg-transparent text-white z-10 opacity-50 hover:opacity-100"
            onClick={() => scroll("left", "mentors")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LeftArrowIcon />
          </motion.button>

          {/* Mentors Scrollable List */}
          <motion.div
            ref={mentorsScrollRef}
            className="flex overflow-x-auto scrollbar-hide w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-6xl space-x-6 px-4 sm:px-6 md:px-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {mentors.map((mentor, index) => (
              <JudgeCard key={mentor.id} judge={mentor} index={index} />
            ))}
          </motion.div>


          {/* Right Button */}
          <motion.button
            className="absolute right-2 sm:right-5 md:right-8 bg-transparent text-white z-10 opacity-50 hover:opacity-100"
            onClick={() => scroll("right", "mentors")}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <RightArrowIcon />
          </motion.button>

        </div>
      </div>
    </section>
 );
}

function JudgeCard({ judge, index }) {
  return (
    <motion.div
      className="judge-card flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <a href={judge.linkedin} target="_blank" rel="noopener noreferrer">
        <div className="relative w-40 min-h-40 sm:w-48 sm:min-h-48 md:w-56 md:min-h-56 lg:w-64 lg:min-h-64">
          {judge.image && (
            <Image src={judge.image} fill className="object-contain" alt={`Judge - ${judge.name || 'Judge profile'}`} />
          )}
        </div>
      </a>
    </motion.div>
  );
}
