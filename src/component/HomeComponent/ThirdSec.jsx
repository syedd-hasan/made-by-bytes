import React from "react";
import portImg1 from "../assets/images/port-img1.png";
import portImg2 from "../assets/images/port-img2.png";
import portImg3 from "../assets/images/120791.jpg";
import BgLogo from "../assets/images/bg-logo.png";

export const ThirdSec = () => {
  return (
    <div className="relative overflow-visible px-4">
      <div
        className="container mx-auto mt-[60px] "
        style={{
          background: `url(${BgLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "auto 80%", // width = auto, height = 100%
        }}
      >
        <div className="grid md:grid-cols-3 mb-4 gap-4 ">
          <div className=" col-span-2 items-center">
            <h2 className="text-2xl font-bold  text-gray-900 min-[1541px]:text-[65px]  max-[1540px]:text-[50px] uppercase leading-normal">
              Crafting solutions, one Byte at a time, to power your{" "}
              <span className="inline-block rotate-[-1.86deg] bg-lilt-sec px-2.5 rounded-xl  md:rounded-3xl shadow-sm font-bold ">
                <span className="inline-block rotate-[1.86deg] text-white font-semibold font-bold ">
                  digital future
                </span>
              </span>{" "}
            </h2>
            <p className="my-8 text-lg">
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
          <div className="hidden md:block"></div>
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
          <div className="md:relative overflow-visible">
            <img
              src={portImg3}
              alt="Description 3"
              className="md:absolute bottom-0 left-1/2 md:transform md:-translate-x-1/2 object-cover md:z-20 rounded-tl-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
