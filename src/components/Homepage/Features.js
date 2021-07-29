import React from "react";
import OfferPng from "../../images/offer.png";
import Link from "gatsby";

const Features = () => {
  return (
    <>
      <div
        className="w-full h-60 bg-center bg-cover"
        style={{ backgroundImage: `url(${OfferPng})` }}
      >
        <span
          id="blackOverlay"
          className="w-full h-60 absolute opacity-90 bg-blue-primary"
        >
          <div className="mt-20 flex justify-center items-center">
            <h1 className="flex text-center lg:text-4xl text-2xl font-extrabold text-grey-main">
              You can rely on our services at any time on any day.
            </h1>
          </div>
        </span>
      </div>
    </>
  );
};

export default Features;
