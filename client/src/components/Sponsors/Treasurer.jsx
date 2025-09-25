import { useState } from 'react';
import React from 'react';
import ReactPlayer from 'react-player';
import Image from "next/image";
import Comp3 from '../../assets/Sponsor/Comp3.mp4';
import Comp4 from '../../assets/Sponsor/Comp4v2(yellow).mp4';
import Comp5 from '../../assets/Sponsor/Comp5(white).mp4';
import Comp6 from '../../assets/Sponsor/Comp6(blue).mp4';
import Comp7 from '../../assets/Sponsor/Comp7(green).mp4';
import Comp8 from '../../assets/Sponsor/Comp8(purple).mp4';
import Comp9 from '../../assets/Sponsor/Comp9(orange).mp4';
import Comp10 from '../../assets/Sponsor/Comp10(aqua).mp4';

const Treasurer = ({ companyLogos, size }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-72 h-48 p-9 flex justify-center items-center overflow-hidden rounded-lg transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
      style={{
        outline: '4px solid rgba(128, 128, 128, 0.5)', // Grayish outline
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video always playing in the background */}
      <ReactPlayer 
        url={Comp10} 
        className="absolute inset-0" // Fill parent container
        playing={true} // Always play video
        loop={true} // Loop video for seamless playback
        muted={true} // Mute video
        width="100%" // Ensure it covers the container
        height="100%"
        style={{ objectFit: 'cover', pointerEvents: 'none' }} // Cover the area and prevent interaction
      />

      {/* Gradient overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-lg transition-opacity duration-300`}
        style={{ opacity: isHovered ? 0 : 1 }} // Change opacity on hover
      />

      {/* Company Logos */}
      {companyLogos.map((company, index) => (
        <div
          key={index}
          className="relative z-10 flex justify-center items-center rounded-2xl"
          style={{
            width: size.width,
            height: size.height,
          }}
        >
          <Image
            src={company.logo}
            alt={`${company.name} Logo`}
            width={size.width}
            height={size.height}
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Treasurer;
