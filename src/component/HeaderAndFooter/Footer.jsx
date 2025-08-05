import React from "react";
import logo from "../assets/logo/made-by-bytes-logo.png";
import logoText from "../assets/logo/made_by_bytes.png";
import { IoIosArrowForward, IoLogoYoutube } from "react-icons/io";
import { FaBehanceSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

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
            <div>
              <h4 className="text-white text-[20px]">Get in touch</h4>
              <ul className="text-[#b5b5b5] mt-4 space-y-1">
                <li>12-C/II, Lane 6, Bukhari Comm - DHA - Karachi, 7550</li>
                {/* <li>About Us</li> */}
              </ul>
              <div className="flex items-center gap-2 mt-3">
                <a href="https://www.facebook.com/uixify" target="_blank">
                  <FaFacebookSquare className="text-white hover:text-[#1d37ec] transition duration-200 hover:scale-125 text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/uixify.design"
                  target="_blank"
                >
                  <FaSquareInstagram className="text-white hover:text-[#1d37ec] transition duration-200 hover:scale-125 text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/uixify"
                  target="_blank"
                >
                  <FaLinkedin className="text-white hover:text-[#1d37ec] transition duration-200 hover:scale-125 text-2xl" />
                </a>
                <a href="https://www.behance.net/UIXIFY" target="_blank">
                  <FaBehanceSquare className="text-white hover:text-[#1d37ec] transition duration-200 hover:scale-125 text-2xl" />
                </a>
                {/* <a href="https://www.upwork.com/agencies/1822787120111267840/">
                    <FaSquareUpwork className="text-white hover:text-[#1d37ec] transition duration-200 hover:scale-125 text-2xl" />
                  </a> */}
                <a
                  href="https://www.youtube.com/@UIXIFY.DESIGN"
                  target="_blank"
                >
                  <IoLogoYoutube className="text-white hover:text-[#1d37ec] transition duration-200 hover:scale-125 text-3xl" />
                </a>
              </div>
            </div>
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
