"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Event schedule data
const dayData = {
  "DAY 1": [
    { "Event": "Arrival", "Timing": "8:00 AM", "Venue": "Auditorium" },
    { "Event": "Checkin", "Timing": "11:00-2:00 PM", "Venue": "Auditorium" },
    { "Event": "Opening Ceremony", "Timing": "2:00-4:00 PM", "Venue": "Auditorium" },
    { "Event": "Hacking Begins", "Timing": "4:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Snack Time", "Timing": "5:30-6:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Github Workshop", "Timing": "6:00-6:45 PM", "Venue": "New Lecture Hall" },
    { "Event": "Dinner", "Timing": "7:45 PM", "Venue": "Mess" }
  ],
  "DAY 2": [
    { "Event": "Breakfast", "Timing": "8:00 AM", "Venue": "Mess" },
    { "Event": "Hacking Phase I", "Timing": "9:00 AM", "Venue": "New Lecture Hall" },
    { "Event": "Mentor Shift Active", "Timing": "10:00 AM - 11:30 AM", "Venue": "New Lecture Hall" },
    { "Event": "DevRelSquad Workshop", "Timing": "11:30 AM - 12:15 AM", "Venue": "New Lecture Hall" },
    { "Event": "Lunch", "Timing": "12:20 PM - 2:00 PM", "Venue": "Mess" },
    { "Event": "Hacking Phase II", "Timing": "2:00 PM - 3:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Mentors Shift 2", "Timing": "2:30 PM", "Venue": "New Lecture Hall" },
    { "Event": "MLH Mini event/talk", "Timing": "3:00 PM - 4:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Evaluation Phase 1", "Timing": "4:30 PM", "Venue": "New Lecture Hall" },
    { "Event": "Snack Time", "Timing": "5:30 PM - 6:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Speaker's Talk", "Timing": "7:00 PM - 8:00 PM", "Venue": "New Lecture Hall" },
    { "Event": "Dinner", "Timing": "8:00 PM - 9:00 PM", "Venue": "Mess" },
    { "Event": "Online Mentor Shift", "Timing": "10:00 PM", "Venue": "Online" }
  ],
  "DAY 3": [
    { "Event": "Breakfast", "Timing": "7:45 AM", "Venue": "Mess" },
    { "Event": "Soft Submission Deadline", "Timing": "9:00 AM - 9:30 AM", "Venue": "New Lecture Hall" },
    { "Event": "Hard Submission", "Timing": "9:30 AM - 10:00 AM", "Venue": "New Lecture Hall" },
    { "Event": "Judging Slot", "Timing": "10:30 AM - 12:30 PM", "Venue": "New Lecture Hall" },
    { "Event": "Lunch", "Timing": "12:30 PM - 2:00 PM", "Venue": "Mess" },
    { "Event": "Closing and Result", "Timing": "3:00 PM - 5:00 PM", "Venue": "Auditorium" }
  ]
};

const ScrollingTextShow = () => {
  const scrollContainerRef = useRef(null);

  // Ensure scroll starts at the leftmost position on mount
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const createScrollingContainer = (events) => (
    <motion.ul 
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col space-y-3 w-[300px]"
    >
      {events.map((item, index) => (
        <motion.li
          key={index}
          className="w-full cursor-pointer p-3 text-center text-sm md:text-base font-semibold bg-gradient-to-b from-[rgba(0,0,57,0.7)] to-[rgba(2,29,59,0.7)] text-white rounded-lg shadow-xl border-b-2 border-[#D2A374] transition-all"
        >
          <div className="pb-3">{item.Event}</div>
          <p className="text-center font-normal">Time: {item.Timing}</p>
          <p className="text-center font-normal">Venue: {item.Venue}</p>
        </motion.li>
      ))}
    </motion.ul>
  );

  const SliderItem = ({ children, day }) => (
    <motion.div
      variants={slideIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-[300px] flex-shrink-0 flex flex-col items-center snap-start overflow-visible"
    >
      <h2 className="text-white text-lg md:text-[40px] font-bold mt-5 mb-5">{day}</h2>
      {children}
    </motion.div>
  );

  return (
    <div className="relative w-full max-w-full flex flex-col items-center justify-center">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)" }}
        className="w-full py-4 md:py-6 text-center text-xl md:text-6xl font-pirata text-white"
      >
        Run of Show
      </motion.h1>

      {/* Horizontal Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto flex items-start justify-start lg:justify-center scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ overflow: 'auto hidden' }}
      >
        <div className="flex space-x-10 px-5 max-w-max">
          {Object.keys(dayData).map((day) => (
            <div key={day} className="flex items-start justify-center">
              <SliderItem day={day}>{createScrollingContainer(dayData[day])}</SliderItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingTextShow;
