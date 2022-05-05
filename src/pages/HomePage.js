import React from "react";
import Header from "../components/common/Header/Header";
import CredExperience from "../components/CredExperience/CredExperience";
import CredSecurity from "../components/CredSecurity/CredSecurity";
import CredStory from "../components/CredStory/CredStory";
import FeelSpecial from "../components/FeelSpecial/FeelSpecial";
import HeroSection from "../components/HeroSection/HeroSection";
import ShowCase from "../components/ShowCase/ShowCase";
import AppRating from "../components/AppRating/AppRating";
import BrandsLove from "../components/BrandsLove/BrandsLove";
import WindowPeak from "../components/WindowPeak/WindowPeak";
import MobileScroll from "../components/MobileScroll/MobileScroll";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <ShowCase/>
      <FeelSpecial/>
      <BrandsLove/>
      <CredExperience/>
      <MobileScroll/>
      <WindowPeak/>
      <CredSecurity/>
      <CredStory/>
      <AppRating/>
      
    </>
  );
};

export default HomePage;
