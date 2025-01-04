"use client";

import { Badge, Carousel } from "flowbite-react";
import { Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import c1 from "../assets/Carousel_Images/c_banner1.png";
import c2 from "../assets/Carousel_Images/c_banner2.png";
import c3 from "../assets/Carousel_Images/c_banner3.png";
import c4 from "../assets/Carousel_Images/c_banner4.png";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { Accordion } from "flowbite-react";
import { FaDotCircle, FaStar } from "react-icons/fa";
import ReactSlider from "react-slider";
import "../App.css";
import ProductList from "../Data/ProductsList";

const Home = () => {
  let [slide, setSlide] = useState(true);
  let [rangeVal, setRangeVal] = useState([500, 3500]);
  let product = [...ProductList];

  // React Pagination
  let [currentPage, setCurrentPage] = useState(1);
  let [currentItems, setCurrentItems] = useState([]);
  const onPageChange = (page) => setCurrentPage(page);
  let itemsPerPage = 12;

  useEffect(() => {
    let startProducts = (currentPage - 1) * itemsPerPage;
    let endProducts = startProducts + itemsPerPage - 1;
    currentItems = product.slice(startProducts, endProducts + 1);
    setCurrentItems(currentItems);
  }, [currentPage]);

  return (
    <div className="px-4 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]">
      {/* Offer Carousel */}
      <div className="w-full h-[40vh] sm:h-[60vh] xl:h-[60vh] 2xl:h-[70vh]">
        <Carousel
          slide={slide}
          slideInterval={3000}
          leftControl={
            window.screen.width > 640 ? (
              <RiArrowLeftWideFill
                className="-translate-x-5 text-3xl sm:text-4xl lg:text-5xl 
              text-gray-800"
              />
            ) : (
              <div className="opacity-0 min-w-full min-h-full px-5"></div>
            )
          }
          rightControl={
            window.screen.width > 640 ? (
              <RiArrowRightWideFill className="translate-x-5 text-3xl sm:text-4xl lg:text-5xl text-gray-800" />
            ) : (
              <div className="hidden"></div>
            )
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
            <div className="w-[50%] h-full absolute top-0 left-1 sm:left-9 lg:left-11 z-10 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-11">
              <p className="text-wrap text-md sm:text-lg lg:text-xl  xl:text-2xl">
                Get flat&nbsp;
                <span className="text-xl md:text-2xl xl:text-3xl font-bold">
                  10%
                </span>
                &nbsp; Cashback
              </p>
              <p className="text-xl sm:text-3xl md:text-4xl md:leading-[40px] lg:leading-[56px] uppercase ">
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
            <div className="w-[50%] h-full absolute top-0 left-1 sm:left-9 lg:left-11 z-10 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-11">
              <p className="text-wrap text-md sm:text-lg lg:text-xl  xl:text-2xl">
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
            <div className="w-[50%] h-full absolute top-0 left-1 sm:left-9 lg:left-11 z-10 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-11">
              <p className="text-wrap text-md sm:text-lg lg:text-xl  xl:text-2xl">
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
            <div className="w-[50%] h-full absolute top-0 left-1 sm:left-9 lg:left-11 z-10 flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-11">
              <p className="text-wrap text-md sm:text-lg lg:text-xl  xl:text-2xl">
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

      {/* Best Deals */}
      <div>
        <p className="text-2xl md:text-3xl font-medium text-center my-5">
          Best Deals
        </p>

        {/* Product Carousel */}
        <div
          className="w-full bg-gray-300 overflow-hidden p-3 sm:p-5"
          id="productCarouselBox"
        >
          <div
            id="productCarousel"
            className="h-32 md:h-36 lg:h-40 flex flex-nowrap gap-x-5"
          >
            {product.map((p, inx) => {
              return (
                <div
                  className=" bg-white min-w-72 sm:min-w-80 p-2 flex gap-x-4 rounded-md"
                  key={`productCard-${inx}`}
                >
                  <div className="w-1/3 h-full">
                    <img
                      src={p.image[0]}
                      alt={`Product-${inx}`}
                      className="w-full h-full object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-md sm:text-lg font-semibold whitespace-wrap">
                      {`${p.title.substring(0, 17)}...`}
                    </p>
                    <p className="text-base sm:text-md">{p.brand}</p>
                    <p className="text-md sm:text-lg font-semibold">
                      &#8377;{parseFloat(p.price).toFixed(2)}
                    </p>
                    <button className="w-32 p-0 sm:p-1 md:p-2 rounded bg-[#292560] text-white font-semibold hover:bg-[#FDB03D]">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
            {product.map((p, inx) => {
              return (
                <div
                  className="max-h-[180px] bg-white min-w-[350px] p-2 flex gap-x-4 rounded-md"
                  key={`productCard-${inx}`}
                >
                  <div className="w-1/3">
                    <img
                      src={p.image[0]}
                      alt={`Product-${inx}`}
                      className="w-full h-full object-center"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-lg font-semibold mb-1 whitespace-wrap">
                      {`${p.title.substring(0, 20)}`}
                    </p>
                    <p className="text-md mb-1">{p.brand}</p>
                    <p className="text-lg font-semibold mb-2">
                      &#8377;{parseFloat(p.price).toFixed(2)}
                    </p>
                    <button className="max-w-32 p-2 rounded bg-[#292560] text-white font-semibold hover:bg-[#FDB03D]">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center py-10">
        Our Products
      </p>

      <div className="max-w-full flex gap-4">
        {/* Filters */}
        <div className="hidden md:block md:w-1/3 lg:w-1/4">
          <div
            className="w-full h-auto shadow shadow-gray-500 rounded"
            style={{
              border: "1px solid rgba(180, 180, 180)",
            }}
          >
            {/* Title */}
            <div className="p-5">
              <p className="text-2xl font-semibold text-[rgba(0,0,0,0.8)]">
                Filters
              </p>
            </div>
            <hr
              style={{
                border: "1px solid rgba(180, 180, 180)",
              }}
            />

            {/* Select Category */}
            <div className="p-5">
              <p className="text-lg font-semibold text-[rgba(0,0,0,0.8)] mb-3">
                Categories
              </p>
              <select
                name="category"
                className="w-full p-2 bg-[#F3F4F6] font-semibold text-[rgba(0,0,0,0.8)] rounded"
              >
                <option value="select">Select Category</option>
                <option value="select">Category</option>
                <option value="select">Category</option>
                <option value="select">Category</option>
                <option value="select">Category</option>
              </select>
            </div>
            <hr
              style={{
                border: "1px solid rgba(180, 180, 180)",
              }}
            />

            {/* Price Range */}
            <div className="p-5">
              <p className="text-lg font-semibold text-[rgba(0,0,0,0.8)] mb-3">
                Price Range
              </p>
              <p className="font-semibold text-[rgba(0,0,0,0.8)]">
                &#8377; {rangeVal[0]} - &#8377; {rangeVal[1]}
              </p>

              {/* Range Slider */}
              <div className="py-9">
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName=""
                  trackClassName={`trackClass`}
                  defaultValue={[11.111, 77.778]}
                  ariaLabelledby={["first-slider-label", "second-slider-label"]}
                  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  renderThumb={(props, state) => {
                    const { key, ...restProps } = props;
                    const prop = { ...restProps };
                    return (
                      <div
                        key={`reactSlider${key}`}
                        {...prop}
                        className="outline-none"
                      >
                        <p
                          className="absolute w-5 h-5 flex justify-center items-center 
                    rounded-full bg-blue-500 text-white"
                          style={{ top: "-8px", left: "-8px" }}
                        ></p>
                      </div>
                    );
                  }}
                  pearling
                  minDistance={15}
                  withTracks={true}
                  step={0.45}
                  // value={[0, 4500]}
                  onChange={(state) => {
                    let minVal = Math.round(state[0] * 45);
                    let maxVal = Math.round(state[1] * 45);
                    setRangeVal([minVal, maxVal]);
                  }}
                />
              </div>
            </div>
            <hr
              style={{
                border: "1px solid rgba(180, 180, 180)",
              }}
            />

            {/* Discount */}
            <div className="p-5">
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title className="p-3">Discount</Accordion.Title>
                  <Accordion.Content>
                    <ul>
                      <li className="flex items-center">
                        <input type="radio" className="me-2" />
                        50% or more
                      </li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
            <hr
              style={{
                border: "1px solid rgba(180, 180, 180)",
              }}
            />

            {/* Electronics */}
            <div className="p-5">
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title className="p-3">Electronics</Accordion.Title>
                  <Accordion.Content>
                    <ul>
                      <li className="flex items-center">
                        <input type="checkbox" className="me-2" />
                        Accesorries
                      </li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
            <hr
              style={{
                border: "1px solid rgba(180, 180, 180)",
              }}
            />

            {/* Sizes */}
            <div className="p-5">
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title className="p-3">Size</Accordion.Title>
                  <Accordion.Content>
                    <ul>
                      <li className="flex items-center">
                        <input type="radio" className="me-2" />
                        X-Large
                      </li>
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
            <hr
              style={{
                border: "1px solid rgba(180, 180, 180)",
              }}
            />

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
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          {/* Grid */}
          <div className="w-full h-auto grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-4">
            {currentItems.map((p, inx) => {
              return (
                <div
                  className="p-5 rounded shadow shadow-gray-500"
                  key={`ProductGrid-${inx}`}
                  style={{
                    border: "1px solid rgba(180, 180, 180)",
                  }}
                >
                  <img
                    src={p.image[0]}
                    alt={`ProductGrid-${inx}`}
                    className="min-h-60 max-h-60 w-auto mx-auto"
                  />
                  <div className="w-full h-32 flex flex-col justify-between">
                    <p className="w-full font-semibold">
                      {`${p.title.substring(
                        0,
                        window.screen.width > 1024 ? 50 : 35
                      )}...`}
                    </p>
                    <p className="text-blue-500 font-semibold">${p.price}</p>
                    <div>
                      <button
                        className="w-32 p-2 rounded bg-[#292560] text-white font-semibold
                     hover:bg-[#FDB03D]"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* React Pagination */}
          <div className="flex overflow-x-auto sm:justify-center my-7">
            <Pagination
              currentPage={currentPage}
              totalPages={product.length / itemsPerPage}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
