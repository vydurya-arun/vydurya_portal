import React from "react";

const PopularDomain = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#00465F] text-center">
        Choose from the most popular domains
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 my-6 sm:my-8 md:my-10 w-full max-w-6xl">
        {/* Domain Card 1 */}
        <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3 w-full">
          <img src="/images/com.png" alt="com" className="w-28 sm:w-32 md:w-34" />
          <p className="text-sm sm:text-base">Build trust with the best-known domain names.</p>
          <div className="flex justify-start w-full gap-2 sm:gap-3 items-center px-1">
            <p className="text-xs sm:text-sm text-gray-800 line-through">
              US$ 6.99/1st yr
            </p>
            <div className="bg-pink-600 text-white rounded-full px-2 py-1 text-xs">
              Save 80%
            </div>
          </div>
          <div className="flex justify-start w-full gap-2 sm:gap-3 items-center px-1">
            US$<p className="text-xl sm:text-2xl font-semibold">2.39</p>/year
          </div>
          <button className="bg-violet-600 text-background w-full rounded-lg h-10 sm:h-12 text-base sm:text-lg md:text-xl">
            Register
          </button>
        </ul>

        {/* Domain Card 2 */}
        <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3 w-full">
          <img src="/images/com.png" alt="com" className="w-28 sm:w-32 md:w-34" />
          <p className="text-sm sm:text-base">Build trust with the best-known domain names.</p>
          <div className="flex justify-start w-full gap-2 sm:gap-3 items-center px-1">
            <p className="text-xs sm:text-sm text-gray-800 line-through">
              US$ 6.99/1st yr
            </p>
            <div className="bg-pink-600 text-white rounded-full px-2 py-1 text-xs">
              Save 80%
            </div>
          </div>
          <div className="flex justify-start w-full gap-2 sm:gap-3 items-center px-1">
            US$<p className="text-xl sm:text-2xl font-semibold">2.39</p>/year
          </div>
          <button className="bg-violet-600 text-background w-full rounded-lg h-10 sm:h-12 text-base sm:text-lg md:text-xl">
            Register
          </button>
        </ul>

        {/* Domain Card 3 */}
        <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3 w-full">
          <img src="/images/com.png" alt="com" className="w-28 sm:w-32 md:w-34" />
          <p className="text-sm sm:text-base">Build trust with the best-known domain names.</p>
          <div className="flex justify-start w-full gap-2 sm:gap-3 items-center px-1">
            <p className="text-xs sm:text-sm text-gray-800 line-through">
              US$ 6.99/1st yr
            </p>
            <div className="bg-pink-600 text-white rounded-full px-2 py-1 text-xs">
              Save 80%
            </div>
          </div>
          <div className="flex justify-start w-full gap-2 sm:gap-3 items-center px-1">
            US$<p className="text-xl sm:text-2xl font-semibold">2.39</p>/year
          </div>
          <button className="bg-violet-600 text-background w-full rounded-lg h-10 sm:h-12 text-base sm:text-lg md:text-xl">
            Register
          </button>
        </ul>
      </div>
    </div>
  );
};

export default PopularDomain;