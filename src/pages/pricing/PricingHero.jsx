import React from 'react'
import { priceCategory } from '../../constants/pricingConstant';


const PricingHero = () => {
  return (
    <div className='bg-[url("/images/pricebg.svg")] bg-contain sm:bg-cover md:bg-cover lg:bg-cover h-[35vh] xs:h-[38vh] sm:h-[42vh] md:h-[46vh] lg:h-[50vh] xl:h-[54vh] 2xl:h-[58vh] w-full flex flex-col items-center justify-around mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
      {/* Main Heading */}
      <div className="text-3xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4.5xl xl:text-5xl 2xl:text-5.5xl px-4 xs:px-6 sm:px-8 md:px-0 text-center text-background font-bold w-[95%] xs:w-[92%] sm:w-[85%] md:w-[78%] lg:w-[68%] xl:w-[55%] 2xl:w-[45%]">
        <span className="text-primary">Black Friday:</span> Go online for up to 85% off
      </div>
      
      {/* Price Categories */}
      <div className="flex flex-row flex-wrap justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-3 lg:gap-4 px-2 xs:px-3 sm:px-4 w-full xs:w-[96%] sm:w-[90%] md:w-[82%] lg:w-[72%] xl:w-[62%] 2xl:w-[52%]">
        {priceCategory.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-secondary-light hover:bg-white hover:text-secondary-light transition duration-300 ease-in px-2.5 xs:px-3 sm:px-3.5 md:px-4 h-7 xs:h-8 sm:h-9 md:h-10 rounded-full text-white flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-1.5 md:gap-2 cursor-pointer"
            >
              <Icon className="w-3 sm:w-3.5 md:w-4 lg:w-4.5" />
              <span className="text-xs sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-medium whitespace-nowrap">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default PricingHero