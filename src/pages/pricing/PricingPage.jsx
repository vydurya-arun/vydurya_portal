import React from "react";
import PricingHero from "./PricingHero";
import PricingCard from "./PricingCard";


const PricingPage = () => {


  return (
    <div className="flex flex-col items-center">
      <PricingHero />
      <PricingCard mainTitle="Web hosting"/>

    </div>
  );
};

export default PricingPage;