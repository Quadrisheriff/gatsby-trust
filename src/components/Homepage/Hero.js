import React from "react";
import HeroPng from "../../images/hero.png";

const Hero = () => (
  <>
    <div
      className="relative pt-16 pb-32 flex content-center justify-center shadow"
      style={{
        minHeight: "75vh",
      }}
    >
      <div
        className=" absolute top-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${HeroPng})` }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-30 bg-blue-medium"
        ></span>
      </div>
      <div className="container relative mt-32 lg:mt-32">
        <div className="flex flex-wrap justify-start mx-3">
          <div className="w-full lg:w-6/12">
            <h1 className="text-white text-4xl lg:text-6xl font-extrabold">
              Gain access to a world of unlimited growth.
            </h1>
            <button className="bg-white mt-7 py-3 px-10 rounded-full leading-normal text-blue-medium font-bold text-md shadow shadow-lg hover:bg-blue-primary focus:outline-2">
              Discover TrustBroker
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Hero;

{
  /* <h1 className="text-white text-6xl lg:text-8xl font-extrabold">
                Trust
              </h1>
              <h1 className="text-white text-6xl lg:text-8xl font-extrabold">
                enables
              </h1>
              <h1 className="text-white text-6xl lg:text-8xl font-extrabold">
                commerce.
              </h1>
              <p className="mt-5 text-lg text-white lg:leading-9 lg:text-xl lg:mt-10">
                For every online transaction, Trust Broker protects both the
                buyer and sellers. You can now do business with anyone,
                anyplace, even though you don't know or trust them.
              </p> */
}
