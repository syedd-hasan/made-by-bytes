import React, { useRef } from "react";
import { Main } from "../component/HomeComponent/Main";
import { SecondSec } from "../component/HomeComponent/SecondSec";
import { ThirdSec } from "../component/HomeComponent/ThirdSec";
import { Pricing } from "../component/HomeComponent/Pricing";
import { FifthSec } from "../component/HomeComponent/FifthSec";
import { SixSec } from "../component/HomeComponent/SixSec";

export const Home = () => {
  const secondSecRef = useRef(null);
  return (
    <>
      <Main scrollToSection={secondSecRef} />
      <div ref={secondSecRef}>
        <SecondSec />
      </div>
      <ThirdSec />
      <Pricing />
      <FifthSec />
      <SixSec />
    </>
  );
};
