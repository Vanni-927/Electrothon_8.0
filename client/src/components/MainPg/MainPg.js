"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Navbar from "@/components/MainPg/Navbar";
import Devfolio_Button from "./devfolio_button";
import "@/app/globals.css";
import PixelCard from "./pixelCard.js";

const MainPg = () => {
  const title = "ELECTROTHON 8.0";
  const titleRef = useRef(null);
  const subtitleRef = useRef(null); // Ref for "Colosseum of Code"

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate "ELECTROTHON 7.0" first
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
        }
      );
    }

    // Animate "Colosseum of Code" after "ELECTROTHON 7.0" completes
    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
        },
        "-=0.5" // Starts slightly before the previous animation ends
      );
    }

    // Countdown Timer
    const targetDate = new Date("2025-03-06T23:59:59").getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timerInterval);
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div id="home" className="w-full lg:h-[90vh]">
      <Navbar />
      <div className="flex items-center justify-center sm:space-y-16 space-y-12 h-full flex-col">
        <div className="flex w-full flex-col items-center sm:space-y-10 justify-center">
          {/* Title Animation */}
          <span
            ref={titleRef}
            style={{ textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)" }}
            className="text-[40px] sm:text-[70px] md:text-[100px] lg:text-[110px] px-3 pirata-one-regular lg:leading-none text-center tracking-widest flex"
          >
            {title.split("").map((char, index) => (
              <span key={index} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>

          {/* Subtitle Animation */}
          <span
            ref={subtitleRef}
            className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[60px] inkwell lg:leading-none text-center text-white opacity-0"
            style={{
              textShadow: "0 0 10px #ffffff, 0 0 10px #ffffff, 0 0 0px #ffffff",
              padding: "0 20px",
            }}
          >
            Labyrinth of Eternum
          </span>
        </div>

        <Devfolio_Button />

        {/* Countdown Timer */}
        <div className="flex justify-center items-center w-full">
          <div className="flex items-center rounded-lg justify-center">
            <div className="relative w-[330px] h-[130px] sm:w-[400px] sm:h-[170px] md:w-[500px] md:h-[200px]">
              {/* <PixelCard
                className="absolute inset-0 w-full h-full z-10 rounded-lg opacity-50"
                variant="default"
              /> */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent border-[#7777771c] z-0">
                <div className="md:text-[53px] sm:text-[40px] text-[30px] strandall sm:tracking-widest tracking-wider text-white leading-none sm:leading-[35px] text-center">
                  Coming Soon!!
                </div>
                {/* <div className="abhaya-libre-regular sm:leading-[55px] leading-[40px] md:scale-100 sm:scale-90 scale-75 lg:leading-[75px] flex w-full justify-center items-center">
                  <div className="flex items-center justify-center text-[50px] text-[#c7aa73] font-light space-x-1">
                    <span className="flex w-[90px] flex-col items-center justify-center">
                      <span className="md:text-6xl sm:text-5xl text-4xl">{timeLeft.days}</span>
                      <span className="border-[1px] border-[#c7aa73] w-[90%]"></span>
                      <span className="text-lg">Days</span>
                    </span>
                    <span>:</span>
                    <span className="flex flex-col items-center w-[90px] justify-center">
                      <span className="md:text-6xl sm:text-5xl text-4xl">{timeLeft.hours}</span>
                      <span className="border-[1px] border-[#c7aa73] w-[90%]"></span>
                      <span className="text-lg">Hours</span>
                    </span>
                    <span>:</span>
                    <span className="flex flex-col w-[90px] items-center justify-center">
                      <span className="md:text-6xl sm:text-5xl text-4xl">{timeLeft.minutes}</span>
                      <span className="border-[1px] border-[#c7aa73] w-[90%]"></span>
                      <span className="text-lg">Minutes</span>
                    </span>
                    <span>:</span>
                    <span className="flex w-[90px] flex-col items-center justify-center">
                      <span className="md:text-6xl sm:text-5xl text-4xl">{timeLeft.seconds}</span>
                      <span className="border-[1px] border-[#c7aa73] w-[90%]"></span>
                      <span className="text-lg">Seconds</span>
                    </span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default MainPg;
