"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import DBMobileNav from "./DBMobileNav";

const DBNavbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-[900] bg-tertiary-200">
      <div className="h-[3.375rem] shadow-xl px-4 md:ml-[4rem] lg:ml-[15.0625rem]">
        <div className="flex size-full items-center justify-between">
          <h1 className="font-semibold capitalize md:text-[1.125rem]">Admin</h1>

          <div className="flex items-center gap-[1.5rem]">
            <UserButton />
            <DBMobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBNavbar;
