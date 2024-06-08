import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-8">
        <Image
          src="/header-logo.svg"
          alt="Phonetic Guesser logo header"
          width={200}
          height={200}
          className="w-full h-auto"
          priority 
        />
      </div>
    </div>
  );
};

export default Header;
