import { Carousel } from "flowbite-react";
import React, { useState } from "react";
import c1 from "../assets/Carousel_Images/c_banner1.png";
import c2 from "../assets/Carousel_Images/c_banner2.png";
import c3 from "../assets/Carousel_Images/c_banner3.png";
import c4 from "../assets/Carousel_Images/c_banner4.png";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { Accordion } from "flowbite-react";
import { FaStar } from "react-icons/fa";

const Home = () => {
  let [slide, setSlide] = useState(false);

  const accordianTheme = {
    root: {
      base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
      flush: {
        off: "rounded-lg border",
        on: "border-b",
      },
    },
    content: {
      base: "p-0 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900",
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0",
        open: {
          off: "",
          on: "rotate-180",
        },
      },
      base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
      flush: {
        off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
        on: "bg-transparent dark:bg-transparent",
      },
      heading: "",
      open: {
        off: "",
        on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white",
      },
    },
  };
  return (
    <div className="px-4 sm:px-7 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]">
      {/* Offer Carousel */}
      <div className="w-full h-[40vh] sm:h-[60vh] xl:h-[60vh] 2xl:h-[70vh]">
        <Carousel
          slide={slide}
          slideInterval={3000}
          leftControl={
            <RiArrowLeftWideFill className="text-3xl sm:text-4xl lg:text-5xl text-gray-800" />
          }
          rightControl={
            <RiArrowRightWideFill className="text-3xl sm:text-4xl lg:text-5xl text-gray-800" />
          }
          onMouseEnter={() => setSlide(false)}
          onMouseLeave={() => setSlide(true)}
        >
          {/* Slide 1  */}
          <div className="relative w-full h-full">
            <img
              src={c1}
              alt="Carousel Banner 1"
              className="w-full h-full object-center sm:object-cover"
            />
            <div className="w-[45%] sm:w-[50%] h-full absolute top-0 left-12 sm:left-20 md:left-24 z-10 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-11">
              <p className="text-wrap text-base xl:text-xl">
                Get flat&nbsp;
                <span className="text-xl md:text-2xl xl:text-3xl font-bold">
                  10%
                </span>
                &nbsp; Cashback
              </p>
              <p className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] md:leading-[40px] lg:leading-[56px] uppercase ">
                Exciting deals on Televisions
              </p>
              <div>
                <button className="p-2 sm:p-3 font-bold md:text-lg text-white bg-[#FDB03D] rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative w-full h-full">
            <img
              src={c2}
              alt="Carousel Banner 2"
              className="w-full h-full object-center sm:object-cover"
            />
            <div className="w-[45%] sm:w-[50%] h-full absolute top-0 left-12 sm:left-20 md:left-24 z-10 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-11">
              <p className="text-base xl:text-xl">
                Top&nbsp;
                <span className="text-xl md:text-2xl xl:text-3xl font-bold">
                  Brands
                </span>
                &nbsp;lowest&nbsp;
                <span className="text-xl md:text-2xl xl:text-3xl font-bold">
                  Prices
                </span>
              </p>
              <p className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] md:leading-[40px] lg:leading-[56px] uppercase ">
                Wide Range of mobile phones
              </p>
              <div>
                <button className="p-2 sm:p-3 font-bold md:text-lg text-white bg-[#FDB03D] rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative w-full h-full">
            <img
              src={c3}
              alt="Carousel Banner 3"
              className="w-full h-full object-center sm:object-cover"
            />
            <div className="w-[45%] sm:w-[50%] h-full absolute top-0 left-12 sm:left-20 md:left-24 z-10 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-11">
              <p className="text-wrap text-base xl:text-xl">
                Get flat&nbsp;
                <span className="text-xl md:text-2xl xl:text-3xl font-bold">
                  10%
                </span>
                &nbsp; Cashback
              </p>
              <p className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] md:leading-[40px] lg:leading-[56px] uppercase ">
                Exciting deals on Coolers
              </p>
              <div>
                <button className="p-2 sm:p-3 font-bold md:text-lg text-white bg-[#FDB03D] rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="relative w-full h-full">
            <img
              src={c4}
              alt="Carousel Banner 4"
              className="w-full h-full object-center sm:object-cover"
            />
            <div className="w-[45%] sm:w-[50%] h-full absolute top-0 left-12 sm:left-20 md:left-24 z-10 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-11">
              <p className="text-wrap text-base xl:text-xl">
                Get flat&nbsp;
                <span className="text-xl md:text-2xl xl:text-3xl font-bold">
                  10%
                </span>
                &nbsp;Cashback
              </p>
              <p className="text-xl sm:text-3xl md:text-4xl lg:text-[40px] md:leading-[40px] lg:leading-[56px] uppercase ">
                Exciting deals on Watches
              </p>
              <div>
                <button className="p-2 sm:p-3 font-bold md:text-lg text-white bg-[#FDB03D] rounded">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <p className="text-4xl font-semibold text-center py-10">Our Products</p>

      <div className="w-full flex gap-5">
        <div
          className="w-1/4"
          style={{ border: "2px solid rgba(0,0,0,0.6)", borderRadius: "5px" }}
        >
          <hr />
          <div className="p-5">
            <p className="text-xl">Filters</p>
          </div>
          <hr />

          <div className="p-5">
            <p className="text-lg">Categories</p>
            <select name="category" className="p-2">
              <option value="select">Select Category</option>
            </select>
          </div>
          <hr />

          <div className="p-5">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title className="p-3">Price Range</Accordion.Title>
                <Accordion.Content>
                  <p>React Range Slider</p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <hr />

          {/* Discount */}
          <div className="p-5">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title className="p-3">Discount</Accordion.Title>
                <Accordion.Content>
                  <ul>
                    <li>
                      <input type="radio" />
                      50% or more
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <hr />

          {/* Electronics */}
          <div className="p-5">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title className="p-3">Electronics</Accordion.Title>
                <Accordion.Content>
                  <ul>
                    <li>
                      <input type="checkbox" />
                      Accesorries
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <hr />

          {/* Sizes */}
          <div className="p-5">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title className="p-3">Size</Accordion.Title>
                <Accordion.Content>
                  <ul>
                    <li>
                      <input type="radio" />
                      X-Large
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <hr />

          {/* Customer Rating */}
          <div className="p-5">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title className="p-3">
                  Customer Rating
                </Accordion.Title>
                <Accordion.Content>
                  <ul>
                    <li className="flex items-center gap-2">
                      <input type="radio" />4
                      <FaStar className="text-yellow-300" />& Above
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
          <hr />
        </div>

        <div className="w-3/4"></div>
      </div>
    </div>
  );
};

export default Home;
