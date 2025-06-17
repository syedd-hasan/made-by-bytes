import React from "react";
import img1 from "../assets/images/custom-mobile-app.png";
import img2 from "../assets/images/custom-cms-web-app.png";
import img3 from "../assets/images/it-staff-augmentation.png";
import { FaArrowRight } from "react-icons/fa";

export const SecondSec = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto text-white py-8 md:py-[80px] px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full border-b border-white pb-4 md:items-center">
          <h2 className="xl:text-[80px] md:text-[65px] text-[50px] md:text-start uppercase font-bold">
            Our Portfolio
          </h2>
          <p className="md:text-left text-center text-lg">
            From emerging startups to Fortune 500 companies, we’ve provided
            digital solutions that empower businesses to excel. As a
            top-performing development provider, Made by Bytes delivers
            comprehensive services tailored to your needs. We craft solutions
            that enhance user experiences, improve engagement, and drive
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 mt-8">
          <div className="second-sec-card-main-div relative bg-[#1f1e1e] text-[#4d4ffe] hover:bg-[#1d37ec] hover:text-white p-5 flex flex-col h-full transition-all duration-300 rounded-md">
            {/* <div className=""> */}
            <h3 className="text-[32px] border-b border-[#aaaa] pb-1 mb-1 h-[25%] font-bold">
              Custom Mobile App Development
            </h3>
            {/* </div> */}
            <p className="flex-grow text-[#8f8e8e] my-3 text-lg">
              Our team creates dynamic, user-focused mobile apps that offer
              seamless experiences, driving engagement and customer
              satisfaction.
            </p>
            <img
              src={img1}
              className="w-full h-[200px] object-cover"
              alt="Mobile App Development"
            />
            <FaArrowRight className="hidden absolute transition-all duration-300 bottom-[5%] bg-[#454bfe] text-white text-[80px] font-black rotate-[-30deg] p-3 rounded-full" />
          </div>

          <div className="second-sec-card-main-div relative bg-[#1f1e1e] text-[#4d4ffe] hover:bg-[#1d37ec] hover:text-white p-5 flex flex-col h-full transition-all duration-300 rounded-md">
            <h3 className="text-[32px] border-b border-[#aaaa] pb-1 mb-1 h-[25%] font-bold">
              Custom CMS/Web App Development
            </h3>
            <p className="flex-grow text-[#8f8e8e] my-3 text-lg">
              We build dynamic, user-focused web applications that offer
              seamless experiences, driving engagement and customer
              satisfaction.
            </p>
            <img
              src={img2}
              className="w-full h-[200px] object-cover"
              alt="CMS/Web App Development"
            />
            <FaArrowRight className="hidden absolute transition-all duration-300 bottom-[5%] bg-[#454bfe] text-white text-[80px] font-black rotate-[-30deg] p-3 rounded-full" />
          </div>

          <div className="second-sec-card-main-div relative bg-[#1f1e1e] text-[#4d4ffe] hover:bg-[#1d37ec] hover:text-white p-5 flex flex-col h-full transition-all duration-300 rounded-md">
            <h3 className="text-[32px] border-b border-[#aaaa] pb-1 mb-1 h-[25%] font-bold">
              IT Staff Augmentation
            </h3>
            <p className="flex-grow text-[#8f8e8e] my-3 text-lg">
              Expand your team with our skilled IT professionals to meet
              deadlines and scale your business efficiently.
            </p>
            <img
              src={img3}
              className="w-full h-[200px] object-cover"
              alt="IT Staff Augmentation"
            />
            <FaArrowRight className="hidden absolute transition-all duration-300 bottom-[5%] bg-[#454bfe] text-white text-[80px] font-black rotate-[-30deg] p-3 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
