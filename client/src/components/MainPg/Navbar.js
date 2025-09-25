import React from "react";
import { useState, useRef, useEffect } from "react";
import logo from "@/assets/speclogo.png";
import mlh from "@/assets/mlhlogo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // SVG icons remain unchanged
  const ContactIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      role="img"
      color="white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.91157 7.9678C2.74998 9.24043 2.74999 10.8704 2.75 12.9459V12.9459C2.74999 15.0214 2.74998 16.7596 2.91157 18.0322C3.07678 19.3333 3.42236 20.3741 4.19954 21.1969C4.98243 22.0259 5.98228 22.4 7.23089 22.5778C8.44104 22.75 10.1068 22.75 12.0596 22.75C14.0125 22.75 15.559 22.75 16.7691 22.5778C18.0177 22.4 19.0176 22.0259 19.8005 21.1969C20.5776 20.3741 20.9232 19.3333 21.0884 18.0322C21.25 16.7596 21.25 15.0214 21.25 12.9459V12.9459V12.9459C21.25 10.8704 21.25 9.24043 21.0884 7.9678C20.9232 6.66674 20.5776 5.62594 19.8005 4.80305C19.0176 3.97411 18.0177 3.59998 16.7691 3.42224C15.559 3.24997 14.0125 3.24998 12.0597 3.25H12.0596H12.0596H12.0596C10.1067 3.24998 8.44103 3.24997 7.23089 3.42224C5.98228 3.59999 4.98243 3.97411 4.19954 4.80305C3.42236 5.62594 3.07678 6.66674 2.91157 7.9678ZM12.0001 6.75C10.4813 6.75 9.2501 7.98122 9.2501 9.5C9.2501 11.0188 10.4813 12.25 12.0001 12.25C13.5189 12.25 14.7501 11.0188 14.7501 9.5C14.7501 7.98122 13.5189 6.75 12.0001 6.75ZM16.2143 15.6697C15.8435 15.2614 15.1375 14.8137 14.8275 14.6177C13.1004 13.4608 10.8998 13.4608 9.17272 14.6177C8.86266 14.8137 8.15667 15.2614 7.78592 15.6697C7.55059 15.9288 7.30253 16.2967 7.25726 16.7626C7.20867 17.2627 7.40665 17.7221 7.76846 18.1099C8.31558 18.6963 9.04719 19.25 10.0405 19.25H13.9597C14.953 19.25 15.6846 18.6963 16.2317 18.1099C16.5935 17.7221 16.7915 17.2627 16.7429 16.7626C16.6977 16.2967 16.4496 15.9288 16.2143 15.6697Z"
        fill="#white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.25C8.55228 1.25 9 1.69772 9 2.25V4.25C9 4.80228 8.55228 5.25 8 5.25C7.44772 5.25 7 4.80228 7 4.25V2.25C7 1.69772 7.44772 1.25 8 1.25ZM16 1.25C16.5523 1.25 17 1.69772 17 2.25V4.25C17 4.80228 16.5523 5.25 16 5.25C15.4477 5.25 15 4.80228 15 4.25V2.25C15 1.69772 15.4477 1.25 16 1.25Z"
        fill="#white"
      />
    </svg>
  );

  const faqIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      role="img"
      color="white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50272 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03143 22.25 9.7521 22.25 11.9428V11.9428V12.0572V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H12.0572H11.9428H11.9428C9.7521 22.25 8.03143 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50272 5.31137 2.11568 6.68802 1.93059C8.03144 1.74998 9.75212 1.74999 11.9428 1.75H12.0572ZM12 8.5C11.4477 8.5 11 8.94772 11 9.5C11 10.0523 10.5523 10.5 10 10.5C9.44772 10.5 9 10.0523 9 9.5C9 7.84315 10.3431 6.5 12 6.5C13.6569 6.5 15 7.84315 15 9.5C15 10.0957 14.8253 10.6537 14.5241 11.1219C14.3433 11.4028 14.1337 11.6684 13.9471 11.9004L13.8449 12.027C13.6904 12.2182 13.5532 12.3881 13.426 12.5629C13.1099 12.9973 13 13.277 13 13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5C11 12.6184 11.4328 11.903 11.8088 11.3862C11.9687 11.1665 12.1441 10.9494 12.2993 10.7576L12.3889 10.6466C12.5739 10.4167 12.7241 10.2232 12.8422 10.0397C12.942 9.88454 13 9.70057 13 9.5C13 8.94772 12.5523 8.5 12 8.5ZM11.9955 15.5C11.4457 15.5 11 15.9477 11 16.5C11 17.0523 11.4457 17.5 11.9955 17.5H12.0045C12.5543 17.5 13 17.0523 13 16.5C13 15.9477 12.5543 15.5 12.0045 15.5H11.9955Z"
        fill="white"
      />
    </svg>
  );

  const prizeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      role="img"
      color="white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 18L11 12L13 12L13 18L11 18Z"
        fill="white"
      />
      <path
        d="M7.25 18C7.25 17.5858 7.58579 17.25 8 17.25H16C16.4142 17.25 16.75 17.5858 16.75 18V20.75H18V22.75H6V20.75H7.25V18Z"
        fill="white"
      />
      <path
        d="M12 1.25C12.2483 1.25 12.4805 1.37289 12.6202 1.57821L14.6947 4.62843L18.2136 5.67366C18.45 5.74387 18.6367 5.92581 18.7131 6.16027C18.7895 6.39474 18.7458 6.65178 18.5961 6.84777L16.357 9.7802L16.4579 13.4795C16.4647 13.7271 16.3488 13.962 16.1483 14.1073C15.9477 14.2526 15.6884 14.2896 15.4552 14.206L12 12.968L8.54479 14.206C8.31165 14.2896 8.05231 14.2526 7.85176 14.1073C7.65121 13.962 7.53533 13.7271 7.54208 13.4795L7.64305 9.7802L5.40391 6.84777C5.25426 6.65178 5.21051 6.39474 5.2869 6.16027C5.36329 5.92581 5.55006 5.74387 5.78645 5.67366L9.30527 4.62843L11.3799 1.57821C11.5195 1.37289 11.7517 1.25 12 1.25Z"
        fill="white"
      />
    </svg>
  );

  const themeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      role="img"
      color="white"
    >
      <path
        d="M9.25 2C9.25 1.58579 9.58579 1.25 10 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2V8.57536L20.3859 11.3569C20.6118 11.4924 20.75 11.7366 20.75 12V14.75H4.25V12C4.25 11.7366 4.38822 11.4924 4.61413 11.3569L9.25 8.57536V2Z"
        fill="white"
      />
      <path
        d="M5.59366 15.75H19.5555L20.7333 21.826C20.7809 22.0475 20.7258 22.2787 20.5834 22.4549C20.441 22.6311 20.2266 22.7335 20 22.7335H16C15.5858 22.7335 15.25 22.3977 15.25 21.9835V20.0268C14.6895 20.4945 14.0539 20.8765 13.3897 21.189C12.0616 21.814 10.5653 22.1875 9.18273 22.412C7.79583 22.6373 6.49458 22.7171 5.5423 22.7411C5.07083 22.7529 4.25429 22.7379 3.9706 22.7327L3.96068 22.7325C3.68703 22.7181 3.44299 22.5556 3.32417 22.3087C3.20536 22.0618 3.23067 21.7697 3.39019 21.5469C4.79126 19.59 5.36194 17.0167 5.59366 15.75Z"
        fill="white"
      />
    </svg>
  );

  const sponsorIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      role="img"
      color="white"
    >
      <path
        d="M18.501 6.25H22.501V14.25H19.914C19.8997 13.906 19.7621 13.5662 19.501 13.3036L13.501 7.26785H12.501L11.2668 8.50942C10.5461 9.23432 9.39894 9.29823 8.60315 8.65782L7.50098 7.77083L11.0218 4.25H15.501L18.501 6.25Z"
        fill="white"
      />
      <path
        d="M1.50098 7.25H6.36465C6.2809 7.43273 6.24153 7.63497 6.25289 7.84C6.2725 8.19373 6.44128 8.52253 6.71729 8.74465L7.81946 9.63164C9.11415 10.6736 10.9821 10.5688 12.1533 9.39068L12.8852 8.65437L18.501 14.3036C18.7621 14.5662 18.8997 14.906 18.914 15.25C18.9298 15.6337 18.7922 16.0225 18.501 16.3155C17.9487 16.871 17.0533 16.871 16.501 16.3155L16.001 15.8125C16.5533 16.3681 16.5533 17.2688 16.001 17.8244C15.4487 18.38 14.5533 18.38 14.001 17.8244L13.001 16.8184C13.5533 17.374 13.5533 18.2748 13.001 18.8303C12.4487 19.3859 11.5533 19.3859 11.001 18.8303L9.50098 17.3214C10.0533 17.877 10.0533 18.7778 9.50098 19.3333C8.94869 19.8889 8.05326 19.8889 7.50098 19.3333L3.50098 15.25H1.50098V7.25Z"
        fill="white"
      />
    </svg>
  );

  const scheduleIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      role="img"
      color="white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 1.5V3H16.5V1.5H18.5V3H21C21.4142 3 21.75 3.33579 21.75 3.75V21.525C21.75 22.0635 21.3135 22.5 20.775 22.5H3.225C2.68652 22.5 2.25 22.0635 2.25 21.525V3.75C2.25 3.33579 2.58579 3 3 3H5.5V1.5H7.5ZM19.8 20.55V9.5H4.2V20.55H19.8Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12.025H9.00897V14.025H7V12.025ZM10.9955 12.025H13.0045V14.025H10.9955V12.025ZM14.991 12.025H17V14.025H14.991V12.025ZM7 16.025H9.00897V18.025H7V16.025ZM10.9955 16.025H13.0045V18.025H10.9955V16.025Z"
        fill="white"
      />
    </svg>
  );

  const aboutIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      color="white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.60499 3.60985C8.05278 4.45845 7 6.10628 7 8C7 9.0141 7.3019 9.95769 7.82074 10.7458C5.83291 10.6522 4.25 9.01097 4.25 7C4.25 4.92893 5.92893 3.25 8 3.25C8.5743 3.25 9.11844 3.3791 9.60499 3.60985ZM8.28058 12.25C5.8048 12.9893 4 15.2839 4 18V19.75H2C1.58579 19.75 1.25 19.4142 1.25 19V17C1.25 14.3766 3.37665 12.25 6 12.25H8.28058ZM12 4.25C9.92893 4.25 8.25 5.92893 8.25 8C8.25 10.0711 9.92893 11.75 12 11.75C14.0711 11.75 15.75 10.0711 15.75 8C15.75 5.92893 14.0711 4.25 12 4.25ZM10 13.25C7.37665 13.25 5.25 15.3766 5.25 18V20C5.25 20.4142 5.58579 20.75 6 20.75H18C18.4142 20.75 18.75 20.4142 18.75 20V18C18.75 15.3766 16.6234 13.25 14 13.25H10ZM19.75 7C19.75 9.01097 18.1671 10.6522 16.1793 10.7458C16.6981 9.95769 17 9.0141 17 8C17 6.10628 15.9472 4.45845 14.395 3.60985C14.8816 3.3791 15.4257 3.25 16 3.25C18.0711 3.25 19.75 4.92893 19.75 7ZM22 19.75H20V18C20 15.2839 18.1952 12.9893 15.7194 12.25H18C20.6234 12.25 22.75 14.3766 22.75 17V19C22.75 19.4142 22.4142 19.75 22 19.75Z"
        fill="white"
      />
    </svg>
  );

  const homeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      color="white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2975 2.38724C11.296 1.60009 12.704 1.60008 13.7025 2.38724L20.7025 7.90553C21.364 8.42699 21.75 9.22285 21.75 10.0652V20.0001C21.75 21.5189 20.5188 22.7501 19 22.7501L16 22.7501C15.0335 22.7501 14.25 21.9666 14.25 21.0001V17.0001C14.25 16.3098 13.6904 15.7501 13 15.7501H11.0024C10.3123 15.7501 9.75272 16.3094 9.75239 16.9995L9.75048 21.001C9.75002 21.9672 8.96665 22.7501 8.00048 22.7501L5 22.7501C3.48122 22.7501 2.25 21.5189 2.25 20.0001V10.0652C2.25 9.22285 2.63602 8.42699 3.2975 7.90553L10.2975 2.38724Z"
        fill="white"
      />
    </svg>
  );

  // Shortened and optimized menu items for better horizontal fit
  const links = [
    { name: "Home", href: "#home", icon: homeIcon },
    { name: "About Us", href: "#about", icon: aboutIcon },
    { name: "Judges", href: "#judges" },
    { name: "Prizes", href: "#prizes", icon: prizeIcon },
    { name: "Challenges", href: "#challenges" },
    { name: "Timeline", href: "#timeline", icon: scheduleIcon },
    { name: "Sponsors", href: "#sponsors", icon: sponsorIcon },
    { name: "Teams", href: "#testimonials" },
    { name: "Organizers", href: "#Organizers" },
    { name: "FAQ", href: "#faq", icon: faqIcon },
    { name: "Contact Us", href: "#contact", icon: ContactIcon },
  ];
  
  const [hoverStyle, setHoverStyle] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    activeIndex: null,
  });
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Reset refs on render
    linksRef.current = linksRef.current.slice(0, links.length);
  }, [links.length]);

  const handleHover = (index) => {
    if (linksRef.current[index] && navRef.current) {
      const link = linksRef.current[index];
      const navbarRect = navRef.current.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();

      setHoverStyle({
        left: linkRect.left - navbarRect.left, // Position relative to navbar
        width: linkRect.width,
        opacity: 1,
        activeIndex: index, // Store the index of the hovered link
      });
    }
  };

  const handleLeave = () => {
    setHoverStyle((prev) => ({ ...prev, opacity: 0, activeIndex: null })); // Hide background
  };

  return (
    <div className="flex justify-center h-[80px] items-center">
      <Image
        className="absolute sm:w-[150px] w-[100px] top-0 lg:top-auto left-0 max-lg:w-[100px]"
        width={150}
        height={119}
        src={logo}
        alt="SPEC Logo"
        style={{ height: "auto" }}
      />
      <div className="fixed z-50">
        {/* Desktop Navigation - Compact version */}
        <div
          ref={navRef}
          className="h-[57px] w-[780px] lg:flex hidden max-xl:scale-90 bg-[#37393bd3] xl:w-[980px] rounded-[40px] shadow-sm shadow-white items-center justify-center relative Mordred"
          onMouseLeave={handleLeave}
        >
          {/* Sliding Background */}
          <div
            className="absolute top-0 bottom-0 bg-white rounded-full my-2 transition-all duration-300"
            style={{
              left: hoverStyle.left,
              width: hoverStyle.width,
              opacity: hoverStyle.opacity,
            }}
          />

          <div className="flex justify-between items-center w-full px-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`text-[16px] px-2 py-2 relative z-10 transition-all duration-300 whitespace-nowrap inline-flex items-center justify-center ${
                  hoverStyle.activeIndex === index ? "text-black" : "text-white"
                }`}
                ref={(el) => (linksRef.current[index] = el)}
                onMouseEnter={() => handleHover(index)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu button - could add if needed */}
        <div className="lg:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 rounded-full bg-[#37393bd3]"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Mobile dropdown menu - alternative to bottom navigation */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 py-2 bg-[#37393bd3] rounded-lg shadow-xl">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Mobile Navigation Bar */}
      <div className="py-3 lg:hidden fixed bottom-2 z-50 bg-[#2b3846] w-[98%] rounded-2xl flex items-center justify-around">
        <Link href="#home" className="text-[20px]">
          {homeIcon()}
        </Link>
        <Link href="#about" scroll={true} className="text-[20px]">
          {aboutIcon()}
        </Link>
        <Link href="#prizes" className="text-[20px]">
          {prizeIcon()}
        </Link>
        <Link href="#sponsors" className="text-[20px]">
          {sponsorIcon()}
        </Link>
        <Link href="#faq" className="text-[20px]">
          {faqIcon()}
        </Link>
        <Link href="#contact" className="text-[20px]">
          {ContactIcon()}
        </Link>
      </div>

      {/* MLH Badge */}
      <Link
        className="z-50 block lg:w-[100px] sm:w-[60px] w-[40px] "
        id="mlh-trust-badge"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
        target="_blank"
        style={{
          position: "fixed",
          right: "5vw",
          top: "0",
        }}
      >
        <Image
          className="max-lg:w-[70px]"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
          width={100}
          height={100}
          alt="Major League Hacking 2025 Hackathon Season"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
    </div>
  );
};

export default Navbar;
