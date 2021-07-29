import React from "react";
import businessCover from "../../images/businessCover.png";
import LogoPng from "../../images/businessLogo.png";
const Business = () => (
  <>
    <section className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24">
        <div className="md:w-6/12 flex-shrink-0 relative">
          <img className="block h-auto shadow" src={businessCover} />
        </div>
        <div className="md:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last">
          <div className="lg:py-8 text-center md:text-left">
            <div className="max-w-2xl">
              <img src={LogoPng} />
              <h2 className="font-black text-blue-primary text-2xl md:text-3xl leading-snug max-w-2xl mt-2">
                Sell easier and safer with TrustBroker.
              </h2>
              <p className="my-5 lg:my-8 text-md lg:text-base font-medium text-blue-primary max-w-lg mx-auto lg:mx-0">
                Take control of your business growth with a range of TrustBroker
                business features.
              </p>
              <button className="font-bold px-10 lg:px-10 py-3 rounded-full bg-blue-medium text-grey-primary focus:bg-blue-primary hover:bg-blue-primary focus:shadow-outline focus:outline-none transition duration-300">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Business;
