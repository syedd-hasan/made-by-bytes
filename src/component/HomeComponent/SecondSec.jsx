import React from "react";
import img1 from "../assets/images/custom-mobile-app.png";
import img2 from "../assets/images/custom-cms-web-app.png";
import img3 from "../assets/images/it-staff-augmentation.png";
import { FaArrowRight } from "react-icons/fa";

export const SecondSec = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto text-white py-8 md:py-[80px]">
        <div className="grid md:grid-cols-2 gap-4  w-fit border-b border-white pb-4 justify-end items-center">
          <h2 className="xl:text-[80px] md:text-[65px] text-[50px] md:text-end uppercase font-bold">
            Our Portfolio
          </h2>
          <p className="">
            From emerging startups to Fortune 500 companies, we’ve provided
            digital solutions that empower businesses to excel. As a
            top-performing development provider, Made by Bytes delivers
            comprehensive services tailored to your needs. we craft solutions
            that enhance user experiences, improve engagement, and drive
            business growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-3 mt-8">
          <div className="second-sec-card-main-div relative bg-[#1f1e1e] text-[#4d4ffe] hover:bg-[#1d37ec] hover:text-white p-5 flex flex-col h-full transition-all duration-300 rounded-md">
            <h4 className="text-[30px] mb-2 h-[100px] font-semibold">
              Custom Mobile App Development
            </h4>
            <p className="flex-grow text-[#8f8e8e] mb-4">
              Our team creates dynamic, user-focused mobile apps that offer
              seamless experiences, driving engagement and customer
              satisfaction.
            </p>
            <img
              src={img1}
              className="cover w-full h-45 object-cover"
              alt="Mobile App Development"
            />
            <FaArrowRight className="hidden absolute transition-all duration-300 bottom-[5%] bg-[#454bfe] text-white text-[80px] font-black rotate-[-30deg] p-3 rounded-full" />
          </div>

          <div className="second-sec-card-main-div relative bg-[#1f1e1e] text-[#4d4ffe] hover:bg-[#1d37ec] hover:text-white p-5 flex flex-col h-full transition-all duration-300 rounded-md">
            <h4 className="text-[30px] mb-2 h-[100px] font-semibold">
              Custom CMD/Web App Development
            </h4>
            <p className="flex-grow text-[#8f8e8e] mb-4">
              Our team creates dynamic, user-focused mobile apps that offer
              seamless experiences, driving engagement and customer
              satisfaction.
            </p>
            <img
              src={img1}
              className="cover w-full h-45 object-cover"
              alt="CMD/Web App Development"
            />
            <FaArrowRight className="hidden absolute transition-all duration-300 bottom-[5%] bg-[#454bfe] text-white text-[80px] font-black rotate-[-30deg] p-3 rounded-full" />
          </div>

          <div className="second-sec-card-main-div relative bg-[#1f1e1e] text-[#4d4ffe] hover:bg-[#1d37ec] hover:text-white p-5 flex flex-col h-full transition-all duration-300 rounded-md">
            <h4 className="text-[30px] mb-2 h-[100px] font-semibold">
              IT Segment
            </h4>
            <p className="flex-grow text-[#8f8e8e] mb-4">
              Our team creates dynamic, user-focused mobile apps that offer
              seamless experiences, driving engagement and customer
              satisfaction.
            </p>
            <img
              src={img3}
              className="cover w-full h-45 object-cover"
              alt="IT Segment"
            />
            <FaArrowRight className="hidden absolute transition-all duration-400 bottom-[5%] bg-[#454bfe] text-white text-[80px] font-black rotate-[-30deg] p-3 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
