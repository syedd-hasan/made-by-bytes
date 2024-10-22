import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";

export const SixSec = () => {
  return (
    <div className="container mx-auto my-[60px] px-4">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <h6 className="text-[#5964fe]">Why choose Madebybytes</h6>
          <h2 className="text-2xl font-bold text-black xl:text-[65px] md:text-[50px] uppercase leading-normal">
            Discover the made by bytes difference
          </h2>
        </div>
      </div>

      <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {[
            {
              title: "Expert Team",
              description:
                "Our seasoned team of IT professionals brings a wealth of expertise to the table, with diverse skills and a passion for innovation.",
            },
            {
              title: "Proven Track Record",
              description:
                "Our seasoned team of IT professionals brings a wealth of expertise to the table, with diverse skills and a passion for innovation.",
            },
            {
              title: "Tailored Solutions",
              description:
                "Our seasoned team of IT professionals brings a wealth of expertise to the table, with diverse skills and a passion for innovation.",
            },
            {
              title: "Continuous Support",
              description:
                "Our seasoned team of IT professionals brings a wealth of expertise to the table, with diverse skills and a passion for innovation.",
            },
            {
              title: "Expertise & Experience",
              description:
                "Our seasoned team of IT professionals brings a wealth of expertise to the table, with diverse skills and a passion for innovation.",
            },
            {
              title: "Comprehensive Services",
              description:
                "Our seasoned team of IT professionals brings a wealth of expertise to the table, with diverse skills and a passion for innovation.",
            },
          ].map(({ title, description }) => (
            <div className="relative pl-16" key={title}>
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <MdRocketLaunch
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                {title}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="my-10 flex flex-col items-center">
        <h6 className="text-[#5964fe] text-center">Talk to our experts</h6>
        <h2 className="text-2xl font-bold text-black xl:text-[65px] md:text-[50px] uppercase leading-normal text-center">
          contact us for custom <br />
          web and mobile app development
        </h2>
        <button
          // onClick={handleScroll}
          className="mt-4 md:mt-6 text-md font-semibold leading-6 text-white flex w-max items-center gap-3 py-1 px-3 bg-[#1d37ec] rounded-full"
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
