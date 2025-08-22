import React from "react";
import "./fourthSec.css";
import { FaCheck } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

export const Pricing = () => {
  return (
    <div className="bg-black md:py-[60px] py-[30px]">
      <div className="container mx-auto  px-4 ">
        <div className="grid md:grid-cols-1">
          <h2 className="text-center text-2xl font-bold  text-[white] xl:text-[65px] md:text-[50px] uppercase leading-normal">
            Explore flexible{" "}
            <span className="inline-block rotate-[1.86deg] bg-lilt-sec px-2.5 rounded-xl  md:rounded-3xl  shadow-sm">
              <span className="inline-block rotate-[-1.86deg] text-white font-semibold ">
                pricing
              </span>
            </span>{" "}
            for you
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mx-auto mt-8 md:mt-12">
          {/* Website Designing */}
          <div
            className="bg-white md:py-10 p-6 flex flex-col gap-6 rounded-xl shadow-md 
                  transform transition-all duration-300 group hover:scale-105 hover:bg-[#1d37ec] hover:text-white"
          >
            <h3 className="text-2xl font-semibold">Website Designing</h3>
            <p className="text-6xl font-bold">$650</p>
            <p className="text-xl text-gray-600 group-hover:text-white">
              Best for Startup business owners who needs website for business.
            </p>
            <button
              className="w-full bg-[#1d37ec] text-white text-lg py-4 rounded-md 
                       transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              Select This Plan
            </button>
            <ul className="flex flex-col gap-2 text-xl">
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Responsive Design (Mobile, Tablet, Desktop)
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> SEO-Optimized Structure
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Admin Panel to Manage Content
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Contact Form Integration
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> SMM and Whatsapp Integration
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Technical Support
              </li>
            </ul>
          </div>

          {/* Website Hosting */}
          <div
            className="bg-white md:py-10 p-6 flex flex-col gap-6 rounded-xl shadow-md 
                  transform transition-all duration-300 group hover:scale-105  hover:bg-[#1d37ec] hover:text-white"
          >
            <h3 className="text-2xl font-semibold">Website Hosting</h3>
            <p className="text-6xl font-bold">$230</p>
            <p className="text-xl text-gray-600 group-hover:text-white">
              Fast, secure, and reliable web hosting for businesses of all
              sizes.
            </p>
            <button
              className="w-full bg-[#1d37ec] text-white text-lg py-4 rounded-md 
                       transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              Select This Plan
            </button>
            <ul className="flex flex-col gap-2 text-xl">
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> 10 GB SSD Storage
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Free SSL Certificate and Malware Scanner
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> 10 Business Email Address
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> cPanel Access
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Weekly Backups
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> 24/7 Support
              </li>
            </ul>
          </div>

          {/* Customized Software */}
          <div
            className="bg-white md:py-10 p-6 flex flex-col gap-6 rounded-xl shadow-md 
                  transform transition-all duration-300 group hover:scale-105 hover:bg-[#1d37ec] hover:text-white"
          >
            <h3 className="text-2xl font-semibold">Customized Software</h3>
            <p className="text-6xl font-bold">$000</p>
            <p className="text-xl text-gray-600 group-hover:text-white">
              Smart, efficient, and fully customize software solutions for any
              industry.
            </p>
            <button
              className="w-full bg-[#1d37ec] text-white text-lg py-4 rounded-md 
                       transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              Select This Plan
            </button>
            <ul className="flex flex-col gap-2 text-xl">
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> ERP - CRM - PMS - HMS
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Custom Web Application
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Customized Mobile Application
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Website Management and Server Support
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Chatbot - AI Development
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Social Media Marketing - SEO
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
