import React from "react";
import banner from "../assets/checkout.jpg";
import {
  RiArrowLeftWideFill,
  RiArrowRightSLine,
  RiArrowRightWideFill,
} from "react-icons/ri";
import product from "../Data/ProductsList";
import { Carousel } from "flowbite-react";

const Product = () => {
  return (
    <div className="relative px-4 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]">
      {/* <========================== Product Page Banner ==========================> */}
      <div
        className="w-full h-80 flex flex-col justify-center p-11"
        style={{
          background: `url(${banner}) no-repeat center`,
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="mb-4 text-3xl font-semibold text-white">Product Page</h2>
        <p className="flex items-center text-md font-semibold text-white">
          <a href="/">HOME</a>&nbsp;
          <RiArrowRightSLine className="text-xl" />
          &nbsp;
          <a href="/product">PRODUCT</a>
        </p>
      </div>

      {/* <========================== Product Detail ==========================> */}
      <div className="flex my-12">
        {/* Product Image Tiles */}
        <div className="flex flex-col gap-3">
          {product[0].image.map((i) => {
            return (
              <div
                className="p-1 rounded-md"
                style={{
                  border: "1px solid gray",
                }}
              >
                <img src={i} alt="..." className="w-10 object-contain" />
              </div>
            );
          })}
        </div>

        <div className="w-full flex gap-5">
          {/* Product Images */}
          <div className="w-2/5 h-[70vh]">
            <img
              src={product[0].image[0]}
              alt="..."
              className="w-full h-full object-contain"
            />
            <p className="mt-3 text-gray-500 text-center">
              Roll over image to zoom in
            </p>
          </div>

          {/* Product Features */}
          <div className="w-3/5">
            <p className="">Product Full Name</p>
            <p>Price:</p>

            <hr />

            <p>$360.00 Free delivery</p>

            <p>Cash on Delivery Eligible.</p>

            <p>Shipping Speed to Delivery.</p>

            <p>EMIs from $100/month.</p>

            <p>Bank Offer Extra 5% off* with Axis Bank Buzz Credit Card</p>

            <hr />

            <p>Discription:</p>
            <p>This is description of product</p>

            <hr />

            <button>ADD TO CART</button>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
