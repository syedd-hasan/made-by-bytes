import React from "react";
import { MdRocketLaunch } from "react-icons/md";

export const SixSec = () => {
  return (
    <>
      <div className="container mx-auto my-[60px]">
        <div className="grid grid-cols-2">
          <div>
            <h6 className="text-[#5964fe]">Why choose Madebybytes</h6>
            <h2 className="text-2xl font-bold  text-black xl:text-[65px] md:text-[50px] uppercase leading-normal">
              Discover the mode by bytes difference
            </h2>
          </div>
        </div>
        <div className="mx-auto mt-16  sm:mt-20 lg:mt-24 ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <MdRocketLaunch
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                Expert Team
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our seasoned team of IT professionals brings a wealth of
                expertise to the table, With diverse skills and a passion for
                innovation.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <MdRocketLaunch
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                Proven Track Record
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our seasoned team of IT professionals brings a wealth of
                expertise to the table, With diverse skills and a passion for
                innovation.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <MdRocketLaunch
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                Tailored Solutions
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our seasoned team of IT professionals brings a wealth of
                expertise to the table, With diverse skills and a passion for
                innovation.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <MdRocketLaunch
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                Continuous Support
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our seasoned team of IT professionals brings a wealth of
                expertise to the table, With diverse skills and a passion for
                innovation.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <MdRocketLaunch
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                Expertise & Experience
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our seasoned team of IT professionals brings a wealth of
                expertise to the table, With diverse skills and a passion for
                innovation.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <MdRocketLaunch
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                Comprehensive Services
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our seasoned team of IT professionals brings a wealth of
                expertise to the table, With diverse skills and a passion for
                innovation.
              </dd>
            </div>
          </dl>
        </div>
        <div className="my-10">
          <h6 className="text-[#5964fe] text-center">Talk to our experts</h6>
          <h2 className="text-2xl font-bold  text-black xl:text-[65px] md:text-[50px] uppercase leading-normal text-center">
            contact us for custom <br />
            web and mobile app development
          </h2>
        </div>
      </div>
    </>
  );
};
