import React, { useEffect } from "react";
import { NavLink } from "react-router";

const NavbarLower = () => {
  let ddStyle = ({ isActive }) => ({
    color: isActive ? "#FDB03D" : "black",
  });
  return (
    <div
      className="w-screen hidden md:flex flex-col justify-center items-center shadow-md shadow-gray-200"
      style={{ backgroundColor: "#292560" }}
    >
      <div className="px-4 container h-20 flex justify-between items-center">
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
              <NavLink to="/" style={ddStyle} className="hover:text-yellow-400">
                HOME
              </NavLink>
            </li>

            {/* Electronics */}
            <li>
              <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                data-dropdown-delay={200}
                className="text-white  focus:outline-none rounded-lg 
                py-2.5 text-center inline-flex items-center"
                type="button"
              >
                ELECTRONICS
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownHover"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow 
                w-44"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Appliance */}
            <li>
              <button
                id="dropdownHoverButton2"
                data-dropdown-toggle="dropdownHover2"
                data-dropdown-trigger="hover"
                data-dropdown-delay={200}
                className="text-white  focus:outline-none rounded-lg 
                py-2.5 text-center inline-flex items-center"
                type="button"
              >
                APPLIANCE
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdownHover2"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownHoverButton2"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 
                       "
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100  ">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <NavLink to="/" className="hover:text-yellow-400">
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-yellow-400">
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
