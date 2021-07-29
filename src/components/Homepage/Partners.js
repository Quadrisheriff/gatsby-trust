import React from "react";
import flutterwavePng from "../../images/flutterwave.png";

const Partners = () => (
  <>
    <section className="bg-white flex justify-center text-center h-96 md:h-60 lg:h-60">
      <div className="mt-10 flex justify-center">
        <div>
          <h1 className="flex justify-center text-center text-4xl font-extrabold text-blue-primary">
            Partners
          </h1>
          <p className="text-lg mt-5 text-blue-primary">
            We are collaborating with the appropiate parties to provide you a
            great service.
          </p>
          <div className="flex justify-center mt-5 max-w-2xl">
            <img src={flutterwavePng} />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Partners;

// We safeguard the interest of both buyers and sellers.
