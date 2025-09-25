"use client";

import { motion } from "framer-motion";
import Heading from "./Heading";
import Box from "./logoboard";
import PartnerBox from "./PartnerBoard";
import SubHeading from "./SubHeading";
import Eventpart from "./Eventpart";
import logo from "../../assets/logos/th.jpg";
import ComingSoon from "../ComingSoon/ComingSoon";
import chancellorWhite from "../../assets/chancellorwhite.png";
import devfolioWhite2x from "../../assets/devfolioWhite2x.png";
import mlhw from "../../assets/mlh_white.png";
import GitHub from "../../assets/GitHub_Logo_White.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const Sponsors1 = () => {
  return (
    <motion.div
      id="sponsors"
      className="w-full container flex flex-col items-center mx-auto bg-transparent text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Main Heading */}
      <motion.div variants={fadeInUp}>
        <Heading>Our Sponsors</Heading>
      </motion.div>

      {/* Event Partner Section */}
      <motion.div variants={fadeInUp} className="container flex flex-col items-center mb-9 bg-transparent">
        <SubHeading>Event Partner</SubHeading>
        <Eventpart companyLogos={[{ logo: mlhw }]} size={{ width: "45vw", height: "30vh" }} />
      </motion.div>

      {/* Chancellor Sponsors Section */}
      <motion.div className="container flex flex-col items-center bg-transparent" variants={fadeInUp}>
        <SubHeading>Chancellor Sponsors</SubHeading>

        {/* Sponsor Logos with Staggered Animation */}
        <motion.div className="flex flex-wrap justify-center flex-row gap-14" variants={staggerContainer}>
          <motion.div variants={fadeInUp}>
            <Box companyLogos={[{ logo: chancellorWhite }]} size={{ width: "45vw", height: "30vh" }} />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Box companyLogos={[{ logo: devfolioWhite2x }]} size={{ width: "45vw", height: "30vh" }} />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Box companyLogos={[{ logo: GitHub }]} size={{ width: "45vw", height: "30vh" }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sponsors1;
