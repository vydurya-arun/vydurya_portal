import React from "react";
import ButtonV1 from "../ButtonV1";
import ButtonV2 from "../ButtonV2";
import TextType from "../ui/TextType";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-10 gap-10 lg:gap-20">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          Quality Websites
        </h1>
        <TextType 
          text={["Affordable Rates", "Very Fast", "Highly Custimize"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
          textColors={["#000000"]}
        />

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mx-auto lg:mx-0 w-full sm:w-[90%] md:w-[80%]">
          Transform your digital footprint into an unforgettable experience,
          where every click leads to meaningful connections.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <ButtonV1 content="Get start for free" classname="h-12 w-40" />
          <ButtonV2 />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/images/hero_image.png"
          alt="hero"
          className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
