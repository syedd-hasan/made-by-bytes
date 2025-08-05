import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user2.png";
import Byd from "../assets/images/Byd.svg";
import Carrefour from "../assets/images/Carrefour.svg";
import Mondelez from "../assets/images/Mondelez.svg";
// import NewEagle from "../assets/images/New-Eagle.svg";
// import Pepsi from "../assets/images/Pepsico.svg";
import Xiaomi from "../assets/images/Xiaomi.svg";
import Suzuki from "../assets/images/Suzuki.svg";
import Zong from "../assets/images/Zong.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import BgLogo from "../assets/images/bg-logo.png";

export const Main = ({ scrollToSection }) => {
  const handleScroll = () => {
    if (scrollToSection.current) {
      scrollToSection.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className="container mx-auto relative isolate pt-14 "
        style={{
          backgroundImage: `url(${BgLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "auto 80%",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-5 -z-10 transform-gpu overflow-hidden blur-3xl "
        >
          {/* <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          /> */}
        </div>
        <div className=" mx-auto relative ">
          {/* <div className="absolute hidden md:block right-[5%] top-[25%] md:w-[200px] rotate-animation">
            <img src={bgImg} alt="img" />
          </div> */}

          {/* <div className="text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold  text-gray-900 xl:text-[90px] md:text-[70px] uppercase leading-normal">
              Crafting solutions, <br /> one{" "}
              <span className="rounded-md bg-indigo-600 px-3.5 rotate-2 font-semibold text-white shadow-sm">
                byte
              </span>{" "}
              at a time.
            </h1>
            <p className="mt-4 w-[60%] text-center">
              Leverage our expertise and the skills of our top-tier developers
              to drive your business forward with custom web development, mobile
              applications, and resource augmentation services. Let us help you
              unlock the full potential of your digital transformation.
            </p>
          </div>
          <div className="md:mt-[70px] mt-6 flex flex-wrap items-center justify-center gap-x-6 w-full md:w-[70%]">
            <div className="md:w-[40%]">
              <div className="flex gap-3">
                <div className="flex -space-x-1 overflow-hidden">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                </div>
                <h6 className="text-black"> 90k + reviews</h6>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our UX design services focus on creating intuitive and user
                friendly interface that optimize customer satisfaction.
              </p>
            </div>
            <button
              onClick={handleScroll}
              className="text-md font-semibold leading-6 text-white flex w-max items-center gap-3 py-1 px-3 bg-[#1d37ec] rounded-full"
            >
              Scroll Down
              <span aria-hidden="true" className="bg-white p-1 rounded-full">
                <IoIosArrowDown className="text-[#1d37ec] text-md" />
              </span>
            </button>
          </div> */}

          <div className="text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold text-gray-900 2xl:text-[85px] md:text-[70px] text-[50px] leading-normal uppercase">
              Crafting Smart Digital Solutions <br /> one{" "}
              <span className="inline-block rotate-[3.86deg] bg-lilt-sec px-2.5 rounded-3xl shadow-sm">
                <span className="inline-block rotate-[-3.86deg] text-white font-semibold">
                  byte
                </span>
              </span>{" "}
              at a time.
            </h1>
            <p className="mt-4 w-full md:w-[60%] text-center px-4  text-gray-600 md:text-2xl">
              Let our experienced team help you grow with custom websites,
              mobile apps, and dedicated tech resources. We combine skill and
              strategy to support your digital transformation giving your
              business the tools it needs to succeed online.
            </p>
          </div>

          <div className="md:mt-[70px] mt-6 flex flex-col md:flex-row items-center justify-center gap-6 w-full md:w-[70%] px-4">
            <div className="md:w-[40%]">
              {/* <div className="flex gap-3 items-center">
                <div className="flex -space-x-2 overflow-hidden">
                  <img
                    alt=""
                    src={user2}
                    className="inline-block size-8 rounded-full ring-2 ring-white bg-white"
                  />
                  <img
                    alt=""
                    src={user1}
                    className="inline-block size-8 rounded-full ring-2 ring-white bg-white"
                  />
                  <img
                    alt=""
                    src={user2}
                    className="inline-block size-8 rounded-full ring-2 ring-white bg-white"
                  />
                  <img
                    alt=""
                    src={user1}
                    className="inline-block size-8 rounded-full ring-2 ring-white bg-white"
                  />
                </div>
                <h6 className="text-black">90k + reviews</h6>
              </div> */}
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our UX design services focus on creating intuitive and
                user-friendly interfaces that optimize customer satisfaction.
              </p>
            </div>

            <button
              onClick={handleScroll}
              className="mt-4 md:mt-0 text-md font-semibold leading-6 text-white flex w-max items-center gap-3 py-2 px-3 bg-[#1d37ec] rounded-full"
            >
              Scroll Down
              <span aria-hidden="true" className="bg-white p-1 rounded-full">
                <IoIosArrowDown className="text-[#1d37ec] text-md" />
              </span>
            </button>
          </div>

          <div className=" py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center size-fit mx-auto text-2xl font-bold leading-8 text-gray-900 capitalize">
                The who's who of happy clients
              </h2>
              <div className="mx-auto mt-10 ">
                <Swiper
                  // data-aos="fade-left"
                  slidesPerView={3}
                  spaceBetween={10}
                  // navigation={true}
                  // modules={[Navigation]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop={true}
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 50,
                    },
                  }}
                  // modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      alt="Byd"
                      src={Byd}
                      width={158}
                      height={48}
                      className=" w-full object-contain lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Carrefour"
                      src={Carrefour}
                      width={158}
                      height={48}
                      className=" w-full object-contain lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Suzuki"
                      src={Suzuki}
                      width={158}
                      height={48}
                      className=" w-full object-contain lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Mondelez"
                      src={Mondelez}
                      width={158}
                      height={48}
                      className=" w-full object-contain sm:col-start-2 lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Xiaomi"
                      src={Xiaomi}
                      width={158}
                      height={48}
                      className="col-start-2  w-full object-contain sm:col-start-auto lg:col-span-1 gray-color  md:mt-2 mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Zong"
                      src={Zong}
                      width={158}
                      height={48}
                      className="col-start-2  w-full object-contain sm:col-start-auto lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Byd"
                      src={Byd}
                      width={158}
                      height={48}
                      className=" w-full object-contain lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Carrefour"
                      src={Carrefour}
                      width={158}
                      height={48}
                      className=" w-full object-contain lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Suzuki"
                      src={Suzuki}
                      width={158}
                      height={48}
                      className=" w-full object-contain lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Mondelez"
                      src={Mondelez}
                      width={158}
                      height={48}
                      className=" w-full object-contain sm:col-start-2 lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Xiaomi"
                      src={Xiaomi}
                      width={158}
                      height={48}
                      className="col-start-2  w-full object-contain sm:col-start-auto lg:col-span-1 gray-color md:mt-2 mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Zong"
                      src={Zong}
                      width={158}
                      height={48}
                      className="col-start-2  w-full object-contain sm:col-start-auto lg:col-span-1 gray-color mx-2 md:mx-0"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  );
};
