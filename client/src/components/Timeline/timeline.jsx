"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import smallLogo from "../../assets/small_logo.png";
import ellipse2 from "../../assets/Ellipse2.png";

const Timeline = () => {
  const [logoPosition, setLogoPosition] = useState(0);
  const [smoothPosition, setSmoothPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const timelineRef = useRef(null);
  const headingRef = useRef(null);
  const animationFrameId = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const heading = headingRef.current;
    if (!timeline || !heading) return;

    const updateLogoPosition = () => {
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (timelineRect.top < windowHeight && timelineRect.bottom > 0) {
        const scrolledDistance = windowHeight - timelineRect.top;
        const progress = Math.min(100, Math.max(0, (scrolledDistance / windowHeight) * 100));
        setLogoPosition(progress);
      }
    };

    const handleScroll = () => {
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      setIsScrolling(true);
      updateLogoPosition();

      // Set a new timeout
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100); // Detect scroll stop after 100ms of no scrolling
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === heading) {
            if (!entry.isIntersecting) {
              updateLogoPosition();
            } else {
              setLogoPosition(0);
            }
          }
        });
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    observer.observe(timeline);
    observer.observe(heading);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []); // Remove dependencies to avoid re-creating this effect

  // Separate useEffect for smooth animation
  useEffect(() => {
    const animateLogo = () => {
      setSmoothPosition((prev) => {
        const diff = logoPosition - prev;
        // If we're very close to the target and not scrolling, stop at exact position
        if (Math.abs(diff) < 0.01 && !isScrolling) {
          return logoPosition;
        }
        // Much slower animation speed
        return prev + diff * 0.05; // Increase speed slightly for smoother animation
      });

      // Continue animation
      animationFrameId.current = requestAnimationFrame(animateLogo);
    };

    // Start animation
    animationFrameId.current = requestAnimationFrame(animateLogo);

    // Clean up
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [logoPosition, isScrolling]); // Only depend on logoPosition and isScrolling

  return (
    <div id="timeline" className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-start text-white px-4 sm:px-6 md:px-8">
      <div ref={headingRef} className="flex items-center mb-8 sm:mb-12">
        <h2
          style={{
            textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
          }}
          className="text-[40px] sm:text-[50px] md:text-[70px] lg:text-[4.5rem] font-pirata"
        >
          Timeline
        </h2>
      </div>

      <div ref={timelineRef} className="relative w-full max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-4  sm:left-0 top-0 w-[6vw] sm:w-7 h-full bg-[#374151] rounded-lg">
          {/* Blue overlay */}
          <div
            className="absolute left-0 top-0 w-full bg-[#03294F] rounded-lg transition-all duration-300 ease-out"
            style={{ height: `${smoothPosition}%` }}
          ></div>
        </div>

        {/* Logo */}
        <div
          className="absolute left-[0.25rem] sm:left-[1rem] w-10 sm:w-14 h-10 sm:h-14 flex justify-center items-center bg-transparent transition-all duration-300 ease-out"
          style={{
            top: `calc(${smoothPosition}% - 10px)`,
            transform: "translateX(-50%) translateY(-50%)",
            zIndex: 20,
          }}
        >
          <Image
            src={ellipse2}
            alt="Logo"
            fill
            style={{ objectFit: "contain", zIndex: 10 }}
          />
          <Image
            src={smallLogo}
            alt="Overlay Logo"
            width={40}
            height={40}
            className="absolute sm:hidden"
            style={{
              objectFit: "contain",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <Image
            src={smallLogo}
            alt="Overlay Logo"
            width={60}
            height={60}
            className="absolute hidden sm:block"
            style={{
              objectFit: "contain",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-20">
          <TimelineItem title="Registration Begins" date="1st December 2024" detail="Registrations for Electrothon 7.0 start" />
          <TimelineItem title="Participation Shortlist" date="Coming Soon" detail="Mails sent to accepted hackers" />
          <TimelineItem title="Electrothon Main Event" date="7-9 March, 2025" detail="The Hacking Period" />
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ title, date, detail }) => (
  <div className="relative flex items-center">
    <div className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-[15vw] h-2 bg-[#374151]"></div>
    <div className="ml-16 sm:ml-20 bg-[#03294F] p-4 sm:p-7 rounded-2xl shadow-lg w-[80%] sm:w-5/6 relative opacity-90 min-h-[120px] sm:min-h-[186px]">
      {/* Title */}
      <h3
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl relative pb-2 sm:pb-4 md:pb-6"
        style={{ fontFamily: "Jacques Francois" }}
      >
        {title}:{" "}
        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {date}
        </span>
        <span className="absolute bottom-[-8px] left-0 w-full h-0.5 bg-white rounded-full"></span>
      </h3>
      <br />
      {/* Details */}
      <span className="font-sans text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
        {detail}
      </span>
    </div>
  </div>
);

export default Timeline;
