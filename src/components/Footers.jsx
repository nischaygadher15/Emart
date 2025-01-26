import React, { useContext, useEffect, useRef, useState } from "react";
import { FaGooglePlusG, FaPaperPlane, FaTwitter } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaDolly, FaRegThumbsUp, FaShippingFast } from "react-icons/fa";
import { FaLocationPin, FaUser } from "react-icons/fa6";
import { IoCall, IoMailOpen } from "react-icons/io5";
import pay1 from "../assets//pay1.png";
import pay2 from "../assets/pay2.png";
import pay3 from "../assets/pay3.png";
import pay4 from "../assets/pay4.png";
import pay5 from "../assets/pay5.png";
import pay6 from "../assets/pay6.png";
import pay7 from "../assets/pay7.png";
import pay8 from "../assets/pay8.png";
import pay9 from "../assets/pay9.png";
import { RiSmartphoneFill } from "react-icons/ri";

const Footers = () => {
  return (
    <div className="px-4 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]">
      {/* <================================= Footer Services =================================>   */}
      <div className="sm:px-11">
        <p className="text-3xl font-semibold">Electronics:</p>
        <p className="my-3 text-lg">
          If you're considering a new laptop, looking for a powerful new car
          stereo or shopping for a new HDTV, we make it easy to find exactly
          what you need at a price you can afford. We offer Every Day Low Prices
          on TVs, laptops, cell phones, tablets and iPads, video games, desktop
          computers, cameras and camcorders, audio, video and more
        </p>
        <div className="flex flex-wrap gap-5 sm:flex-row justify-start sm:justify-between py-11 md:p-11">
          <div className="flex">
            <FaDolly className="text-5xl text-[#FDB03D]" />
            <div className="ms-3">
              <p className="font-semibold mb-1 text-2xl">Free Shipping</p>
              <p className="mb-0">on orders over $100</p>
            </div>
          </div>
          <div className="flex">
            <FaShippingFast className="text-5xl text-[#FDB03D]" />
            <div className="ms-3">
              <p className="font-semibold mb-1 text-2xl">Free Shipping</p>
              <p className="mb-0">on orders over $100</p>
            </div>
          </div>
          <div className="flex">
            <FaRegThumbsUp className="text-5xl text-[#FDB03D]" />
            <div className="ms-3">
              <p className="font-semibold mb-1 text-2xl">Free Shipping</p>
              <p className="mb-0">on orders over $100</p>
            </div>
          </div>
        </div>
      </div>

      {/* <================================= Footer Links 1 =================================>   */}
      <div className="bg-[#060E1F] text-white p-5 sm:p-11">
        {/* <div className="flex flex-col gap-5 md:flex-row justify-between"> */}
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="">
            <ul className="flex flex-col gap-3">
              <li>
                <h4 className="text-2xl font-semibold">Categories</h4>
              </li>
              <li>
                <a href="#">Mobiles</a>
              </li>
              <li>
                <a href="#">Computers</a>
              </li>
              <li>
                <a href="#">TV, Audio</a>
              </li>
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Washing Machines </a>
              </li>
              <li>
                <a href="#">Refrigerators</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-3">
              <li>
                <h4 className="text-2xl font-semibold">Quick Links</h4>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Faqs</a>
              </li>
              <li>
                <a href="#">Terms of use </a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-3">
              <li>
                <h4 className="text-2xl font-semibold">Get in Touch</h4>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <FaLocationPin className="" />
                  Mkc, 123 Sebastian, USA.
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <RiSmartphoneFill className="" />
                  12 2345 6790
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <IoCall className="" />
                  +11 3672 1890
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <IoMailOpen className="" />
                  mail 1@example.com
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">
                  <IoMailOpen className="" />
                  mail 2@example.com
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-3">
              <li>
                <h4 className="text-2xl font-semibold">Newsletter</h4>
              </li>
              <li>Free Delivery on your first order!</li>

              <li>
                <form className="flex">
                  <input
                    type="text"
                    className="p-2 w-3/4 xl:w-full"
                    placeholder="Email"
                    style={{
                      borderTopLeftRadius: "5px",
                      borderBottomLeftRadius: "5px",
                    }}
                  />
                  <button
                    className="p-3 bg-[#FDB03D]"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    style={{
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                  >
                    <FaPaperPlane className="text-xl" />
                  </button>
                </form>
              </li>
              <li>
                <span className="fs-4 fw-semibold">Follow Us on</span>
              </li>
              <li>
                <div className="flex justify-start gap-5">
                  <a
                    href="https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/index.html?_gl=1*2ofybf*_ga*Mjg0NTk3MzcxLjE3MjQ4NTY1ODE.*_ga_9HSZ46TKMQ*MTcyNDg1NjU4MC4xLjEuMTcyNDg1NzE5My41OC4wLjA.*_ga_EGV5GTJEP5*MTcyNDg1NjU4MS4xLjEuMTcyNDg1NzE5MS4wLjAuMA..*_ga_FFZF56TTWE*MTcyNDg1NjU4NC4xLjEuMTcyNDg1NzE5MS4wLjAuMA..&_ga=2.4833392.254561684.1724856584-284597371.1724856581#facebook"
                    className="bg-[#849fd7] p-2 rounded-full text-2xl"
                  >
                    <RiFacebookBoxFill />
                  </a>
                  <a
                    href="https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/index.html?_gl=1*2ofybf*_ga*Mjg0NTk3MzcxLjE3MjQ4NTY1ODE.*_ga_9HSZ46TKMQ*MTcyNDg1NjU4MC4xLjEuMTcyNDg1NzE5My41OC4wLjA.*_ga_EGV5GTJEP5*MTcyNDg1NjU4MS4xLjEuMTcyNDg1NzE5MS4wLjAuMA..*_ga_FFZF56TTWE*MTcyNDg1NjU4NC4xLjEuMTcyNDg1NzE5MS4wLjAuMA..&_ga=2.4833392.254561684.1724856584-284597371.1724856581#twitter"
                    className=" bg-[#33BDF1] p-2 rounded-full text-2xl"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://p.w3layouts.com/demos_new/template_demo/11-06-2021/electronics-mart-liberty-demo_Free/1081434887/web/index.html?_gl=1*2ofybf*_ga*Mjg0NTk3MzcxLjE3MjQ4NTY1ODE.*_ga_9HSZ46TKMQ*MTcyNDg1NjU4MC4xLjEuMTcyNDg1NzE5My41OC4wLjA.*_ga_EGV5GTJEP5*MTcyNDg1NjU4MS4xLjEuMTcyNDg1NzE5MS4wLjAuMA..*_ga_FFZF56TTWE*MTcyNDg1NjU4NC4xLjEuMTcyNDg1NzE5MS4wLjAuMA..&_ga=2.4833392.254561684.1724856584-284597371.1724856581#google-plus"
                    className="bg-[#e46f61] p-2 rounded-full text-2xl"
                  >
                    <FaGooglePlusG />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <================================= Footer Links 2 =================================>   */}

      <div className="mt-11 sm:mt-0 sm:p-11">
        <ul>
          <li className="mb-4">
            <h4 className="mb-3 text-2xl font-semibold">Mobile & Tablets :</h4>
            <ul className="flex flex-wrap gap-5">
              <li>
                <a href="#">Android Phones</a>
              </li>
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Feature Phones</a>
              </li>
              <li>
                <a href="#">Unboxed Phones</a>
              </li>
              <li>
                <a href="#">Refurbished Phones</a>
              </li>
              <li>
                <a href="#">Tablets</a>
              </li>
              <li>
                <a href="#">CDMA Phones</a>
              </li>
              <li>
                <a href="#">Value Added Services</a>
              </li>
              <li>
                <a href="#">Sell Old</a>
              </li>
              <li>
                <a href="#">Used Mobiles</a>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <h4 className="mb-3 text-2xl font-semibold">Computers :</h4>
            <ul className="flex flex-wrap gap-5">
              <li>
                <a href="#">Laptops </a>
              </li>
              <li>
                <a href="#">Printers</a>
              </li>
              <li>
                <a href="#">Routers</a>
              </li>
              <li>
                <a href="#">Ink & Toner Cartridges</a>
              </li>
              <li>
                <a href="#">Video Games</a>
              </li>
              <li>
                <a href="#">Unboxed & Refurbished Laptops</a>
              </li>
              <li>
                <a href="#">Assembled Desktops</a>
              </li>
              <li>
                <a href="#">Data Cards</a>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <h4 className="mb-3 text-2xl text-wrap font-semibold">
              TV, Audio and Large Appliances :
            </h4>
            <ul className="flex flex-wrap gap-5">
              <li>
                <a href="#">TVs & DTH </a>
              </li>
              <li>
                <a href="#">Home Theatre Systems</a>
              </li>
              <li>
                <a href="#">Hidden Cameras & CCTVs</a>
              </li>
              <li>
                <a href="#">Refrigerators</a>
              </li>
              <li>
                <a href="#">Washing Machines</a>
              </li>
              <li>
                <a href="#">Air Conditioners</a>
              </li>
              <li>
                <a href="#">Cameras</a>
              </li>
              <li>
                <a href="#">Speakers</a>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <h4 className="mb-3 text-2xl font-semibold">
              Mobile & Laptop Accessories :
            </h4>
            <ul className="flex flex-wrap gap-5">
              <li>
                <a href="#">Headphones</a>
              </li>
              <li>
                <a href="#">Power Banks</a>
              </li>
              <li>
                <a href="#">Backpacks</a>
              </li>
              <li>
                <a href="#">Mobile Cases & Covers</a>
              </li>
              <li>
                <a href="#">Pen Drives</a>
              </li>
              <li>
                <a href="#">External Hard Disks</a>
              </li>
              <li>
                <a href="#">Mouse</a>
              </li>
              <li>
                <a href="#">Smart Watches & Fitness Bands</a>
              </li>
              <li>
                <a href="#">MicroSD Cards</a>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <h4 className="mb-3 text-2xl font-semibold">Appliances :</h4>
            <ul className="flex flex-wrap gap-5">
              <li>
                <a href="#">Trimmers</a>
              </li>
              <li>
                <a href="#">Hair Dryers</a>
              </li>
              <li>
                <a href="#">Emergency Lights</a>
              </li>
              <li>
                <a href="#">Water Purifiers</a>
              </li>
              <li>
                <a href="#">Electric Kettles</a>
              </li>
              <li>
                <a href="#">Hair Straighteners</a>
              </li>
              <li>
                <a href="#">Induction Cooktops</a>
              </li>
              <li>
                <a href="#">Sewing Machines</a>
              </li>
              <li>
                <a href="#">Geysers</a>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <h4 className="mb-3 text-2xl font-semibold">
              Popular on Electronics Mart
            </h4>
            <ul className="flex flex-wrap gap-5">
              <li>
                <a href="#">Offers & Coupons</a>
              </li>
              <li>
                <a href="#">Couple Watches</a>
              </li>
              <li>
                <a href="#">Gas Stoves</a>
              </li>
              <li>
                <a href="#">Air Coolers</a>
              </li>
              <li>
                <a href="#">Air Purifiers</a>
              </li>
              <li>
                <a href="#">Headphones</a>
              </li>
              <li>
                <a href="#">Headsets</a>
              </li>
              <li>
                <a href="#">Pressure Cookers</a>
              </li>
              <li>
                <a href="#">Sandwich Makers</a>
              </li>
              <li>
                <a href="#">Air Friers</a>
              </li>
              <li>
                <a href="#">Irons</a>
              </li>
              <li>
                <a href="#">LED TV</a>
              </li>
              <li>
                <a href="#">Sandwich Makers</a>
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <h4 className="mb-3 text-2xl font-semibold">Payment Method</h4>
            <ul className="flex flex-wrap gap-5">
              <li>
                <img src={pay1} alt="Visa" />
              </li>
              <li>
                <img src={pay2} alt="Master" />
              </li>
              <li>
                <img src={pay3} alt="Maestro" />
              </li>
              <li>
                <img src={pay4} alt="American Express" />
              </li>
              <li>
                <img src={pay5} alt="Discover" />
              </li>
              <li>
                <img src={pay6} alt="Rupay" />
              </li>
              <li>
                <img src={pay7} alt="Net Banking" />
              </li>
              <li>
                <img src={pay8} alt="Cash on Delivery" />
              </li>
              <li>
                <img src={pay9} alt="East EMI" />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* <================================= Footer =================================>   */}
      <div className="font-semibold text-center py-5">
        &copy; 2024 Electronics Mart. All rights reserved <br />
        Design by&nbsp;
        <a href="https://w3layouts.com/" className="underline text-blue-600">
          W3layouts.
        </a>
        <br />
        Code by&nbsp;
        <a
          href="https://nkgdevs.netlify.app"
          className="underline text-blue-600"
        >
          N K Gadher
        </a>
      </div>
    </div>
  );
};

export default Footers;
