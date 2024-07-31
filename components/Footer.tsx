import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants/nav-links";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-[400px] pt-14">
      <div className="max-width">
        <div className="flex flex-col max-md:gap-8 md:flex-row justify-between leading-[28px] font-inter">
          <div className="max-w-[400px] space-y-6">
            <Link href="/">
              <Image
                src="/images/mmlogo.png"
                alt="mmlogo"
                width={250}
                height={60}
                className="max-sm:w-[160px]"
              />
            </Link>
            <p className="">
              Master’smark is a quintessential educational facility saddled with
              a mission of laying a solid foundation in each child by developing
              their social, educational, physical and psychological well-being,
              thereby developing the total child.
            </p>
            <div className="flex gap-6 items-center">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.route}
                  rel="noreferrer"
                  target="_blank"
                  className="w-[38px] h-[38px] rounded-full bg-secondary hover:bg-secondary-100 flex items-center justify-center"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={26}
                    height={18}
                    className="invert"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold md:text-[24px] text-[20px] mb-4 md:mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-1">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/schools">Schools</Link>
              <Link href="/events">Events</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>

          <div className="max-w-[400px]">
            <h4 className="font-semibold text-[20px] md:text-[24px] mb-4 md:mb-6">
              Get in Touch
            </h4>
            <p>Our support team is available 24/7 to answer your queries</p>
            <p className="flex items-center gap-2 mb-3">
              <span className="w-[38px] h-[38px] text-white rounded-full bg-secondary hover:bg-secondary-100 flex items-center justify-center">
                <MapPin />
              </span>{" "}
              <span>
                19, Fatai Animashaun Street, Magodo, Kosofe, Lagos, Nigeria.
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-[38px] h-[38px] text-white rounded-full bg-secondary hover:bg-secondary-100 flex items-center justify-center">
                <Phone />
              </span>{" "}
              <Link href="tel: +234 7046145189">+234 7046145189</Link>
            </p>
          </div>
        </div>

        <div className="border border-t mt-6 mb-3" />
        <div className="flex justify-center font-inter font-medium pb-2">
          <span>Copyright © 2024 Master&apos;sMark</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
