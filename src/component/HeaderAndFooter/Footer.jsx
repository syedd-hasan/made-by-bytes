import React from "react";
import logo from "../assets/logo/made-by-bytes-logo.png";
import logoText from "../assets/logo/made_by_bytes.png";
import { IoIosArrowForward } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="bg-black py-[60px]">
      <div className="container mx-auto px-4">
        <div className="mb-3">
          {/* <img src={logo} alt="made by bytes logo" /> */}
          {/* <a className="-m-1.5 p-1.5 flex items-end gap-2 corsur"> */}
          <img alt="Made By Bytes Logo" src={logo} className="w-auto" />
          {/* <img alt="Made By Bytes" src={logoText} className=" w-auto" /> */}
          {/* <span className="sr-only">Made By Bytes</span> */}
          {/* </a> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mt-3">
            <p className="text-[#b5b5b5]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              fugiat officia voluptates provident eius, tenetur expedita eum, a,
              corporis architecto consequatur blanditiis! Eius reprehenderit
              consectetur praesentium et, ipsa expedita soluta?
            </p>
          </div>

          <div className="flex flex-col md:items-center">
            <div>
              <h4 className="text-white text-[20px]">Quick Link</h4>
              <ul className="text-[#b5b5b5] mt-4 space-y-1">
                <li>Home</li>
                <li>About Us</li>
                <li>Features</li>
                <li>Plans & Pricing</li>
                <li>Portfolio</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:items-center">
            <>
              <h4 className="text-white text-[20px]">Company</h4>
              <ul className="text-[#b5b5b5] mt-4 space-y-1">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Career Tips</li>
                <li>Career</li>
              </ul>
            </>
          </div>

          <div className="">
            <h4 className="text-white text-[20px]">
              Subscribe to our newsletter
            </h4>
            <form className="mt-5">
              <div className="flex md:items-center border rounded-[60px] border-[#1d37ec]">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto  border-0 rounded-[60px] bg-black px-3.5 py-2 text-white shadow-none focus:ring-0 focus:border-indigo-500 sm:text-sm sm:leading-6"
                />
                <button className="text-md font-semibold leading-6 text-white flex items-center gap-3 py-2 px-3 bg-[#1d37ec] rounded-full">
                  Subscribe
                  <span
                    aria-hidden="true"
                    className="bg-white p-1 rounded-full"
                  >
                    <IoIosArrowForward className="text-[#1d37ec] text-md" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
