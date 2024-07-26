"use client";

import React from "react";
import { navbarLinks } from "@/constants/nav-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LastNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-primary-100 h-[70px]">
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
                } navbar-link`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LastNavbar;
