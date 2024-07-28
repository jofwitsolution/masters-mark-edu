"use client";

import React from "react";
import { navbarLinks } from "@/constants/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";

const LastNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-primary-100 h-[70px] max-md:hidden">
      <div className="max-width h-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          {navbarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            return (
              <Link
                key={item.label}
                href={item.route}
                className={`${
                  isActive ? "navbar-link-active" : ""
                } navbar-link font-inter`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div>
          <Button className="flex items-center gap-2 bg-secondary hover:bg-secondary-100 font-medium text-white rounded-s-[50px] rounded-e-[50px] py-[15px] px-[35px]">
            <LogIn size={18} className="text-white" /> Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LastNavbar;
