import React from "react";
import { priceCategory } from "../constants/pricingConstant";

const PricingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className='bg-[url("/images/pricebg.svg")] bg-contain lg:bg-cover h-[35vh] lg:h-[60vh] w-full flex flex-col items-center justify-around mb-10'>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-8 md:px-0 text-center text-background font-bold w-full md:w-[80%] lg:w-[60%] xl:w-[40%]">
          <span className="text-primary">Black Friday:</span> Go online for up
          to 85% off
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-2 px-2 lg:w-[50%]">
          {priceCategory.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-secondary-light hover:bg-white hover:text-secondary-light transition duration-300 ease-in px-4 h-10 rounded-full text-white flex items-center justify-center gap-1 "
              >
                <Icon className="w-3 md:w-6"/>
                <span className="text-[9px] md:text-sm">{item.name}</span>
                
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
