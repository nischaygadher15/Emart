import React from "react";
import smartWatch from "../assets/off1.png";
import smartPhone from "../assets/off2.png";
import bg from "../assets/bg.jpg";

const Offers = () => {
  return (
    <div
      className="my-14 w-full min-h-screen flex flex-col lg:flex-row gap-9 justify-between p-8 sm:p-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <================================= Product Offers =================================>   */}
      <div
        className="w-full flex flex-col items-center sm:flex-row justify-between lg:w-1/2 
      p-4 bg-white rounded-md"
      >
        <div className="flex flex-col justify-center mb-3 sm:mb-0">
          <span className="text-md sm:text-lg">
            New Collections, New Trendy
          </span>
          <p className="font-bold text-2xl sm:text-4xl my-3">Smart Watches</p>
          <span className="text-md sm:text-lg">
            Sale up to 25% off all in store
          </span>
        </div>

        <img src={smartWatch} alt="Smart Watch" className="max-w-[250px]" />
      </div>

      <div
        className="w-full flex flex-col items-center sm:flex-row justify-between lg:w-1/2 
      p-4 bg-white rounded-md"
      >
        <div className="flex flex-col justify-center mb-3 sm:mb-0">
          <span className="text-md sm:text-lg">Top Brands, lowest Prices</span>
          <p className="font-bold text-2xl sm:text-4xl my-3">Smart Phones</p>
          <span className="text-md sm:text-lg">
            Free shipping order over $100
          </span>
        </div>
        <div className="">
          <img src={smartPhone} alt="Smart Watch" className="max-w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
