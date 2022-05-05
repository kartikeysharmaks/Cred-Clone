import React from "react";
import Button from "../common/Button/Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div>pay credit card bill. earn guaranteed ₹200 back.  </div>
        <div className="claim-anchor">
          claim now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="claim-arrow"
            alt="claim-arrow"
          />
        </div>
      </div>
      <div className="flex flex-col absolute-center max-width hero-section">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-sub-heading">
          join 7.5M+ members who win rewards and cashbacks everyday
        </div>
        <div>
          <Button buttonText="Download Cred" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
