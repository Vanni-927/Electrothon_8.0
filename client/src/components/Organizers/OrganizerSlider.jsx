"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function OrganizerSlider({ organizers, direction = "rtl" }) {
  const renderOrganizerItem = (organizer, index) => (
    <SwiperSlide key={index} className="w-[calc(14.28%-0.5rem)] mx-1">
      <div className="bg-white p-3 rounded-sm shadow-lg">
        <div className="relative bg-[#473d8d] aspect-square rounded-sm">
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/50 transform -rotate-6 z-20"
            style={{
              opacity: 0.9,
            }}
          />
          <Image
            src={organizer.image}
            alt={organizer.name}
            width={280}
            height={280}
            className="object-cover w-full h-full rounded-sm"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-2 text-center">
        <p className="text-white text-xs truncate">{organizer.name}</p>
      </div>
    </SwiperSlide>
  );

  return (
    <div className="overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={28}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: direction === "rtl",
        }}
        speed={4000}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        {organizers.map((organizer, index) =>
          renderOrganizerItem(organizer, index)
        )}
      </Swiper>
    </div>
  );
}
