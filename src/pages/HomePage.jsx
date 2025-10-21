import React from "react";
import Hero from "../components/mainwebsiteComponent/Hero";
import BrandSlide from "../components/mainwebsiteComponent/BrandSlide";
import Features from "../components/mainwebsiteComponent/Features";
import ScrollStack, { ScrollStackItem } from "../components/ui/ScrollStack";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ButtonV1 from "../components/ButtonV1";

const HomePage = () => {
  return (
    <>
      <Hero />
      <BrandSlide />
      <Features/>
    </>
  );
};

export default HomePage;
