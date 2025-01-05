import React from "react";
import smartWatch from "../assets/off1.png";
import smartPhone from "../assets/off2.png";

const Offers = () => {
  return (
    <>
      {/* <================================= Product Offers =================================>   */}
      <div className="flex gap-5 m-0">
        <div className="mt-0 px-4">
          <a href="#">
            <div className="flex">
              <div className="flex flex-col justify-center">
                <span className="">New Collections, New Trendy</span>
                <p className="font-semibold">Smart Watches</p>
                <span>Sale up to 25% off all in store</span>
              </div>
              <div className="">
                <img src={smartWatch} alt="Smart Watch" className="" />
              </div>
            </div>
          </a>
        </div>
        <div className="mt-0 px-4">
          <a href="#">
            <div className="flex">
              <div className="flex flex-col justify-center">
                <span className="">Top Brands, lowest Prices</span>
                <p className="font-semibold">Smart Phones</p>
                <span className="">Free shipping order over $100</span>
              </div>
              <div className="">
                <img src={smartPhone} alt="Smart Watch" className="" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Offers;
