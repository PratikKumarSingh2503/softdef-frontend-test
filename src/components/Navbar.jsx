import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-xl">
      <nav className="mx-auto flex items-center justify-between px-4 py-5 md:px-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-[48px] w-[48px]" />
          <div className="hidden text-[28px] font-black sm:block">
            FloraVision.
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex items-center">
          <div className="hidden items-center gap-10 text-[24px] font-regular font-indie lg:flex">
            <a className="hover:text-white" href="#home">
              Home
            </a>
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 hover:text-white"
              >
                Plants Type{" "}
                <span className="hover:underline">
                  <MdArrowDropDown />
                </span>
              </button>

              {/* Dropdown Menu */}
              {open && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-20">
                  <ul className="py-2 text-[16px] text-gray-700">
                    <li>
                      <a
                        className="block px-4 py-2  hover:bg-gray-100"
                        href="ferns"
                      >
                        Ferns
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100"
                        href="indoor+plants"
                      >
                        Indoor Plants
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100"
                        href="bonsai"
                      >
                        Bonsai
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-4 py-2 hover:bg-gray-100"
                        href="succulents"
                      >
                        Succulents
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <a className="hover:text-white" href="#plants">
              More
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-10 text-[24px] font-[400]">
          <div className="flex items-center gap-4 lg:gap-10">
            <a className="hover:text-white" href="#search">
              <CiSearch />
            </a>
            <a className="hover:text-white" href="#cart">
              <FiShoppingBag />
            </a>
            <a className="hover:text-white" href="#menu">
              <BiMenuAltRight />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;