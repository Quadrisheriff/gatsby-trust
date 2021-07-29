import React from "react";
import mobilePng from "../../images/mobile.png";
import appPng from "../../images/app.png";
import Link from "gatsby";

const Download = () => {
  return (
    <section className="relative bg-blue-medium">
      <div className="container relative mx-auto">
        <div className="flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24">
          <div className="mt-10 lg:mt-0 mx-auto flex text-center">
            <div>
              <h1 className="flex font-extrabold justify-center text-center text-white text-4xl lg:text-7xl max-w-2xl mt-2 mb-5">
                Coming Soon...
              </h1>
              <h2 className="flex font-extrabold justify-center text-center text-white text-4xl lg:text-3xl max-w-2xl mt-2">
                Buy and Sell simpler, faster, and safer with the TrustBroker
                app.
              </h2>
              <div className="flex justify-center mt-10"><img src={appPng} /></div>
              <h3 className="flex justify-center text-center text-white text-4xl lg:text-3xl max-w-2xl mt-10">
                Facilitating your online transactions.
              </h3>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:ml-16 flex justify-center items-end">
            <div className="max-w-2xl">
              <img src={mobilePng} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
