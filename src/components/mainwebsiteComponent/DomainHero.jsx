import { Search } from "lucide-react";
import React from "react";
import ButtonV1 from "../ButtonV1";
import PixelBlast from "../ui/PixelBlast";
import { domainprice } from "../../constants/domainConst";
import { useNavigate } from "react-router-dom";

const DomainHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] bg-secondary mb-6 sm:mb-8">
        <PixelBlast
          variant="square"
          pixelSize={5}
          color="#66CEF5"
          patternScale={2}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent={true}
        />
      </div>

      <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-15 absolute top-0 inset-1">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 sm:mt-10 md:mt-13 mb-3 w-full md:w-[80%] lg:w-[60%] xl:w-[40%] text-center text-background font-bold">
          Domain name search buy a domain in minutes
        </h1>

        {/* Search Section */}
        <div className="flex flex-col w-full items-center gap-3 sm:gap-4 my-4 sm:my-5 md:my-6">
          <ButtonV1
            content="Domain search"
            classname="w-32 sm:w-36 md:w-40 h-8 sm:h-9 md:h-10 border-2 border-primary"
          />
          
          {/* Search Input */}
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] relative flex flex-row justify-center items-center border-2 border-primary bg-background">
            <input
              type="text"
              placeholder="Type the domain you want"
              className="h-12 sm:h-13 md:h-15 w-full border-none outline-none text-base sm:text-lg md:text-xl px-3 sm:px-4"
            />
            <button
              onClick={() => navigate("/domain-search")}
              className="cursor-pointer bg-primary hover:bg-[#66CEF5] absolute right-0 h-full w-12 sm:w-14 md:w-17 flex justify-center items-center"
            >
              <Search className="text-secondary w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Domain Prices */}
          <div className="flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-2 hidden md:flex">
            {domainprice.map((item) => {
              const { domain, discount, price } = item.price[0];
              return (
                <ul
                  key={item.id}
                  className="text-white bg-[#334F59] hover:bg-[#3D5862] transition duration-300 ease-in rounded-lg px-3 py-2 sm:px-4 sm:py-2 text-center w-24 sm:w-28 md:w-30"
                >
                  <li className="font-semibold text-sm sm:text-base md:text-lg">{domain}</li>
                  <li className="text-xs text-white/70 line-through">
                    US$ {discount}
                  </li>
                  <li className="font-semibold text-sm sm:text-base md:text-lg">US$ {price}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainHero;