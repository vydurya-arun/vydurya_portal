import React from "react";
import PricingHero from "./PricingHero";
import { ClockFading, RotateCcw, ShieldCheck } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <PricingHero />
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#00465F] text-center my-8">
          Web hosting
        </h1>
        <ul className="flex flex-row text-xs md:text-sm px-3 gap-3 justify-center">
          <li className="flex gap-1 items-center">
            <ClockFading className="w-4" />
            24/7 support
          </li>
          <li className="flex gap-1 items-center">
            <ShieldCheck className="w-4" />
            30-day money-back guarantee
          </li>
          <li className="flex gap-1 items-center">
            <RotateCcw className="w-4" />
            Cancel anytime
          </li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 my-6 sm:my-8 md:my-10 w-full max-w-6xl">
          {/* Domain Card 1 */}
          <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-5 w-full">
            <div className="bg-pink-600 text-white rounded-full px-2 py-1 text-xs w-fit ">
              Save 80%
            </div>
            <div>
              <h2 className="text-xl font-bold">Premium</h2>
              <p className="text-sm">Everything you need to get started</p>
            </div>

            <div>
              <p className="text-sm text-gray-800 line-through">US$ 12.19</p>
              <p className="text-lg">
                US$<span className="text-3xl font-semibold">2.49</span>/mo
              </p>
              <p className="text-xl font-bold text-[#008BBE]">+3 months free</p>
            </div>

            <div className="bg-primary/20 rounded-md text-[#008BBE] flex justify-center items-center">
              Limited time deal
            </div>

            <button className=" outline-1 outline-black/80 text-black/80  w-full rounded-lg h-10 sm:h-12 text-base sm:text-lg md:text-md font-semibold">
              Choose plan
            </button>
            <p className="text-gray-500 text-xs">
              Get 48 months for US$ 119.52 (regular price US$ 585.12). Renews at
              US$ 10.99/mo.
            </p>
            <div className="h-[1px] bg-gray-600"></div>
          </ul>

          {/* Domain Card 2 */}
          <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-5 w-full">
            <div className="bg-pink-600 text-white rounded-full px-2 py-1 text-xs w-fit ">
              Save 80%
            </div>
            <div>
              <h2 className="text-xl font-bold">Premium</h2>
              <p className="text-sm">Everything you need to get started</p>
            </div>

            <div>
              <p className="text-sm text-gray-800 line-through">US$ 12.19</p>
              <p className="text-lg">
                US$<span className="text-3xl font-semibold">2.49</span>/mo
              </p>
              <p className="text-xl font-bold text-[#008BBE]">+3 months free</p>
            </div>

            <div className="bg-primary/20 rounded-md text-[#008BBE] flex justify-center items-center">
              Limited time deal
            </div>

            <button className=" outline-1 outline-black/80 text-black/80  w-full rounded-lg h-10 sm:h-12 text-base sm:text-lg md:text-md font-semibold">
              Choose plan
            </button>
            <p className="text-gray-500 text-xs">
              Get 48 months for US$ 119.52 (regular price US$ 585.12). Renews at
              US$ 10.99/mo.
            </p>
            <div className="h-[1px] bg-gray-600"></div>
          </ul>

          {/* Domain Card 3 */}
          <ul className="flex flex-col border-[1px] border-gray-500 rounded-lg px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-5 w-full">
            <div className="bg-pink-600 text-white rounded-full px-2 py-1 text-xs w-fit ">
              Save 80%
            </div>
            <div>
              <h2 className="text-xl font-bold">Premium</h2>
              <p className="text-sm">Everything you need to get started</p>
            </div>

            <div>
              <p className="text-sm text-gray-800 line-through">US$ 12.19</p>
              <p className="text-lg">
                US$<span className="text-3xl font-semibold">2.49</span>/mo
              </p>
              <p className="text-xl font-bold text-[#008BBE]">+3 months free</p>
            </div>

            <div className="bg-primary/20 rounded-md text-[#008BBE] flex justify-center items-center">
              Limited time deal
            </div>

            <button className=" outline-1 outline-black/80 text-black/80  w-full rounded-lg h-10 sm:h-12 text-base sm:text-lg md:text-md font-semibold">
              Choose plan
            </button>
            <p className="text-gray-500 text-xs">
              Get 48 months for US$ 119.52 (regular price US$ 585.12). Renews at
              US$ 10.99/mo.
            </p>
            <div className="h-[1px] bg-gray-600"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
