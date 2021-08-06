import React from "react";
import IndividualPng from "../../images/individual.png";
import LogoPng from "../../images/logo2.png";

const IndividualFeatures = () => (
  <>
    <section className="relative">
      <div className="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24">
        <div className="container relative">
          <div className="flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto">
            <div className="relative text-center lg:text-left">
              <div>
                <img src={LogoPng} />
              </div>
              <h2 className="font-extrabold text-blue-primary text-1xl md:text-3xl leading-snug max-w-2xl mt-2">
                A single app for managing your online personal shopping needs.
              </h2>
              <p className="my-2 lg:my-8 text-sm lg:text-base font-bold text-blue-primary max-w-lg mx-auto lg:mx-0">
                TrustBroker offers a range of features tailored to improving
                your online buying experience. Buy safer and easier with the
                TrustBroker Personal app.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6 max-w-2xl">
                <div>
                  <p className="text-blue-medium font-bold text-md">Escrow protection service</p>
                  <p className="text-blue-primary text-sm">Stay protected while you shop online with the TrustBroker escrow service.</p>
                </div>
                <div>
                  <p className="text-blue-medium font-bold text-md">Online shopping planner</p>
                  <p className="text-blue-primary text-sm">Plan your shopping spree in advance. Plan budgets, create shopping lists, and more with TrustBroker.</p>
                </div>
              </div>
              <p className="text-blue-primary text-sm"></p>
              <a
                href="/"
                className="font-extrabold text-md text-blue-medium hover:underline focus:underline transition duration-300"
              >
                Learn more about TrustBroker Personal.
              </a>
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
