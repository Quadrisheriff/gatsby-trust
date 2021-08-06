import React from "react";
import BusinessPng from "../../images/businesslogo-2.png";

const Hero = () => (
  <>
    <div
      className="relative pt-16 pb-32 flex content-center justify-center shadow"
      style={{
        minHeight: "75vh",
      }}
    >
      <div className=" absolute top-0 w-full bg-gradient-to-l from-blue-medium to-grey-secondary h-full bg-center bg-cover"></div>
      <div className="container relative max-w-6xl mx-auto mt-32 lg:mt-32">
        <div className="flex justify-center mb-10">
          <img src={BusinessPng} />
        </div>
        <h1 className="flex justify-center text-4xl font-semibold mb-10">
          Sell easier, faster, and safer with TrustBroker.
        </h1>
        <div className="flex justify-center">
          <button className="bg-blue-medium text-grey-primary font-semibold text-lg py-4 px-10 rounded-full shadow-md">Get started</button>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
