'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Data from "../../assets/testimonails_data/testimonies.js";
import Heading from "../Sponsors/Heading.jsx";
import Image from 'next/image.js';

const SliderT = () => {
  return (
    <div id='testimonials' className="container mx-auto bg-transparent text-white ">
      <Heading>Testimonials</Heading>
      <Swiper
        loop={true}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 1.3,
            spaceBetween: 5,

          },

        }}
        modules={[Navigation, Pagination, Autoplay]}

      >
        {Data.map((d, index) => (
          <SwiperSlide className='bg-transparent 2xl:w-[85%]' key={index}>
            <div
              className="flex flex-col items-center w-[95%] sm:w-[85%] md:w-[85%] lg:w-[96%] xl:w-[97%] 2xl:max-w-[85%] h-[69%] sm:h-[82%] md:h-[87%] bg-gradient-to-r from-[#272727] to-[#111111] lg:h-[78%] 2xl:h-[83%] mx-auto border border-[#909090] text-white rounded-xl xs:mt-16 sm:mt-8 md:mt-6 lg:mt-6 xl:mt-6 first-line:p-7"
              key={index}
            >
              {/* Profile Section */}
              <div className="flex flex-row items-center w-full xs:h-1/7 sm:h-1/6 md:h-1/6 lg:h-1/5 xl:h-1/5 2xl:h-1/5 xs:m-1 bg-transparent">
                <div className=" bg-transparent">
                  <Image
                    width={60}
                    height={60}
                    src={d.profilepic}
                    alt="Profile"
                    className="xs:h-16 sm:h-20 md:h-22 lg:h-[60px] xl:h-[60px] xs:w-16 sm:w-20 md:w-22 lg:w-[60px] xl:w-[60px] 2xl:m-2 xl:m-3 mx-5 mt-5 2xl:mb-0 xl:mb-0 rounded-full object-cover "
                  />
                </div>
                <div
                  className="flex flex-col justify-center bg-transparent text-white"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  <div className="font-semibold bg-transparent xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl">
                    {d.name}
                  </div>
                  <div className="xs:text:lg sm:text-lg md:text-lg lg:text-xl bg-transparent ">{d.date}</div>
                </div>
              </div>

              {/* Post Section */}
              <div
                className="flex xs:items-start flex-col lg:flex-row xl:flex-row w-full h-3/4 bg-transparent"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                <Image
                  src={d.postpic}
                  width={300}
                  height={300}
                  alt="Post"
                  className=" w-[88%] mx-5 mt-2 mb-5 sm:w-[87%] md:w-[86%] lg:w-[55%] h-auto bg-center rounded-lg object-cover"
                />
                <div className="xs:text-sm sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl text-left bg-transparent font-semibold lg:pt-1 xs:p-4 mx-5 mb-5 sm:p-2 md:p-2 lg:pl-6 pr-4 xl:pl-1 sm:w-[full] md:w-[full] lg:w-[34%]">
                  {d.content}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default SliderT;
