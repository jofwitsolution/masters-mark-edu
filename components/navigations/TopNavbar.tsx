import React from "react";
import Image from "next/image";
import { socialLinks } from "@/constants/nav-links";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <div className="w-full bg-primary text-white h-[3rem]">
      <div className="max-width h-full flex justify-end items-center">
        <div className="flex gap-6 items-center">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              rel="noreferrer"
              target="_blank"
              className=""
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={26}
                height={18}
                className="invert hover:invert-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
