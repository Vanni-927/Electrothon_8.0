"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./slider.module.css";
import data from "@/assets/events_gallery_data/images";
import { Pirata_One } from "next/font/google";

const Slider = ({ images, reverse }) => {
  // Return early if images is not a valid array
  if (!images || !Array.isArray(images) || images.length === 0) {
    console.error("Invalid or empty images array:", images);
    return <div>No images available</div>;
  }

  return (
    <Swiper
      direction="horizontal"
      slidesPerView={3} // Show more images at once
      spaceBetween={15} // Small gap between images
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      speed={5000}
      loop={true}
      modules={[Autoplay]}
      className="w-full !px-0"
      breakpoints={{
        400: { slidesPerView: 3 }, // Mobile
        700: { slidesPerView: 5 }, // Tablet
        1024: { slidesPerView: 6 }, // Desktop
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={350} // Keep previous image size
            height={350}
            className="object-cover rounded-xl border border-white shadow-lg"
            loading={index < 4 ? "eager" : "lazy"}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const DualSlider = () => {
  // Add debugging for data
  
  
  // Check if data exists and is an object
  if (!data || typeof data !== 'object') {
    console.error("Invalid data import:", data);
    return <div className="text-white text-center p-8">Error loading images data</div>;
  }
  
  const imagePaths = Object.values(data).map((imagePath) => imagePath);
  
  const row1Images = imagePaths.slice(0, 9);
  const row2Images = imagePaths.slice(9, 18);

  return (
    <div className="w-full overflow-hidden">
      {/* Title Animation */}
      <motion.h1
        className={`${pirataOne.className} text-[50px] sm:text-[70px] md:text-[4.5rem] text-center text-white mb-4`}
        style={{ textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        
      >
        Events Gallery
      </motion.h1>

      {/* First Slider (Left Scroll) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Slider images={row1Images} reverse={false} />
      </motion.div>

      {/* Second Slider (Right Scroll) with added gap */}
      <motion.div
        className="mt-10" // Added margin-top to create gap
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Slider images={row2Images} reverse={true} />
      </motion.div>
    </div>
  );
};

export default DualSlider;