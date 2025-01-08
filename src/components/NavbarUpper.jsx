"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline, IoCloseSharp, IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import { Button, Drawer } from "flowbite-react";
import { IoMdClose } from "react-icons/io";

const NavbarUpper = () => {
  // Variables
  let [isSearching, setIsSearching] = useState(false);
  const [barMenu, setBarMenu] = useState(true);

  const [cartDrawer, setCartDrawer] = useState(false);
  const handleCartClose = () => setCartDrawer(false);

  // Hamburgger Drawer Fun
  const handleMenuClose = () => setBarMenu(false);

  // Nav Search Fun
  let handleSearch = () => {
    let searchText = document.getElementById("searchText");
    let navIcons = document.getElementById("navIcons");
    let myLogo = document.getElementById("myLogo");
    let navIconsBox = document.getElementById("navIconsBox");
    let humbergerBar = document.getElementById("humbergerBar");

    if (window.screen.width < 1024) {
      if (!isSearching) {
        navIcons.style.display = "none";
        myLogo.classList.add("hidden");
        humbergerBar.classList.add("hidden");
        navIconsBox.classList.add("w-full");
        navIconsBox.classList.remove("w-3/5");
        searchText.classList.remove("hidden");
      } else {
        navIcons.removeAttribute("style");
        myLogo.classList.remove("hidden");
        humbergerBar.classList.remove("hidden");
        navIconsBox.classList.remove("w-full");
        navIconsBox.classList.add("w-3/5");
        searchText.classList.add("hidden");
      }
      setIsSearching(!isSearching);
    } else if (window.screen.width < 640) {
      //Code where to search when screen > 1024
    }
  };

  // Track Screen size
  let [screenWidth, setScrernWidth] = useState(0);

  let hadleScrrenSize = () => {
    setScrernWidth(window.screen.width);
  };

  useEffect(() => {
    window.addEventListener("resize", hadleScrrenSize);
    setScrernWidth(window.screen.width);

    return () => window.removeEventListener("resize", hadleScrrenSize);
  }, []);

  return (
    <div
      className="fixed top-0 z-30 w-screen flex flex-col justify-center items-center bg-white 
    shadow shadow-gray-400"
      style={{
        borderTop: "1px solid gray",
      }}
    >
      <div
        className="px-4 sm:px-7 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px]
       h-14 flex justify-between items-center sm:gap-7 md:gap-5"
      >
        {/* Logo  */}
        <div className="flex items-center gap-3 text-3xl">
          <button
            className="hover:text-yellow-400 p-2 md:hidden text-3xl"
            onClick={() => setBarMenu(true)}
            id="humbergerBar"
          >
            <GiHamburgerMenu />
          </button>
          {screenWidth > 640 ? (
            <>
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
            </>
          ) : (
            <>
              <p
                className="flex items-center tracking-wide mb-1 sm:mb-2"
                id="myLogo"
              >
                <span
                  style={{ color: "#FDB03D" }}
                  className="sm:text-4xl font-semibold"
                >
                  E
                </span>
                -
                <span
                  style={{ color: "#FDB03D" }}
                  className="sm:text-4xl font-semibold"
                >
                  M
                </span>
                art
              </p>
            </>
          )}
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
              className="hidden lg:block w-full border-gray-300 rounded-s-md me-1 sm:me-2 lg:me-0"
              placeholder="Search for products, brands or more..."
            />

            <button
              className={`text-black rounded-full lg:rounded-s-none lg:rounded-e-md 
              p-2.5 lg:py-2 lg:px-4 text-xl
               bg-[#FFC516]`}
              onClick={handleSearch}
              id="searchBtn"
            >
              {isSearching ? <IoMdClose /> : <FaMagnifyingGlass />}
            </button>
          </li>

          {/* Icons */}
          <li>
            <ul
              className="flex sm:justify-evenly items-center gap-0 sm:gap-3"
              id="navIcons"
            >
              <li className="hidden sm:block text-2xl sm:text-3xl p-2 hover:text-yellow-400">
                <IoLocationSharp />
              </li>
              {/* <li className="hidden sm:block text-2xl sm:text-3xl p-2 hover:text-yellow-400">
                <FaMoon />
              </li> */}
              <li className="text-2xl sm:text-3xl p-2 hover:text-yellow-400">
                <FaUser />
              </li>
              <li
                className="text-2xl sm:text-3xl p-2 hover:text-yellow-400"
                onClick={() => setCartDrawer(true)}
              >
                <FaShoppingCart />
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Hamburgger Drawer */}
      <div>
        <Drawer
          open={barMenu}
          className="w-screen h-screen"
          onClose={handleMenuClose}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center">
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
              onClick={handleMenuClose}
              className="text-3xl text-gray-500 hover:text-black hover:bg-slate-300 p-1 hover:rounded-md"
            >
              <IoCloseOutline />
            </button>
          </div>

          <Drawer.Items>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Drawer.Items>
        </Drawer>
      </div>

      {/* Cart Drawer */}
      <>
        <Drawer open={cartDrawer} position="right">
          <div
            className=" absolute top-3 right-3 p-2"
            onClick={handleCartClose}
          >
            <IoMdClose className="text-2xl" />
          </div>
        </Drawer>
      </>
    </div>
  );
};

export default NavbarUpper;
