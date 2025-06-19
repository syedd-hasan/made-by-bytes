import { useState } from "react";
import logo from "../assets/logo/logo.png";
import logoText from "../assets/logo/made_by_bytes.png";
import {
  FaChartPie,
  FaUserFriends,
  FaShieldAlt,
  FaPlug,
  FaArrowRight,
  FaPhoneAlt,
  FaPlayCircle,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex container items-center justify-between py-6 px-4 md:px-4"
      >
        <div className="flex lg:flex-1">
          <a className="-m-1.5 p-1.5 flex items-center gap-2 corsur">
            <span className="sr-only">Made By Bytes</span>
            <img alt="Made By Bytes Logo" src={logo} className="h-8 w-auto" />
            <img alt="Made By Bytes" src={logoText} className="h-6 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-14  lg:items-center">
          <div className="hidden lg:flex lg:gap-x-6">
            {/* <a className="text-md font-semibold leading-6 text-gray-900 cursor-pointer group ">
              <span className="inline-block rotate-[3.86deg] bg-lilt-sec-header px-2.5 rounded-md shadow-sm h-full  hover:text-white">
                <span className="inline-block rotate-[-3.86deg] font-semibold my-auto px-2 py-1">
                  Home
                </span>
              </span>
            </a> */}

            <a className="text-md font-semibold leading-6 text-gray-900 cursor-pointer">
              <span className="inline-block rotate-[3.86deg] bg-lilt-sec-header px-2.5 rounded-md shadow-sm h-full  hover:text-white">
                <span className="inline-block rotate-[-3.86deg] font-semibold my-auto px-2 py-1">
                  About
                </span>
              </span>
            </a>
            <a className="text-md font-semibold leading-6 text-gray-900 cursor-pointer">
              <span className="inline-block rotate-[3.86deg] bg-lilt-sec-header px-2.5 rounded-md shadow-sm h-full  hover:text-white">
                <span className="inline-block rotate-[-3.86deg] font-semibold my-auto px-2 py-1">
                  Service
                </span>
              </span>
            </a>
            <a className="text-md font-semibold leading-6 text-gray-900 cursor-pointer">
              <span className="inline-block rotate-[3.86deg] bg-lilt-sec-header px-2.5 rounded-md shadow-sm h-full  hover:text-white">
                <span className="inline-block rotate-[-3.86deg] font-semibold my-auto px-2 py-1">
                  Blog
                </span>
              </span>
            </a>
            <a className="text-md font-semibold leading-6 text-gray-900 cursor-pointer">
              <span className="inline-block rotate-[3.86deg] bg-lilt-sec-header px-2.5 rounded-md shadow-sm h-full  hover:text-white">
                <span className="inline-block rotate-[-3.86deg] font-semibold my-auto px-2 py-1">
                  Project
                </span>
              </span>
            </a>
            <a className="text-md font-semibold leading-6 text-gray-900 cursor-pointer">
              <span className="inline-block rotate-[3.86deg] bg-lilt-sec-header px-2.5 rounded-md shadow-sm h-full  hover:text-white">
                <span className="inline-block rotate-[-3.86deg] font-semibold my-auto px-2 py-1">
                  Contact
                </span>
              </span>
            </a>
          </div>
          <a className="text-md font-semibold leading-6 text-white flex w-max items-center gap-2 py-1 px-3 bg-[#1d37ec] rounded-full ">
            Contact Us
            <span aria-hidden="true" className="bg-white p-1 rounded-full">
              <MdNavigateNext className="text-[#1d37ec] text-md " />
            </span>
          </a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-white">
          <div className="flex items-center justify-between px-4 py-6">
            <a className="-m-1.5 p-1.5 flex items-center gap-2 corsur">
              <span className="sr-only">Made By Bytes</span>
              <img alt="Made By Bytes Logo" src={logo} className="h-8 w-auto" />
              <img alt="Made By Bytes" src={logoText} className="h-6 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FaTimes className="h-6 w-6" />
            </button>
          </div>
          <div className="py-6 px-4">
            <div className="space-y-2">
              <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Home
              </a>
              <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                About
              </a>
              <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Service
              </a>
              <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Blog
              </a>
              <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Project
              </a>
              <a className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Contact
              </a>
            </div>
            <div className="py-6">
              <a className="text-md font-semibold leading-6 text-white flex w-max items-center gap-2 py-1 px-3 bg-[#1d37ec] rounded-full ">
                Contact Us
                <span aria-hidden="true" className="bg-white p-1 rounded-full">
                  <MdNavigateNext className="text-[#1d37ec] text-md " />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
