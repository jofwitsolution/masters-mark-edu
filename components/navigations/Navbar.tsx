import React from "react";
import TopNavbar from "./TopNavbar";
import LastNavbar from "./LastNavbar";
import MiddleNavbar from "./MiddleNavbar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[7500]">
      <TopNavbar />
      <MiddleNavbar />
      <LastNavbar />
    </nav>
  );
};

export default Navbar;
