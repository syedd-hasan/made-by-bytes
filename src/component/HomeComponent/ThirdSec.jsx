import React from "react";
import portImg1 from "../assets/images/port-img1.png";
import portImg2 from "../assets/images/port-img2.png";
import portImg3 from "../assets/images/port-img3.png";

export const ThirdSec = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className=" col-span-2 items-center">
            <h2 className="text-2xl font-bold  text-gray-900 xl:text-[65px] md:text-[50px] uppercase leading-normal">
              Crafting solutions, one Byte at a time, to power your{" "}
              <span className="rounded-md bg-indigo-600 px-3.5 rotate-2 font-semibold text-white shadow-sm">
                digital future
              </span>
            </h2>
            <p className="mt-4 ">
              We are a premier web and mobile development agency, powered by a
              team of expert developers, creative designers, and technology
              innovators. We are committed to delivering exceptional digital
              solutions that meet the evolving needs of a tech-driven world.
              Whether crafting dynamic websites, building intuitive mobile
              applications, or providing IT staff augmentation, we help
              businesses thrive by turning their ideas into impactful digital
              realities.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-hidden">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 items-end justify-center">
          <div className="w-full">
            <img
              src={portImg1}
              className="object-contain w-full h-auto"
              alt="Description 1"
            />
          </div>
          <div className="w-full">
            <img
              src={portImg2}
              className="object-contain w-full h-auto"
              alt="Description 2"
            />
          </div>
          <div className="w-full h-full">
            <img
              src={portImg3}
              className="object-cover w-full h-auto md:h-full"
              alt="Description 3"
            />
          </div>
        </div>
      </div>
    </>
  );
};
