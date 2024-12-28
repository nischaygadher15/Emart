import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline, IoCloseSharp, IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import { Button, Drawer } from "flowbite-react";

const NavbarUpper = () => {
  // Variables
  let [isSearching, setIsSearching] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Nav Link Style
  let ddStyle = ({ isActive }) => ({
    color: isActive ? "#FDB03D" : "black",
  });

  // Hamburgger Drawer Fun
  const handleClose = () => setIsOpen(false);

  // Nav Search Fun
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
            onClick={() => setIsOpen(true)}
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

      {/* Hamburgger Drawer */}
      <div>
        <Drawer
          open={isOpen}
          className="w-screen h-screen"
          onClose={handleClose}
        >
          <div className="flex justify-between">
            <p className="text-2xl tracking-wide mb-1 sm:mb-2">
              <span
                style={{ color: "#FDB03D" }}
                className="text-3xl font-semibold"
              >
                E
              </span>
              lectronic&nbsp;
              <span
                style={{ color: "#FDB03D" }}
                className="text-3xl font-semibold"
              >
                M
              </span>
              art
            </p>
            <button
              onClick={handleClose}
              className="text-2xl text-gray-500 hover:text-black hover:bg-slate-300 p-2 hover:rounded-md"
            >
              <IoCloseOutline />
            </button>
          </div>

          <Drawer.Items>
            <p className="mb-6 text-sm text-gray-500">Drawer Menu</p>
          </Drawer.Items>
        </Drawer>
      </div>
    </div>
  );
};

export default NavbarUpper;
