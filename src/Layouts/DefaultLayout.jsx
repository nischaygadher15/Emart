import React from "react";
import NavbarUpper from "../components/NavbarUpper";
import NavbarLower from "../components/NavbarLower";

const DeafaultLayout = ({ children }) => {
  return (
    <div className="relative max-w-screen h-full flex flex-col items-center overflow-x-hidden">
      <NavbarUpper />
      <NavbarLower />
      {children}
    </div>
  );
};

export default DeafaultLayout;
