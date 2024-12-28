import React from "react";
import NavbarUpper from "../components/NavbarUpper";
import NavbarLower from "../components/NavbarLower";

const DeafaultLayout = ({ children }) => {
  return (
    <div className="w-screen h-full flex flex-col items-center">
      <NavbarUpper />
      <NavbarLower />
      <div className="px-4 container">{children}</div>
    </div>
  );
};

export default DeafaultLayout;
