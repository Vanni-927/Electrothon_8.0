import Image from 'next/image';
import partnerlogo from "../../assets/logos/mlh-yEbPA3jb.png";

const PartnerBox = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 bg-bd w-1/4 mb-4 mt-0 h-28 xl:mb-8 lg:mb-2 md:mb-4 sm:mb-6 rounded-lg 2xl:h-40 xl:h-40 lg:h-36 md:h-32 sm:min-h-28 xs:h-24 2xl:w-60 xl:w-60 lg:w-52 md:w-44 sm:min-w-40 xs:w-36">
      <div className="relative 2xl:h-36 xl:h-36 lg:h-32 md:h-24 sm:h-20 xs:h-14 2xl:w-40 xl:w-40 lg:w-36 md:w-28 sm:w-28 xs:w-24 xl:p-2 lg:p-1 md:p-1 bg-transparent">
        <Image
          src={partnerlogo}
          alt="Partner Logo"
          fill
          style={{ objectFit: "contain" }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default PartnerBox;
