import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const MiddleNavbar = () => {
  return (
    <div className="bg-white h-[6rem]">
      <div className="max-width h-full flex items-center justify-between">
        <Image
          src="/images/mmlogo.png"
          alt="mmlogo"
          width={250}
          height={60}
          className=""
        />
        <div className="flex gap-8 items-center">
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
      </div>
    </div>
  );
};

export default MiddleNavbar;
