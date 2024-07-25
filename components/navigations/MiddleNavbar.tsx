import React from "react";
import Image from "next/image";

const MiddleNavbar = () => {
  return (
    <div className="bg-white h-[6rem]">
      <div className="max-width h-full flex items-center justify-between">
        <Image
          src="/images/mmlogo.png"
          alt="mmlogo"
          width={250}
          height={50}
          className=""
        />
        <div></div>
      </div>
    </div>
  );
};

export default MiddleNavbar;
