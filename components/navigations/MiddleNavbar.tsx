import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const MiddleNavbar = () => {
  return (
    <div className="bg-white h-[4rem] max-sm:shadow-md sm:h-[6rem]">
      <div className="max-width h-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/mmlogo.png"
            alt="mmlogo"
            width={250}
            height={60}
            className="max-sm:w-[160px]"
          />
        </Link>
        <div className="flex gap-8 items-center font-inter">
          <div className="flex gap-8 items-center max-md:hidden">
            <Link
              href="tel: +2347046145189"
              className="flex items-center group gap-2"
            >
              <div className="circled-icon group-hover:bg-secondary">
                <Phone width={15.75} height={22} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Phone Number</span>
                <span className="text-[14px] text-tertiary-400">
                  +234 7046145189
                </span>
              </div>
            </Link>
            <Link
              href="mailto: admin@mastersmarkedu.com"
              className="flex items-center group gap-2"
            >
              <div className="circled-icon group-hover:bg-secondary">
                <Mail width={15.75} height={22} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Email Us Here</span>
                <span className="text-[14px] text-tertiary-400">
                  admin@mastersmarkedu.com
                </span>
              </div>
            </Link>
          </div>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default MiddleNavbar;
