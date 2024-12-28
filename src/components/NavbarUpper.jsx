import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router";

const NavbarUpper = () => {
  // Search Button Show/hide on Hover
  let [isSearching, setIsSearching] = useState(false);
  let ddStyle = ({ isActive }) => ({
    color: isActive ? "#FDB03D" : "black",
  });

  let handleSearch = () => {
    let searchText = document.getElementById("searchText");
    let navIcons = document.getElementById("navIcons");
    let myLogo = document.getElementById("myLogo");
    let navIconsBox = document.getElementById("navIconsBox");

    if (window.screen.width < 1024) {
      if (!isSearching) {
        navIcons.style.display = "none";
        myLogo.classList.add("hidden");
        navIconsBox.classList.add("w-full");
        navIconsBox.classList.remove("w-3/5");
        searchText.classList.remove("hidden");
      } else {
        navIcons.removeAttribute("style");
        myLogo.classList.remove("hidden");
        navIconsBox.classList.remove("w-full");
        navIconsBox.classList.add("w-3/5");
        searchText.classList.add("hidden");
      }
      setIsSearching(!isSearching);
    } else if (window.screen.width < 640) {
      //Code where to search when screen > 1024
    }
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center bg-white shadow-md shadow-gray-200">
      <div className="px-4 container h-20 flex justify-between items-center sm:gap-7 md:gap-5">
        {/* Logo  */}
        <div className="flex items-center gap-3 text-3xl">
          <button className="hover:text-yellow-400 p-2 md:hidden text-3xl">
            <GiHamburgerMenu />
          </button>
          <p className="tracking-wide mb-1 sm:mb-2" id="myLogo">
            <span
              style={{ color: "#FDB03D" }}
              className="sm:text-4xl font-semibold"
            >
              E
            </span>
            lectronic&nbsp;
            <span
              style={{ color: "#FDB03D" }}
              className="sm:text-4xl font-semibold"
            >
              M
            </span>
            art
          </p>
        </div>

        {/* Nav-Icons */}
        <ul
          className="w-3/5 flex justify-end items-center gap-1 sm:gap-3 font-semibold"
          id="navIconsBox"
        >
          {/* Search Button */}
          <li className="w-full flex justify-end lg:justify-center">
            <input
              type="text"
              id="searchText"
              className={`hidden lg:block w-full border-gray-300 rounded-s-md me-2 lg:me-0`}
              placeholder="Search for products, brands or more..."
            />

            <button
              className="text-black rounded-full lg:rounded-s-none lg:rounded-e-md p-3 md:p-4 lg:py-4 lg:px-5 text-xl"
              style={{ backgroundColor: "#FFC516" }}
              onClick={handleSearch}
              id="searchBtn"
            >
              {isSearching ? <IoCloseSharp /> : <FaMagnifyingGlass />}
            </button>
          </li>

          {/* Icons */}
          <li>
            <ul
              className="hidden sm:flex sm:justify-evenly items-center gap-3"
              id="navIcons"
            >
              <li className="text-3xl p-2 hover:text-yellow-400">
                <IoLocationSharp />
              </li>
              <li className="text-3xl p-2 hover:text-yellow-400">
                <FaMoon />
              </li>
              <li className="text-3xl p-2 hover:text-yellow-400">
                <FaUser />
              </li>
              <li className="text-3xl p-2 hover:text-yellow-400">
                <FaShoppingCart />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* <!-- drawer init and toggle --> */}
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-left-example"
          data-drawer-show="drawer-left-example"
          data-drawer-placement="left"
          aria-controls="drawer-left-example"
        >
          Show left drawer
        </button>
      </div>

      {/* <!-- drawer component --> */}
      <div
        id="drawer-left-example"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-left-label"
      >
        <h5
          id="drawer-left-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Left drawer
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-left-example"
          aria-controls="drawer-left-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          Supercharge your hiring by taking advantage of our{" "}
          <a
            href="#"
            className="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline"
          >
            limited-time sale
          </a>{" "}
          for Flowbite Docs + Job Board. Unlimited access to over 190K
          top-ranked candidates and the #1 design job board.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Learn more
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get access{" "}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarUpper;
