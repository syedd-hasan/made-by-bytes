import React from "react";
import img1 from "../assets/images/10354235_4428861.jpg";
import img2 from "../assets/images/10276838_4380747.jpg";
import img3 from "../assets/images/18301797_5882087.jpg";
import { FaArrowRight } from "react-icons/fa";

export const SecondSec = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto text-white py-8 md:py-[80px] px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full border-b border-white pb-4 md:items-center">
          <h2 className=" min-[1541px]:text-[80px] max-[1540px]:text-[65px] text-[50px] md:text-start uppercase font-bold">
            Our Services
          </h2>
          <p className="md:text-left text-center text-[#878787] text-lg">
            From fast-growing startups to global brands, we’ve helped businesses
            turn ideas into powerful digital products. At Made by Bytes, we
            build custom solutions that improve user experience, boost
            engagement, and support real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 mt-8">
          <div className="second-sec-card-main-div relative bg-[#1f1e1e] text-[#4d4ffe] hover:bg-[#1d37ec] hover:text-white p-5 flex flex-col h-full transition-all duration-300 rounded-md">
            <div className="h-[100px] flex items-center w-full border-b border-[#aaaa]">
              <h3 className="text-[32px]  pb-1 font-bold leading-tight">
                Custom Mobile App Development
              </h3>
            </div>
            <p className="flex-grow text-[#8f8e8e] my-3 text-lg">
              We design and develop mobile apps that are fast, reliable, and
              easy to use. Whether it’s iOS, Android, or cross-platform our apps
              are built to keep users engaged and your business growing.
            </p>
            <img
              src={img1}
              className="w-full h-[200px] object-cover"
              alt="Mobile App Development"
            />
            <FaArrowRight className="hidden absolute transition-all duration-300 bottom-[5%] bg-[#454bfe] text-white text-[80px] font-black rotate-[-30deg] p-3 rounded-full" />
          </div>

          <div className="second-sec-card-main-div relative bg-[#1f1e1e] text-[#4d4ffe] hover:bg-[#1d37ec] hover:text-white p-5 flex flex-col h-full transition-all duration-300 rounded-md">
            <div className="h-[100px] flex items-center w-full border-b border-[#aaaa]">
              <h3 className="text-[32px]  pb-1 font-bold leading-tight">
                Custom CMS / Web App Development
              </h3>
            </div>
            <p className="flex-grow text-[#8f8e8e] my-3 text-lg">
              We create custom web applications and CMS platforms tailored to
              your business needs. Our solutions are user-friendly, scalable,
              and built to make managing your content or services simple and
              efficient.
            </p>
            <img
              src={img2}
              className="w-full h-[200px] object-cover"
              alt="CMS/Web App Development"
            />
            <FaArrowRight className="hidden absolute transition-all duration-300 bottom-[5%] bg-[#454bfe] text-white text-[80px] font-black rotate-[-30deg] p-3 rounded-full" />
          </div>

          <div className="second-sec-card-main-div relative bg-[#1f1e1e] text-[#4d4ffe] hover:bg-[#1d37ec] hover:text-white p-5 flex flex-col h-full transition-all duration-300 rounded-md">
            <div className="h-[100px] flex items-center w-full border-b border-[#aaaa]">
              <h3 className="text-[32px]  pb-1 font-bold leading-tight">
                UI/UX Design Services
              </h3>
            </div>
            <p className="flex-grow text-[#8f8e8e] my-3 text-lg">
              We design clean, user-focused digital experiences through user
              research, wireframing, visual design, and UX audits. From
              interactive prototypes to scalable design systems, our goal is to
              create intuitive, engaging interfaces that align with your brand
              and drive results.
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
