import React from "react";
import Button from "../common/Button/Button";
import "./AppRating.css";

const getIosPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      className="app-rating-icon"
      alt="icon"
    />
  );
};

const getAndroidPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      className="app-rating-icon" alt="icon"
    />
  );
};
const AppRating = () => {
  return (
    <div className="flex-col">
    <div className="max-width app-rating flex">
      <div className="flex app-rating-block flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars" alt="icon"
            />
          </div>
          <div className="app-rating-platform">
            app <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            prefix={getIosPrefix()}
            buttonText="Download the app"
            customClass="app-rating-button"
          />
        </div>
      </div>
      <div className="flex app-rating-block flex-col">
        <div className="flex">
          <div className="app-rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="app-rating-stars" alt="icon"
            />
          </div>
          <div className="app-rating-platform">
            play <br /> store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            prefix={getAndroidPrefix()}
            buttonText="Download the app"
            customClass="app-rating-button"
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the app" />
      </div>
    </div>
    <div className="flex flex-col absolute-center max-width app-rating-testimonial">
      <div>
      "in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job."
      </div>
      <div>
       -Anonymous
      </div>
    </div>
    </div>
  );
};

export default AppRating;