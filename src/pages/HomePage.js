import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { servicesObjOne } from "../components/Services/Data";
import Pricing from "../components/Pricing/Pricing";
import SimpleFooter from "../components/Footer/SimpleFooter";
import ServicesNew from "../components/Services/ServicesNew";
import ReactPixel from "react-facebook-pixel";
import Testimonial from "../components/Testimonial/Testimonial";

function HomePage() {
  const options = {
    autoConfig: true, // set pixel's autoConfig
    debug: false, // enable logs
  };
  ReactPixel.init("935971993835238", options);

  useEffect(() => {
    ReactPixel.pageView(); // For tracking page view
  }, []);

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Testimonial />
      <InfoSection {...homeObjTwo} />
      <ServicesNew {...servicesObjOne} />
      <InfoSection {...homeObjThree} />
      <Pricing />

      <SimpleFooter />
    </>
  );
}

export default HomePage;
