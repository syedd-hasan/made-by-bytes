import React from "react";
import logo from "../assets/logo/made-by-bytes-logo.png";
import { IoIosArrowForward } from "react-icons/io";

export const Footer = () => {
  return (
    <div className="bg-black py-[60px]">
      <div className="container mx-auto px-4">
        <div className="mb-3">
          <img src={logo} alt="made by bytes logo" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mt-3">
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              fugiat officia voluptates provident eius, tenetur expedita eum, a,
              corporis architecto consequatur blanditiis! Eius reprehenderit
              consectetur praesentium et, ipsa expedita soluta?
            </p>
          </div>

          <div className="flex flex-col md:items-center">
            <h4 className="text-white text-[20px]">Quick Link</h4>
            <ul className="text-white mt-4 space-y-1">
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Plans & Pricing</li>
              <li>Portfolio</li>
            </ul>
          </div>

          <div className="flex flex-col md:items-center">
            <h4 className="text-white text-[20px]">Company</h4>
            <ul className="text-white mt-4 space-y-1">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Career Tips</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="">
            <h4 className="text-white text-[20px]">
              Subscribe to our newsletter
            </h4>
            <form className="mt-5">
              <div className="flex md:items-center">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
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
