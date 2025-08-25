import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import Icon from "../assets/images/icon.png";
import BgLogo from "../assets/images/bg-logo.png";

export const SixSec = () => {
  return (
    <div className="container mx-auto my-[60px] px-4">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <h6 className="text-[#5964fe]">Why choose Madebybytes</h6>
          <h2 className="text-2xl font-bold text-black min-[1541px]:text-[65px]  max-[1540px]:text-[50px] uppercase leading-normal">
            Discover the made by bytes difference
          </h2>
        </div>
      </div>

      <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
        <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {[
            {
              title: "Expert Team",
              description:
                "Our team is made up of skilled developers, designers, and engineers who bring hands on experience and fresh ideas to every project. We’re passionate about building smart and reliable digital products.",
            },
            {
              title: "Proven Track Record",
              description:
                "We’ve successfully delivered digital solutions for startups, SMEs, and Fortune 500 companies with results that speak for themselves. Our work drives real value for our clients.",
            },
            {
              title: "Tailored Solutions",
              description:
                "No cookie cutter templates here. Every solution we build is customized to match your unique goals, audience, and business needs ensuring better results and long-term success.",
            },
            {
              title: "Continuous Support",
              description:
                "We don’t just deliver and disappear. Our team stays with you to provide updates, improvements, and support as your product grows and evolves.",
            },
            {
              title: "Expertise & Experience",
              description:
                "With years of industry experience and a deep understanding of the latest technologies, we know what it takes to deliver solutions that work today and in the future.",
            },
            {
              title: "Comprehensive Services",
              description:
                "From web and mobile development to team augmentation, we offer a complete range of digital services under one roof so you don’t have to juggle multiple vendors.",
            },
          ].map(({ title, description }) => (
            <div className="relative pl-16 " key={title}>
              <h2 className="text-xl font-bold  text-gray-900 uppercase">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center">
                  <img
                    src={Icon}
                    aria-hidden="true"
                    className="h-auto w-[100%] text-white"
                  />
                </div>
                {title}
              </h2>
              <dd className="mt-2 text-base leading-7 text-[#808080]">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        className=" flex flex-col items-center md:pt-[150px] py-[50px]   md:pb-[100px]"
        style={{
          background: `url(${BgLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "auto 100%", // width = auto, height = 100%
        }}
      >
        <h6 className="text-[#5964fe] text-center md:mb-8">
          Talk to our experts
        </h6>
        <h2 className="text-2xl font-bold text-black  min-[1541px]:text-[65px]  max-[1540px]:text-[50px] uppercase leading-normal text-center">
          contact us for custom <br />
          web and mobile app development
        </h2>
        <button
          // onClick={handleScroll}
          className="mt-4 md:mt-14 text-md font-semibold leading-6 text-white flex w-max items-center gap-3 py-1 px-3 bg-[#1d37ec] rounded-full"
        >
          Contact us Now
          <span aria-hidden="true" className="bg-white p-1 rounded-full">
            <IoIosArrowDown className="text-[#1d37ec] text-md" />
          </span>
        </button>
      </div>
    </div>
  );
};
