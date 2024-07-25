import React from "react";
import TopNavbar from "./TopNavbar";
import LastNavbar from "./LastNavbar";
import MiddleNavbar from "./MiddleNavbar";

const Navbar = () => {
  return (
    <nav>
      <TopNavbar />
      <MiddleNavbar />
      <LastNavbar />
    </nav>
  );
};

export default Navbar;
