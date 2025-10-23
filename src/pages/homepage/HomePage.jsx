import React from "react";
import Hero from "../../components/mainwebsiteComponent/Hero";
import BrandSlide from "../../components/mainwebsiteComponent/BrandSlide";
import NewFeature from "../../components/mainwebsiteComponent/NewFeature";
import PricingCard from "../pricing/PricingCard";


const HomePage = () => {
  return (
    <>
      <Hero />
      <BrandSlide />
      <NewFeature/>
      <PricingCard/>
    </>
  );
};

export default HomePage;
