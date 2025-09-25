'use client';

import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { initialQues, moreQues } from "./faq_master";

export default function Faqs() {
  const [open, setOpen] = useState(-1); // Initially no question is open
  const [loadMore, setLoadMore] = useState(false); // State to toggle load more questions

  const handleOpen = (value) => {
    setOpen(open === value ? -1 : value); // Toggle open state, close if already open
  };

  return (
    <div
      className="w-full px-4 sm:px-10 text-center text-white md:px-20 xl:px-32"
      id="faq"
      style={{
        backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", // Required for overlay
        textShadow: "-5px 8px 4px rgb(0, 0, 0)",
      }}
    >
      {/* FAQ Heading */}
      <div className="">
        <h1
          className="text-[50px] sm:text-[70px] md:text-[4.5rem] font-bold pirata-one-regular"
          style={{
            color: "#FFFFFF", // White color for the heading text
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          FAQs
        </h1>
      </div>

      {/* FAQ Section */}
      <div className="mt-10 md:mx-10 lg:grid grid-cols-1 gap-10">
        {/* Render initial questions */}
        <div className="w-full">
          {initialQues.map((faq, index) => (
            <Accordion key={faq.title + index} open={open === index} className="rounded-xl shadow-lg">
              <AccordionHeader
                style={{
                  background: "linear-gradient(to bottom, rgba(0, 0, 57, 0.7), rgba(2, 29, 59, 0.7))", // Blue gradient with 70% opacity
                  fontFamily: "Jacques Francois",
                  color: "#FFFFFF", // White text for the question
                  borderBottom: open === index ? "2px solid #D2A374" : "none", // Golden border when open
                  transition: "border-bottom 0.3s ease", // Smooth transition for the effect
                  boxShadow: "0px 6px 16px rgba(188, 135, 65, 0.35)"
                
                }}
                className="my-4 p-6 text-center rounded-xl text-base font-normal border-none"
                onClick={() => handleOpen(index)}
              >
                <h1 className="w-full text-center lg:text-left sm:text-base md:text-lg">
                  {faq.title}
                </h1>
              </AccordionHeader>

              <AccordionBody
                className={`text-lg md:text-xl h-auto text-justify lg:text-left text-white rounded-xl p-6 transition-all duration-500 ease-in-out ${open === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{
                  backgroundColor: "#1E3A5F",
                  fontFamily: "Jacques Francois",
                  color: "#E0D6D1",
                  margin: "auto",
                  width: "100%",
                  borderRadius: "1rem", // Rounded corners for a nicer shape
                  
                }}
              >
                {faq.content}
              </AccordionBody>
            </Accordion>
          ))}
        </div>

        {/* Render more questions if 'loadMore' is true */}
        {loadMore && (
          <div className="w-full">
            {moreQues.map((faq, index) => (
              <Accordion
                key={faq.title + (index + initialQues.length)}
                open={open === index + initialQues.length}
                className="rounded-xl shadow-lg"
              >
                <AccordionHeader
                  style={{
                    background: "linear-gradient(to bottom, rgba(0, 0, 57, 0.7), rgba(2, 29, 59, 0.7))", // Blue gradient with 70% opacity
                    fontFamily: "Jacques Francois",
                    color: "#FFFFFF", // White text for the question
                    borderBottom: open === index + initialQues.length ? "2px solid #D2A374" : "none", // Golden border when open
                    transition: "border-bottom 0.3s ease", // Smooth transition for the effect
                    boxShadow: "0px 6px 16px rgba(188, 135, 65, 0.35)"
                  

                  }}
                  className="my-4 p-6 text-center rounded-xl text-base font-normal border-none"
                  onClick={() => handleOpen(index + initialQues.length)}
                >
                  <h1 className="w-full text-center lg:text-left sm:text-base md:text-lg">
                    {faq.title}
                  </h1>
                </AccordionHeader>

                <AccordionBody
                  className={`text-lg md:text-xl h-auto text-justify lg:text-left text-white rounded-xl p-6 transition-all duration-500 ease-in-out ${open === index + initialQues.length ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{
                    backgroundColor: "#1E3A5F", 
                    fontFamily: "Jacques Francois",
                    color: "#E0D6D1",
                    margin: "auto",
                    width: "100%",
                    borderRadius: "1rem", // Rounded corners for a nicer shape
                    
                  }}
                >
                  {faq.content}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        )}

        {/* Button to load more questions */}
        <div className="flex items-center justify-center w-full">
          <button
            onClick={() => setLoadMore((prev) => !prev)} // Toggle the loadMore state
            className="p-3 mt-6 w-52 h-14 sm:w-56 sm:h-16 text-lg sm:text-xl md:text-2xl rounded-[46px] pirata-one-regular font-bold text-[#ffffff] bg-[#BC8741] border-2 border-[#7A5A35] hover:bg-[#D9B679] hover:text-[#3D3D3D] transition-all duration-300 ease-in-out"
          >
            {loadMore ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}
