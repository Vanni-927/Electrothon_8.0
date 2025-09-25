const SubHeading = ({ children }) => {
  return (
    <h1
      style={{ fontFamily: 'Eleanora, sans-serif' }}
      className="text-4xl mb-9 mt-1 xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-7xl text-center 2xl:mt-6 xl:mt-7 lg:mt-12 md:mt-8 sm:mt-8 xs:mt-8 md:mb-8 sm:mb-7 bg-transparent"
    >
      {children}
    </h1>
  );
};

export default SubHeading;