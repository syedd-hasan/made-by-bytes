import React, { useRef } from "react";
import { Main } from "../component/HomeComponent/Main";
import { SecondSec } from "../component/HomeComponent/SecondSec";
import { ThirdSec } from "../component/HomeComponent/ThirdSec";
import { FourthSec } from "../component/HomeComponent/FourthSec";
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
      <FourthSec />
      <FifthSec />
      <SixSec />
    </>
  );
};
