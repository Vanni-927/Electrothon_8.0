const Heading = ({ children }) => {
    return (
      <h2
          className="text-[50px] sm:text-[70px] md:text-[4.5rem] text-white text-center mb-6 md:mb-10"
          style={{ fontFamily: "Pirata One, sans-serif" ,
              textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
        {children}
      </h2>
    );
  };
  
  export default Heading;
  