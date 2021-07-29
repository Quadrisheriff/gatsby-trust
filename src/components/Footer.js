import React from "react";
import logofooterPng from "../images/logofooter.png";
import trustbrokerPng from "../images/trustbrokerINC.png";
import Link from "gatsby";

const Footer = () => {
  return (
    <>
      <section className="relative bg-blue-primary text-grey-primary -mb-8 -mx-8 px-8 py-20 lg:py-24 lg:pr-80 lg:pl-20">
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12">
            <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
              <div>
                <img src={logofooterPng} />
              </div>
            </div>
            <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
              <h5 className="font-bold text-lg">Learn More</h5>
              <ul className="mt-6 text-sm font-medium">
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    How it works
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Who are we
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
              <h5 className="font-bold text-lg">Socials</h5>
              <ul className="mt-6 text-sm font-medium">
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Pinterest
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12">
              <h5 className="font-bold text-lg">Legal</h5>
              <ul className="mt-6 text-sm font-medium">
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="mt-3">
                  <a
                    href=""
                    className="text-md font-bold pb-1 transition duration-300"
                  >
                    Disclamer
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12 text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12">
              <div className="max-w-sm mx-auto lg:mx-0">
                <h5 className="font-bold">Subscribe to our Newsletter.</h5>
                <p className="mt-2 lg:mt-6 text-md font-medium text-grey-main">
                  We deliver high quality content written by professionals
                  weekly.
                </p>
                <form className="mt-2 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="bg-grey-main px-6 py-3 rounded text-blue-primary sm:rounded-r-none border-2 sm:border-r-0 border-grey-primary hover:border-grey-secondary focus:outline-none transition duration-300 w-full"
                  />
                  <button className="bg-blue-medium mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3 focus:ring-2 focus:ring-blue-medium">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-tetiary flex justify-start items-center h-28 pl-10 pt-5 md:h-28 lg:h-28">
        <div className="flex max-w-2xl max-h-10">
          <img src={trustbrokerPng} />
        </div>
      </section>
    </>
  );
};

export default Footer;
