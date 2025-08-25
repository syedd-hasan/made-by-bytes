// import React from "react";
// import webImg from "../assets/images/web-faq-img.png";
// import { IoIosArrowRoundForward } from "react-icons/io";

// export const FifthSec = () => {
//   return (
//     <>
//       <div className="bg-black">
//         <div className="container mx-auto md:py-[60px] ">
//           <div className="grid md:grid-cols-2 py-[30px] border-b border-[#808080]">
//             <div className="">
//               <h2 className="text-2xl font-bold  text-white xl:text-[65px] md:text-[50px] uppercase leading-normal">
//                 We deliver{" "}
//                 <span className="rounded-md bg-indigo-600 px-3.5 rotate-2 font-semibold text-white shadow-sm">
//                   tailored
//                 </span>{" "}
//                 digital solutioins
//               </h2>
//               <p className="text-white text-[20px]">
//                 Our team combines deep industry knowledge with technical
//                 excellence to bring your digital projects to life.
//               </p>
//             </div>
//           </div>
//           <div className="mt-[40px]">
//             <div className="faq-sec-main-div flex justify-between items-center py-[30px] border-b border-[#808080]">
//               <div className="w-[60%]">
//                 <h5 className="text-[40px] font-bold text-white uppercase">
//                   Custom Web Development
//                 </h5>
//                 <p className="text-[#808080]">
//                   We build secure, scalable, and user-friendly websites that
//                   enhance engagement and drive results. Our solutions are
//                   designed to grow with your business and deliver long-term
//                   value.
//                 </p>
//               </div>
//               <div className="flex gap-6 items-center">
//                 <div className="">
//                   <img
//                     src={webImg}
//                     className="object-contain h-[50%] transition-opacity duration-300"
//                   />
//                 </div>
//                 <IoIosArrowRoundForward className="text-[#808080] text-[100px] rotate-[-34deg]" />
//               </div>
//             </div>

//             <div className="flex justify-between items-center faq-sec-main-div py-[30px] border-b border-[#808080]">
//               <div className="w-[60%]">
//                 <h5 className="text-[40px] font-bold text-white uppercase">
//                   Mobile app Development
//                 </h5>
//                 <p className="text-[#808080]">
//                   We craft intuitive and high-performing mobile apps that
//                   deliver seamless user experiences, ensuring customer
//                   satisfaction and increased engagement across all platforms.
//                 </p>
//               </div>
//               <div className="flex gap-6 items-center">
//                 <div className="">
//                   <img src={webImg} className="hidden object-contain h-[50%]" />
//                 </div>
//                 <IoIosArrowRoundForward className="text-[#808080] text-[100px] rotate-[-34deg]" />
//               </div>
//             </div>
//             <div className="flex justify-between items-center faq-sec-main-div py-[30px] border-b border-[#808080]">
//               <div className="w-[60%]">
//                 <h5 className="text-[40px] font-bold text-white uppercase">
//                   Custom wordpress Development
//                 </h5>
//                 <p className="text-[#808080]">
//                   From concept to launch, we develop fast, reliable, and
//                   optimized WordPress websites that help your business stand out
//                   and achieve its digital goals.
//                 </p>
//               </div>
//               <div className="flex gap-6 items-center">
//                 <div className="">
//                   <img src={webImg} className="hidden object-contain h-[50%]" />
//                 </div>
//                 <IoIosArrowRoundForward className="text-[#808080] text-[100px] rotate-[-34deg]" />
//               </div>
//             </div>
//             <div className="flex justify-between items-center faq-sec-main-div py-[30px] border-b border-[#808080]">
//               <div className="w-[60%]">
//                 <h5 className="text-[40px] font-bold text-white uppercase">
//                   It staff augmentation
//                 </h5>
//                 <p className="text-[#808080]">
//                   Expand your team with our skilled IT professionals. We provide
//                   the talent and expertise you need to meet deadlines and scale
//                   your business efficiently
//                 </p>
//               </div>
//               <div className="flex gap-6 items-center">
//                 <div className="">
//                   <img src={webImg} className="hidden object-contain h-[50%]" />
//                 </div>
//                 <IoIosArrowRoundForward className="text-[#808080] text-[100px] rotate-[-34deg]" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import React from "react";
import webImg from "../assets/images/web-faq-img.png";
import { IoIosArrowRoundForward } from "react-icons/io";

export const FifthSec = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto md:py-[60px] px-4">
        <div className="grid md:grid-cols-3 py-[30px] border-b border-[#808080]">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold text-white  min-[1541px]:text-[65px]  max-[1540px]:text-[50px] uppercase leading-normal">
              We deliver{" "}
              <span className="inline-block rotate-[-2.86deg] bg-lilt-sec px-2.5 rounded-xl  md:rounded-3xl  shadow-sm">
                <span className="inline-block rotate-[2.86deg] text-white font-semibold ">
                  tailored
                </span>
              </span>{" "}
              digital solutions
            </h2>
            <p className="text-white text-[20px]">
              Our team combines deep industry knowledge with technical
              excellence to bring your digital projects to life.
            </p>
          </div>
        </div>

        <div className="">
          {[
            {
              title: "Mobile App Development",
              description:
                "From design to deployment, we develop smooth mobile apps using React Native, Flutter, and powerful backend stacks like Firebase and Supabase ensuring a seamless experience across platforms.",
            },
            {
              title: "Custom WordPress Development",
              description:
                "We deliver fully customized, fast, and easy-to-manage WordPress websites perfect for businesses that want flexibility and control, without any tech hassle.",
            },
            {
              title: "IT Staff Augmentation",
              description:
                "Need tech talent fast? Our experienced developers, designers, and QA engineers can integrate with your team remotely to meet deadlines, fill skill gaps, and boost productivity.",
            },
            {
              title: "Custom Web Development",
              description:
                "We build secure and scalable websites with engaging user experiences using tools like Next.js, Astro, and Tailwind optimized for performance, growth, and long-term success.",
            },
          ].map(({ title, description }, index) => (
            <div
              key={index}
              className="faq-sec-main-div relative flex justify-between items-center py-[30px] border-b border-white text-white  hover:text-white transition-colors duration-300"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
            >
              <div className="relative z-10 w-full md:w-[60%] ml-6">
                <h5 className="text-[30px] md:text-[40px] font-bold uppercase">
                  {title}
                </h5>
                <p className="">{description}</p>
              </div>
              <div className="relative z-10 flex gap-6 items-center">
                <IoIosArrowRoundForward className="text-[70px] md:text-[100px] rotate-[-34deg]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
