import React, { useRef } from "react";
import NavbarUpper from "../components/NavbarUpper";
import NavbarLower from "../components/NavbarLower";
import Footers from "../components/Footers";

const DeafaultLayout = ({ children }) => {
  let mainBody = useRef(null);
  return (
    <div
      className="relative pt-[56px] max-w-screen max-h-screen flex flex-col items-center overflow-x-hidden overflow-y-auto"
      ref={mainBody}
    >
      {/* <========================= Navbar =========================> */}
      <NavbarUpper myRef={mainBody} />
      <NavbarLower />
      {/* <========================= Children =========================> */}

      {children}

      {/* <========================= Footer =========================> */}
      <Footers />
    </div>
  );
};

export default DeafaultLayout;
