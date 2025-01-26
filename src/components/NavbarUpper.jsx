"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline, IoCloseSharp, IoLocationSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { Accordion, Button, Drawer, Dropdown, Select } from "flowbite-react";
import { IoMdClose } from "react-icons/io";

const NavbarUpper = ({ myRef }) => {
  // Variables
  let [isSearching, setIsSearching] = useState(false);
  const [barMenu, setBarMenu] = useState(false);

  // Hamburgger Drawer Fun
  const handleMenuClose = () => {
    console.log(myRef);
    myRef.current.style.overflowY = "scroll";
    setBarMenu(false);
  };

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
      className="fixed top-0 left-0 z-30 w-screen flex flex-col justify-center items-center bg-white 
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
            className="hover:text-yellow-400 py-2 md:hidden text-3xl"
            onClick={() => {
              myRef.current.style.overflowY = "hidden";
              setBarMenu(true);
            }}
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
                className="text-2xl sm:text-3xl py-2 sm:p-2 hover:text-yellow-400"
                onClick={() => {}}
              >
                <NavLink to="/cart">
                  <FaShoppingCart />
                </NavLink>
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
              <span className="text-3xl font-semibold text-[#FDB03D]">E</span>
              lectronic&nbsp;
              <span className="text-3xl font-semibold text-[#FDB03D]">M</span>
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
            {/* Navbar Links */}
            <nav className="pt-5">
              <ul className="flex flex-col justify-between items-center gap-2 font-semibold">
                <li className="w-full flex justify-start p-2">
                  {/* Choose Category */}
                  <Select id="countries" className="w-[80%]">
                    <option value="default">Choose a Category</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </Select>
                </li>

                <li className="w-full py-2">
                  <NavLink
                    to="/"
                    className="w-full hover:text-yellow-400 outline-none p-2.5"
                  >
                    HOME
                  </NavLink>
                </li>

                {/* Electronics */}
                <li className="w-full py-2">
                  <Accordion
                    className="w-full border-0 border-transparent"
                    collapseAll
                  >
                    <Accordion.Panel>
                      <Accordion.Title className="text-black p-2.5 uppercase font-semibold">
                        Electronics
                      </Accordion.Title>
                      <Accordion.Content className="p-3">
                        <div className="grid grid-cols-2 grid-rows-9 gap-x-3 gap-y-2 py-2">
                          <NavLink as={Link} to="#">
                            All Mobile Phones
                          </NavLink>
                          <NavLink as={Link} to="#">
                            All Mobile Accessories
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Cases & Covers
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Screen Protectors
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Power Banks
                          </NavLink>
                          <NavLink as={Link} to="#">
                            All Certified Refurbished
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Tablets
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Wearable Devices
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Smart Home
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Musical Instruments
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Gaming Consoles
                          </NavLink>
                          <NavLink as={Link} to="#">
                            All Electronics
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Air Conditioners
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Refrigerators
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Washing Machines
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Kitchen & Home Appliances
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Heating& Cooling Appliances
                          </NavLink>
                          <NavLink as={Link} to="#">
                            All Appliances
                          </NavLink>
                        </div>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </li>

                {/* Appliance */}
                <li className="w-full py-2">
                  <Accordion
                    className="w-full border-0 border-transparent"
                    collapseAll
                  >
                    <Accordion.Panel>
                      <Accordion.Title className="text-black p-2.5 uppercase font-semibold">
                        Appliance
                      </Accordion.Title>
                      <Accordion.Content className="p-3">
                        <div className="grid grid-cols-2 grid-rows-9 gap-x-3 py-2">
                          <NavLink as={Link} to="#">
                            All Mobile Phones
                          </NavLink>
                          <NavLink as={Link} to="#">
                            All Mobile Accessories
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Cases & Covers
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Screen Protectors
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Power Banks
                          </NavLink>
                          <NavLink as={Link} to="#">
                            All Certified Refurbished
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Tablets
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Wearable Devices
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Smart Home
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Musical Instruments
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Gaming Consoles
                          </NavLink>
                          <NavLink as={Link} to="#">
                            All Electronics
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Air Conditioners
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Refrigerators
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Washing Machines
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Kitchen & Home Appliances
                          </NavLink>
                          <NavLink as={Link} to="#">
                            Heating& Cooling Appliances
                          </NavLink>
                          <NavLink as={Link} to="#">
                            All Appliances
                          </NavLink>
                        </div>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </li>

                <li className="w-full py-2">
                  <a
                    href="/"
                    className="w-full hover:text-yellow-400 outline-none p-2.5"
                  >
                    ABOUT US
                  </a>
                </li>
                <li className="w-full py-2">
                  <NavLink
                    to="/"
                    className="w-full hover:text-yellow-400 outline-none p-2.5"
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </nav>
          </Drawer.Items>
        </Drawer>
      </div>
    </div>
  );
};

export default NavbarUpper;
