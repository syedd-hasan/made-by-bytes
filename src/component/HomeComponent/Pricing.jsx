import React from "react";
import "./fourthSec.css";
import { FaCheck } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

export const Pricing = () => {
  return (
    <div className="bg-black md:py-[60px] py-[30px]">
      <div className="container mx-auto  px-4 ">
        <div className="grid md:grid-cols-1">
          <h2 className="text-center text-2xl font-bold  text-[white]  min-[1541px]:text-[65px]  max-[1540px]:text-[50px] uppercase leading-normal">
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
            <h3 className="text-2xl font-semibold">
              Custom Mobile App Development
            </h3>
            <p className="text-6xl font-bold">$500</p>
            <p className="text-xl text-gray-600 group-hover:text-white">
              Custom mobile apps for iOS, Android, and cross-platform solutions.
              (For Custom Mobile App)
            </p>
            <button
              className="w-full bg-[#1d37ec] text-white text-lg py-4 rounded-md 
                       transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              Select This Plan
            </button>
            <ul className="flex flex-col gap-2 text-xl">
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> iOS & Android App Development
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Cross-Platform (React Native / Flutter)
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Custom Features Based on Business Needs
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> API Integration (Payments, Maps, etc.)
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Push Notifications & Real-Time Updates
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> App Store & Play Store Deployment
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Post-Launch Maintenance & Support
              </li>
            </ul>
          </div>

          {/* Website Hosting */}
          <div
            className="bg-white md:py-10 p-6 flex flex-col gap-6 rounded-xl shadow-md 
                  transform transition-all duration-300 group hover:scale-105  hover:bg-[#1d37ec] hover:text-white"
          >
            <h3 className="text-2xl font-semibold">
              Custom CMS / Web App Development
            </h3>
            <p className="text-6xl font-bold">$400</p>
            <p className="text-xl text-gray-600 group-hover:text-white">
              Powerful, scalable web apps & CMS tailored for your business
              needs. (For CMS)
            </p>
            <button
              className="w-full bg-[#1d37ec] text-white text-lg py-4 rounded-md 
                       transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              Select This Plan
            </button>
            <ul className="flex flex-col gap-2 text-xl">
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Scalable & Secure CMS Development
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Custom Dashboard & Admin Panel
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Role-Based Access Control
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Database Integration & Management
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                API & Third-Party Service Integration
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Cloud Hosting & Deployment Support
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Continuous Maintenance & Upgrades
              </li>
            </ul>
          </div>

          {/* Customized Software */}
          <div
            className="bg-white md:py-10 p-6 flex flex-col gap-6 rounded-xl shadow-md 
                  transform transition-all duration-300 group hover:scale-105 hover:bg-[#1d37ec] hover:text-white"
          >
            <h3 className="text-2xl font-semibold">UI/UX Design Services</h3>
            <p className="text-6xl font-bold">$300</p>
            <p className="text-xl text-gray-600 group-hover:text-white">
              Best for startups & businesses looking for modern, user-friendly
              designs. (For UI/UX)
            </p>
            <button
              className="w-full bg-[#1d37ec] text-white text-lg py-4 rounded-md 
                       transition-colors duration-300 group-hover:bg-white group-hover:text-black"
            >
              Select This Plan
            </button>
            <ul className="flex flex-col gap-2 text-xl">
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> User Research & Wireframing
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Interactive Prototyping
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Modern, Responsive Web & Mobile UI Design
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Design Systems & Style Guides
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark /> Conversion-Focused Landing Pages
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Usability Testing & Iteration
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark />
                Collaboration via Figma/Adobe XD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
