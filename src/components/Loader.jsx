import { Spinner } from "flowbite-react";
import React from "react";
import logo from "../assets/shopping-cart.ico";
import { FaShoppingCart } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] z-50 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 -mt-[70px]">
        <div className="flex items-center gap-3 text-3xl text-white">
          <FaShoppingCart className="w-11 sm:w-14 h-11 sm:h-14 " />
          <p>E-Mart</p>
        </div>
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    </div>
  );
};

export default Loader;
