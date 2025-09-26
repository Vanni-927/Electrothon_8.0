'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Data from "../../assets/testimonails_data/testimonies.js";
import Heading from "../Sponsors/Heading.jsx";
import Image from 'next/image.js';

const SliderT = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && swiperInstance) {
      const timer = setTimeout(() => {
        swiperInstance.update();
        swiperInstance.emit('resize');
      }, 300); // A slightly longer delay to ensure all assets are loaded

      return () => clearTimeout(timer);
    }
  }, [isMounted, swiperInstance]);

  return (
    <div id='testimonials' className="container mx-auto bg-transparent text-white ">
      <Heading>Testimonials</Heading>
      {isMounted && (
      <Swiper
        onSwiper={setSwiperInstance}
        observer={true}
        observeParents={true}
        rewind={true}
        loop={true}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 1.2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 1.3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        a11y={{
          prevSlideMessage: 'Previous testimonial',
          nextSlideMessage: 'Next testimonial',
        }}
      >
        {Data.map((d) => (
          <SwiperSlide className='bg-transparent' key={d.id}>
            <div
              className="flex flex-col items-center w-[95%] sm:w-[90%] md:w-[90%] lg:w-[96%] xl:w-[97%] 2xl:max-w-[90%] h-auto min-h-[500px] bg-gradient-to-r from-[#272727] to-[#111111] mx-auto border border-[#909090] text-white rounded-xl p-6 my-12"
            >
              {/* Profile Section */}
              <div className="flex flex-row items-center w-full mb-4 bg-transparent">
                <div className="bg-transparent">
                  <Image
                    width={64}
                    height={64}
                    src={d.profilepic}
                    alt={`${d.name}'s profile picture`}
                    className="w-16 h-16 rounded-full object-cover mx-4 border-2 border-gray-500"
                  />
                </div>
                <div
                  className="flex flex-col justify-center bg-transparent text-white"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  <div className="font-semibold bg-transparent text-xl md:text-2xl">
                    {d.name}
                  </div>
                  <div className="text-lg text-gray-400 bg-transparent">{d.date}</div>
                </div>
              </div>

              {/* Post Section */}
              <div
                className="flex flex-col lg:flex-row w-full gap-6 bg-transparent"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                <Image
                  src={d.postpic}
                  width={500}
                  height={300}
                  alt={`Post image for ${d.name}'s testimonial`}
                  className="w-full lg:w-[55%] h-auto rounded-lg object-cover"
                />
                <div className="flex-1 text-lg md:text-xl text-left bg-transparent font-medium leading-relaxed">
                  {d.content}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      )}
    </div>
  );
};

export default SliderT;
