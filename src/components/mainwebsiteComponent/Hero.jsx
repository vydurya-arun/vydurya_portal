import React from "react";
import ButtonV1 from "../ButtonV1";
import ButtonV2 from "../ButtonV2";

const Hero = () => {
  return (
    <div className="my-10 flex flex-row justify-between mx-15">
      <div className="w-[60%] space-y-5 py-5">
        <h1 className="text-7xl">Quality Websites at Affordable Rates</h1>
        <p className="w-[76%] text-lg">
          Transform your digital footprint into an unforgettable experience,
          where every click leads to meaningful connections
        </p>
        <div className="flex flex-row gap-4">
          <ButtonV1 content="Get start for free" classname="h-12"/>
          <ButtonV2 />
        </div>
      </div>
      <div>
        <img src="/images/hero_image.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
