import React from "react";
import { tabData } from "./Tabs_Data";
import Design_copmponent from "./opacity";
import Image from "next/image";
import "./style.css"; // Ensure this import is present

const Gallery = ({ activeTab }) => {
  const filteredData = tabData[activeTab] || [];

  return (
    <div
      className="container w-full h-full sm:mx-2 md:mx-6 lg:mx-12 mt-12 mb-12"
      id="themes"
    >
      {filteredData.map((data, index) => (
        <div
          key={index}
          className="mb-4 sm:mb-0 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* 1st div - Content */}
          <div className="flex flex-rows p-4">
            <div className="flex flex-col gap-8 text-white ">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold drop-shadow-xl">
              {data.heading}
            </h1>
              <p className="text-white">{data.content}</p>
            </div>
          </div>
          {/* 2nd div - Image */}
          <div className="flex justify-center items-center">
            <Image
              src={data.img1}
              alt={`Image 1`}
              className="imgboc object-contain"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
