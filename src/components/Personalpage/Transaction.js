import React from "react";
import businessCover from "../../images/businessCover.png";
import transactionPng from "../../images/undraw_All_the_data_re_hh4w 1.png";

const Transaction = () => (
  <>
    <section className="relative">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-lg mx-auto py-20 md:py-24">
        <div className="max-w-3xl flex-shrink-0 relative">
          <img className="block h-auto shadow" src={transactionPng} />
        </div>
        <div className="md:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last">
          <div className="lg:py-8 text-center md:text-left">
            <div className="max-w-3xl">
              <h2 className="font-black text-blue-primary text-2xl md:text-3xl leading-snug max-w-2xl mt-2">
                Sell easier and safer with TrustBroker.
              </h2>
              <p className="my-5 lg:my-8 text-md lg:text-base font-medium text-blue-primary max-w-lg mx-auto lg:mx-0">
                Take control of your business growth with a range of TrustBroker
                business features.
              </p>
              <a
                href="/"
                className="font-extrabold text-md text-blue-medium hover:underline focus:underline transition duration-300"
              >
                Learn more about the TrustBroker Business app.
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Transaction;