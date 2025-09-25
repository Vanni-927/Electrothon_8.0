"use client";

import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import "./footer.css";
import speclogo from "@/assets/speclogo.png";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (!email) {
      setError("Email cannot be empty");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!message) {
      setError("Please enter your message");
      return;
    }

    const templateParams = {
      from_name: name,
      to_name: "Electrothon_7.0",
      message,
    };

    setIsLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
        }
      )
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setIsLoading(false);
          setSuccess("Your message has been sent successfully!");
        }
      )
      .catch((error) => {
        setError("Something went wrong, please try again later");
        console.error(error);
        setIsLoading(false);
      });
  };
  function BottomFooter() {
    return (
      <React.Fragment>
        <div className="md:flex justify-center gap-5 lg:gap-40 mt-5 font-['Gugi']">
          <div className="flex justify-center mb-2 md:visible">
            <a
              href="https://spec.nith.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white md:text-lg md:font-bold hover:text-gray-300"
            >
              <picture>
                <img
                  className="w-16 md:w-32"
                  src="/asset/speclogo.png" // Public path reference
                  alt="spec_logo"
                />
              </picture>
            </a>
          </div>
          <div className="flex justify-center mb-4">
            <ul>
              <li className="flex justify-center pb-2 text-sm font-medium text-white md:text-lg md:justify-start">
                RESOURCES
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1tAc_veN54saZxE4tJwyQ8KulqCqn9D_b/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start hover:text-gray-300"
                >
                  Sponsorship Brochure
                </a>
              </li>
              <li>
                <a
                  href="https://same-uranium-0e7.notion.site/Code-of-Conduct-13893473857580beb4a1e626f669ace6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start hover:text-gray-300"
                >
                  Code of Conduct
                </a>
                <a
                  href="http://hackp.ac/coc?utm_campaign=Member+Event+-+Onboarding+Reminder&utm_content=Onboarding+Needed&utm_medium=Email&utm_source=Customer.io "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start hover:text-gray-300"
                >
                MLH Code of Conduct
                </a>
                <a
                  href="https://same-uranium-0e7.notion.site/Hacker-s-Guide-to-ELECTROTHON-7-0-16893473857580e6bf18e445e04afd61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center pb-2 font-sans text-sm text-gray-400 md:justify-start hover:text-gray-300"
                >
                  Hacker Guide
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center mb-4 text-sm text-white md:text-lg">
            <ul>
              <li className="flex justify-center pb-2 font-medium text-white md:justify-start">
                ADDRESS
              </li>
              <li className="flex justify-center pb-2 font-sans text-gray-400 md:text-sm md:justify-start hover:text-gray-300">
                <a
                  href="https://www.google.com/maps/place/NIT+Hamirpur/@31.6750134,76.5271587,13z/data=!4m8!1m2!2m1!1sNIT+Hamirpur,+Himachal+Pradesh,+India!3m4!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.708371!4d76.527356"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NIT Hamirpur
                </a>
              </li>
              <li className="flex justify-center pb-2 font-sans text-gray-400 md:text-sm md:justify-start">
                Hamirpur, Himachal Pradesh, India
              </li>
              <li className="flex justify-center font-sans text-gray-400 md:text-sm md:justify-start">
                177005
              </li>
            </ul>
          </div>
          <div>
            <div>
              <div className="flex justify-center pb-2 text-sm font-medium text-white md:text-lg">
                STAY CONNECTED
              </div>
              <div className="flex justify-center mt-1 mb-5 space-x-2 md:space-x-5 md:mt-1 opacity-80">
                <a
                  href="https://discord.gg/tTra8Ssuh2"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="text-blue-800 fill-current text-1xl md:text-2xl"
                    icon={faDiscord}
                  />
                </a>
                <a
                  href="https://www.facebook.com/spec.ece/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="text-blue-600 fill-current text-1xl md:text-2xl"
                    icon={faFacebook}
                  />
                </a>
                <a
                  href="https://twitter.com/electrothon"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="text-blue-300 fill-current text-1xl md:text-2xl"
                    icon={faTwitter}
                  />
                </a>
                <a
                  href="https://instagram.com/s.p.e.c_nith?utm_source=ig_profile_share&amp;igshid=1dd01jvv7xk83"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="text-pink-600 fill-current text-1xl md:text-2xl"
                    icon={faInstagram}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/s-p-e-c-nith-40214b197/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="text-blue-500 fill-current text-1xl md:text-2xl"
                    icon={faLinkedin}
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-5 mb-16">
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://electrothon-6-pnkn3vfit-specniths-projects.vercel.app/",
                    "_blank"
                  )
                }
                className="relative text-white font-bold bg-gradient-to-r from-purple-700 to-blue-700 hover:from-blue-700 hover:to-purple-700 shadow-lg transition-all duration-300 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-xl rounded-full w-full md:w-auto"
              >
                <span className="absolute inset-0 blur-md opacity-75 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full"></span>
                <span className="relative">Electrothon 6.0</span>
              </button>
            </div>

          </div>
        </div>
        <div className="flex justify-center pb-2 text-sm text-gray-400 ">
          © 2025, SPEC NITH
        </div>

      </React.Fragment>
    );
  }
  return (
    <>
      <footer
        id="contact"
        className="flex justify-center px-4 -mb-6 text-gray-800 shadow-lg"
      >
        <div className="container flex flex-col justify-center space-y-10 text-center">
        <h2
          className="text-[50px] sm:text-[70px] md:text-[4.5rem] text-white text-center mb-6 md:mb-10"
          style={{ fontFamily: "Pirata One, sans-serif" ,
              textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
            Lets talk about everything!
          </h2>
          <div className="flex flex-col items-center justify-center m-4 mt-10 md:mt-4 lg:flex-row lg:space-x-44">
            {/* Map for Mobile View */}
            <div className="block md:hidden" style={{ margin: "auto" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.2710634274194!2d76.52577699021529!3d31.708489708025382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1674924336344!5m2!1sen!2sin"
                title="map"
                width="300"
                height="200"
                className="shadow-lg invert-[0.8] rounded-xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Map for Desktop View */}
            <div className="hidden md:block" style={{ margin: "auto" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.2710634274194!2d76.52577699021529!3d31.708489708025382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1674924336344!5m2!1sen!2sin"
                title="map"
                width="500"
                height="400"
                className="shadow-lg invert-[0.8] rounded-3xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div
              className="flex flex-col justify-center space-y-6"
              style={{ margin: "auto" }}
            >
              {/* Email Section */}
              <div className="mt-8 text-gray-300 text-center">
                Hate forms? Send us an email at{" "}
                <a
                  className="underline hover:text-gray-300"
                  href="mailto:spec@nith.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  spec@nith.ac.in
                </a>{" "}
                instead.
              </div>

              {/* Name Input Section */}
              <div className="mt-6">
                <div className="flex justify-center items-center text-sm font-sans md:text-lg text-gray-400 pb-4">
                  <input
                    className="w-80 p-2 rounded-md text-white bg-transparent border-2 border-dashed border-gray-400 focus:outline-none"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              {/* Email Input Section */}
              <div className="flex justify-center items-center text-sm font-sans md:text-lg text-gray-400 pb-4">
                <input
                  className="w-80 p-2 rounded-md text-white bg-transparent border-2 border-dashed border-gray-400 focus:outline-none"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Message Textarea Section */}
              <div className="flex justify-center items-center text-sm font-sans md:text-lg text-gray-400 pb-4">
                <textarea
                  className="w-80 p-2 rounded-md text-white bg-transparent border-2 border-dashed border-gray-400 focus:outline-none"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                />
              </div>
              {error && <div className="text-red-500">{error}</div>}
              {success && <div className="text-[#38c051]">{success}</div>}

              {/* Submit Button */}
              <div className="flex justify-center items-center ">
                {isLoading ? (
                  <div className="w-10 h-10 border-[4px] border-white rounded-full animate-spin"></div>
                ) : (
                  <button
                    type="submit"
                    onClick={sendEmail}
                    disabled={isLoading}
                    className="bg-primary px-6 py-2 border-2 border-dashed rounded-md text-white"
                  >
                    Send Message
                  </button>
                )}
              </div>
            </div>
          </div>

          <BottomFooter />
        </div>
      </footer>
    </>
  );
}
