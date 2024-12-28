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
          <button
            className="hover:text-yellow-400 p-2 md:hidden text-3xl"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-placement="right"
            aria-controls="drawer-right-example"
          >
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

      {/* <!-- drawer component --> */}
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen w-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white "
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        {/* Drawer Title */}
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <div className="text-3xl tracking-wide">
            <span
              style={{ color: "#FDB03D" }}
              className="text-4xl font-semibold"
            >
              E
            </span>
            lectronic&nbsp;
            <span
              style={{ color: "#FDB03D" }}
              className="text-4xl font-semibold"
            >
              M
            </span>
            art
          </div>
        </h5>
        {/* Close Buutton */}
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
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
      </div>
    </div>
  );
};

export default NavbarUpper;
