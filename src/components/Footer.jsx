import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

const Footer = () => (
  <footer className="my-10 px-4 py-10 text-white md:px-6 lg:px-10">
    <div className="flex flex-col gap-10 items-start justify-between lg:flex-row ">
      <div className="">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-[94px] w-[94px]" />
          <div className="hidden text-header !text-[45px] !font-black sm:block">
            FloraVision.
          </div>
        </div>
        <p className="mt-5 text-description !text-[28px] !font-medium !text-white">
          "From lush indoor greens to vibrant
          <br /> outdoor blooms, our plants are crafted to
          <br /> thrive and elevate your living environment."
        </p>
      </div>

      <div className="">
        <p className="text-header !text-[28px] !font-extrabold">
          Quick Link&apos;s
        </p>
        <nav className="mt-10 flex flex-col gap-6 text-description !font-medium underline decoration-solid">
          <a className="" href="#home">
            Home
          </a>
          <a className="" href="#plants">
            Type&apos;s Of plant&apos;s
          </a>
          <a className="" href="#contact">
            Contact
          </a>
          <a className="" href="#privacy">
            Privacy
          </a>
        </nav>
      </div>

      <div className="mt-10">
        <p className="text-header !text-[28px] !font-extrabold">
          For Every Update.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 border-2 border-white rounded-[8px] p-1">
          <input
            type="email"
            placeholder="Enter Email"
            className="bg-transparent pl-2 text-[24px] text-white placeholder:text-white/75 focus:outline-none"
          />

          <button className="px-6 py-2 bg-white text-black font-bold text-[22px] rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="flex flex-col mx-auto mt-15 text-center items-center justify-between lg:flex">
      <div className="flex items-center gap-4 text-[28px] font-extrabold">
        <span>FB</span>
        <span>TW</span>
        <span>LI</span>
      </div>
      <div className="text-[24px] font-medium">
        FloraVision © all right reserve
      </div>
    </div>
  </footer>
);

export default Footer;
