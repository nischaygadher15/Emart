("use client");
import React, { useEffect } from "react";
import { NavLink } from "react-router";
import { Dropdown } from "flowbite-react";
import { FaAngleDown } from "react-icons/fa";

const NavbarLower = () => {
  let ddStyle = ({ isActive }) => ({
    color: isActive ? "#FDB03D" : "black",
  });
  return (
    <div
      className="sticky top-0 z-30 w-screen hidden md:flex flex-col justify-center items-center 
      shadow-md shadow-gray-200"
      style={{ backgroundColor: "#292560" }}
    >
      <div className="px-4 sm:px-7 w-full sm:min-w-[640px] md:min-w-[798px] lg:min-w-[1024px] h-20 flex justify-between items-center">
        {/* Choose Category */}
        <div className="h-full flex items-center">
          <select
            id="countries"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
               block w-full p-2.5"
            defaultValue={"default"}
          >
            <option value="default">Choose a Category</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        {/* Navbar Links */}
        <nav className="h-full flex items-center">
          <ul className="relative flex items-center md:gap-3 lg:gap-5 text-white font-semibold">
            <li>
              <NavLink
                to="/"
                style={ddStyle}
                className="hover:text-yellow-400 outline-none"
              >
                HOME
              </NavLink>
            </li>

            {/* Electronics */}
            <li>
              <Dropdown
                label=""
                dismissOnClick={true}
                renderTrigger={() => (
                  <button className="flex items-center gap-2 outline-none hover:text-yellow-400">
                    ELECTRONICS <FaAngleDown />
                  </button>
                )}
                className="mt-2"
              >
                <div className="grid grid-cols-2 grid-rows-9 gap-x-3 py-2">
                  <Dropdown.Item>All Mobile Phones </Dropdown.Item>
                  <Dropdown.Item>All Mobile Accessories </Dropdown.Item>
                  <Dropdown.Item>Cases & Covers </Dropdown.Item>
                  <Dropdown.Item>Screen Protectors </Dropdown.Item>
                  <Dropdown.Item>Power Banks </Dropdown.Item>
                  <Dropdown.Item>All Certified Refurbished </Dropdown.Item>
                  <Dropdown.Item>Tablets</Dropdown.Item>
                  <Dropdown.Item>Wearable Devices</Dropdown.Item>
                  <Dropdown.Item>Smart Home </Dropdown.Item>
                  <Dropdown.Item>Musical Instruments</Dropdown.Item>
                  <Dropdown.Item>Gaming Consoles </Dropdown.Item>
                  <Dropdown.Item>All Electronics </Dropdown.Item>
                  <Dropdown.Item>Air Conditioners</Dropdown.Item>
                  <Dropdown.Item>Refrigerators </Dropdown.Item>
                  <Dropdown.Item>Washing Machines </Dropdown.Item>
                  <Dropdown.Item>Kitchen & Home Appliances </Dropdown.Item>
                  <Dropdown.Item>Heating& Cooling Appliances </Dropdown.Item>
                  <Dropdown.Item>All Appliances</Dropdown.Item>
                </div>
              </Dropdown>
            </li>

            {/* Appliance */}
            <li>
              <Dropdown
                label=""
                dismissOnClick={true}
                renderTrigger={() => (
                  <button className="flex items-center gap-2 outline-none hover:text-yellow-400">
                    APPLIANCE <FaAngleDown />
                  </button>
                )}
                className="py-0 mt-2"
              >
                <div className="grid grid-cols-2 grid-rows-9 gap-x-3 py-2">
                  <Dropdown.Item>All Mobile Phones </Dropdown.Item>
                  <Dropdown.Item>All Mobile Accessories </Dropdown.Item>
                  <Dropdown.Item>Cases & Covers </Dropdown.Item>
                  <Dropdown.Item>Screen Protectors </Dropdown.Item>
                  <Dropdown.Item>Power Banks </Dropdown.Item>
                  <Dropdown.Item>All Certified Refurbished </Dropdown.Item>
                  <Dropdown.Item>Tablets</Dropdown.Item>
                  <Dropdown.Item>Wearable Devices</Dropdown.Item>
                  <Dropdown.Item>Smart Home </Dropdown.Item>
                  <Dropdown.Item>Musical Instruments</Dropdown.Item>
                  <Dropdown.Item>Gaming Consoles </Dropdown.Item>
                  <Dropdown.Item>All Electronics </Dropdown.Item>
                  <Dropdown.Item>Air Conditioners</Dropdown.Item>
                  <Dropdown.Item>Refrigerators </Dropdown.Item>
                  <Dropdown.Item>Washing Machines </Dropdown.Item>
                  <Dropdown.Item>Kitchen & Home Appliances </Dropdown.Item>
                  <Dropdown.Item>Heating& Cooling Appliances </Dropdown.Item>
                  <Dropdown.Item>All Appliances</Dropdown.Item>
                </div>
              </Dropdown>
            </li>

            <li>
              <NavLink to="/" className="hover:text-yellow-400 outline-none">
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-yellow-400 outline-none">
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarLower;
