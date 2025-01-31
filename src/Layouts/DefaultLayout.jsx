import React, { useCallback, useEffect, useRef } from "react";
import NavbarUpper from "../components/NavbarUpper";
import NavbarLower from "../components/NavbarLower";
import Footers from "../components/Footers";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { selectLoader, StartLoading, StopLoading } from "../Redux/LoaderSlice";

const DeafaultLayout = ({ children }) => {
  let mainBody = useRef(null);
  let pathName = useLocation();
  let isLoading = useSelector(selectLoader);
  let dispatch = useDispatch();

  let letStopLoading = useCallback(() => dispatch(StopLoading()));

  useEffect(() => {
    mainBody.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathName]);

  useEffect(() => {
    letStopLoading();
  }, []);

  {
    /* <========================= Loader =========================> */
  }
  if (isLoading) return <Loader />;

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
