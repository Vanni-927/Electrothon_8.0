import { motion } from "framer-motion";
import Heading from "./Heading";
import Box from "./logoboard";
import PartnerBox from "./PartnerBoard";
import SubHeading from "./SubHeading";
import logo from "../../assets/logos/th.jpg";
import ComingSoon from "../ComingSoon/ComingSoon";
import SJVNLogo from "../../assets/SJVNLogo.jpg";
import xyzwhite from "../../assets/xyz-logo-white.png";
import slidologo from "../../assets/slido_logo_white.png";
import EMTlogo from "../../assets/EMT.png";
import EMTwhite from "../../assets/EMT_White.png";
import DevdockLogo from "../../assets/Devdock.png";
import ethindia from "../../assets/ethindia.png";
import polygon from "../../assets/polygon.png";
import Chamberlainv from "./Chamberlianv";
import Chamberlainh from "./Chamberlianh";
import TrackSpon from "./Trackspon";
import TravelPart from "./TravelPart";
import MediaPart from "./MediaPart";
import Treasurer from "./Treasurer";
import quillAi from "../../assets/quill_resized.webp";
import appwrite from "../../assets/Sponsor/appwrite.png";
import InkindSpon from "./InkindSpon.jsx";
import Protoio from "../../assets/Sponsor/Protoio.png";
import theDevArmy from "../../assets/Sponsor/theDevArmy.png";
import SolidityScan from "../../assets/Sponsor/SolidityScan.png";
import CredShields from "../../assets/Sponsor/CredShields.png";
import Aptos from "../../assets/Sponsor/Aptos.png";
import langdb from "@/assets/Sponsor/langdb.svg";
import dominos from "@/assets/dominos3.png";
import loftWhite from "../../assets/Loft_White.png";
import mongo from "../../assets/images/MongoDB_White.png";
import midnight from "../../assets/images/midnight.png";
import streamlit from "../../assets/images/streamlit-logo-primary.png";
import gemini from "../../assets/gemini.webp"; 
import cf from "../../assets/images/CF_logo_horizontal_whitetype.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const Sponsors2 = () => {
  return (
    <motion.div
  className="container w-full items-center mx-auto mt-0 bg-transparent text-white px-4"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>

      {/* Treasurer Sponsors Section */}
      <div className="w-full flex flex-col items-center bg-transparent">
        <SubHeading>Treasurer Sponsors</SubHeading>
        <div className="mt-9">
          <div className="flex flex-wrap justify-center flex-row gap-14">
            {[polygon, ethindia, Aptos, mongo, midnight, streamlit, cf , gemini].map((logo, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Treasurer companyLogos={[{ logo }]} size={{ width: "60vw", height: "10vh" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Chamberlain Sponsors Section */}
      <div className="w-full items-center mt-24 bg-transparent">
        <SubHeading>Chamberlain Sponsors</SubHeading>
        <div className="mt-9">
          <div className="flex flex-wrap justify-center flex-row gap-14">
            <motion.div variants={fadeIn}>
              <Chamberlainv companyLogos={[{ logo: SJVNLogo }]} size={{ width: "20vw", height: "20vh" }} />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Chamberlainh companyLogos={[{ logo: quillAi }]} size={{ width: "50vw", height: "20vh" }} />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Chamberlainh companyLogos={[{ logo: DevdockLogo }]} size={{ width: "50vw", height: "20vh" }} />
            </motion.div>
            <motion.div variants={fadeIn}>
              <Chamberlainv companyLogos={[{ logo: loftWhite }]} size={{ width: "20vw", height: "20vh" }} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* In-Kind Sponsors Section */}
      <div className="w-full items-center mt-10 bg-transparent">
        <SubHeading>In-kind Sponsors</SubHeading>
        <div className="mt-0">
          <div className="flex flex-wrap justify-center flex-row gap-5">
            {[appwrite, Protoio, theDevArmy, SolidityScan, xyzwhite, CredShields, EMTwhite, slidologo, langdb, dominos].map((logo, index) => (
              <motion.div key={index} variants={fadeIn}>
                <InkindSpon companyLogos={[{ logo }]} size={{ width: "60vw", height: "18vh" }} className="p-5" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sponsors2;
