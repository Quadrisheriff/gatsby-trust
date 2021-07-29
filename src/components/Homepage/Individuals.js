import React from "react";
import IndividualPng from "../../images/individual.png";
import LogoPng from "../../images/logo2.png";

const IndividualFeatures = () => (
  <>
    <section className="relative">
      <div className="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24">
        <div className="container relative">
          <div className="flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24">
            <div className="mx-2 relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left">
              <div className="max-w-2xl">
                <img src={LogoPng} />
              </div>
              <h2 className="font-black text-blue-primary text-2xl md:text-3xl leading-snug max-w-2xl mt-2">
                Buy safer and easier with TrustBroker.
              </h2>
              <p className="my-5 lg:my-8 text-md lg:text-base font-medium text-blue-primary max-w-lg mx-auto lg:mx-0">
                TrustBroker offers a range of features tailored to improving
                your online buying experience. Maintain total control in your
                online dealings with TrustBroker.
              </p>
              <button className="font-bold px-10 lg:px-10 py-3 rounded-full bg-blue-medium text-grey-primary focus:bg-blue-primary hover:bg-blue-primary focus:shadow-outline focus:outline-none transition duration-300">
                Get started
              </button>
            </div>
            <div className="relative mt-12 lg:mt-0 flex flex-col justify-center">
              <div className="mx-2 flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none">
                <img src={IndividualPng} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default IndividualFeatures;
