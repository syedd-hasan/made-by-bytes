import React, { useState } from "react";
import icon from "../assets/images/feedback-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./fourthSec.css";

export const FourthSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="container mx-auto md:my-[60px]">
        <div className="grid grid-cols-2">
          <h2 className="text-2xl font-bold  text-gray-900 xl:text-[65px] md:text-[50px] uppercase leading-normal">
            What our clients say{" "}
            <span className="rounded-md bg-indigo-600 px-3.5 rotate-2 font-semibold text-white shadow-sm">
              about us
            </span>
          </h2>
        </div>
      </div>
      <div className="mb-[60px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-fit p-2">
                <div
                  className={`border py-10 px-6 w-fit md:h-[350px] h-[300px] flex flex-col justify-between text-left ${
                    activeIndex === index
                      ? "border-[#1d37ec]"
                      : "border-[#d1d1d1]"
                  }`}
                >
                  <p className="capitalize text-black text-[20px]">
                    "Fine lines designed my house and they did an amazing
                  </p>
                  <div className="flex gap-3">
                    <img
                      className="h-10 w-10 rounded-full user-img"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <h4 className="font-semibold text-[15px]">Tclarson</h4>
                      <h6 className="text-[#808080] text-[15px]">
                        CEO Alphabet
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={icon}
                    className="absolute top-[0%] left-[10%] bg-white mx-2 icon-swiper-top"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
