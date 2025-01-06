import React from "react";
import NavbarUpper from "../components/NavbarUpper";
import NavbarLower from "../components/NavbarLower";
import Footers from "../components/Footers";

const DeafaultLayout = ({ children }) => {
  return (
    <div className="relative max-w-screen h-full flex flex-col items-center overflow-x-hidden">
      {/* <========================= Navbar =========================> */}
      <NavbarUpper />
      <NavbarLower />
      {/* <========================= Children =========================> */}

      {children}

      {/* <========================= Footer =========================> */}
      <Footers />
    </div>
  );
};

export default DeafaultLayout;
