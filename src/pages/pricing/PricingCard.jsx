import React from "react";
import { ClockFading, RotateCcw, ShieldCheck } from "lucide-react";

const features = [
  { icon: ClockFading, text: "24/7 support" },
  { icon: ShieldCheck, text: "30-day money-back guarantee" },
  { icon: RotateCcw, text: "Cancel anytime" },
];

const pricingCards = [
  {
    id: 1,
    isPopular: false,
    title: "Premium",
    description: "Everything you need to get started",
    originalPrice: "US$ 4.19",
    currentPrice: "2.49",
    discount: "Save 80%",
    bonus: "+3 months free",
    details:
      "Get 48 months for US$ 119.52 (regular price US$ 585.12). Renews at US$ 10.99/mo.",
  },
  {
    id: 2,
    isPopular: true,
    title: "Business",
    description: "Everything you need to get started",
    originalPrice: "US$ 17.19",
    currentPrice: "12.49",
    discount: "Save 80%",
    bonus: "+3 months free",
    details:
      "Get 48 months for US$ 119.52 (regular price US$ 585.12). Renews at US$ 10.99/mo.",
  },
  {
    id: 3,
    isPopular: false,
    title: "Cloud Startup",
    description: "Everything you need to get started",
    originalPrice: "US$ 24.19",
    currentPrice: "20.49",
    discount: "Save 80%",
    bonus: "+3 months free",
    details:
      "Get 48 months for US$ 119.52 (regular price US$ 585.12). Renews at US$ 10.99/mo.",
  },
];

const PricingCard = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#00465F] text-center my-8">
        Web hosting
      </h1>
      <ul className="flex flex-row text-xs md:text-sm px-3 gap-3 justify-center">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex gap-1 items-center text-[9px] md:text-sm"
          >
            <feature.icon className="w-4" />
            {feature.text}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 my-6 px-3 sm:my-8 md:my-10 w-full max-w-6xl">
        {pricingCards.map((card) => (
          <div
            key={card.id}
            className={`transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 ${
              card.isPopular
                ? "bg-primary rounded-lg flex flex-col justify-between pt-2"
                : "mt-9"
            }`}
          >
            {card.isPopular && (
              <p className="text-center font-semibold text-secondary">
                MOST POPULAR
              </p>
            )}
            <ul
              className={`flex flex-col border-[1px] rounded-lg px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-5 w-full ${
                card.isPopular
                  ? "bg-background border-[2px] border-primary"
                  : "border-gray-500"
              }`}
            >
              <div className="bg-pink-600 text-white rounded-full px-2 py-1 text-xs w-fit">
                {card.discount}
              </div>
              <div>
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-sm">{card.description}</p>
              </div>
              <div>
                <p className="text-sm text-gray-800 line-through">
                  {card.originalPrice}
                </p>
                <p className="text-lg">
                  US$
                  <span className="text-3xl font-semibold">
                    {card.currentPrice}
                  </span>
                  /mo
                </p>
                <p className="text-xl font-bold text-[#008BBE]">{card.bonus}</p>
              </div>
              <div className="bg-primary/20 rounded-md text-[#008BBE] flex justify-center items-center">
                Limited time deal
              </div>
              <button
                className={`w-full rounded-lg h-10 sm:h-12 text-base sm:text-lg md:text-md font-semibold ${
                  card.isPopular
                    ? "text-white bg-black/90 hover:bg-black/80 transition duration-300 ease-in-out"
                    : "outline-1 outline-black/80 text-black/80"
                }`}
              >
                Choose plan
              </button>
              <p className="text-gray-500 text-xs">{card.details}</p>
              <div className="h-[1px] bg-gray-600"></div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
