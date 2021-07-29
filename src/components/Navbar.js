import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import LogoSVG from "../images/logo.svg";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <img className="h-6 w-auto" src={LogoSVG} alt="TrustBroker logo" />
          </a>
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 text-black font-bold no-underline"
                href="#"
              >
                Company
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Help
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >
                Community
              </a>
            </li>
          </ul>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <i className="text-white fas fa-bars"></i>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content"
        >
          <div className="border-l border-grey-primary pl-4 lg:hidden">
            <button
              type="submit"
              className="bg-blue-medium uppercase flex items-center text-grey-primary py-2 mt-2 px-6 text-sm block lg:mr-1 lg:mb-0 lg:mt-0 lg:shadow lg:shadow-lg ml-3 mb-3"
            >
              Login
            </button>
          </div>
        </div>
        <div className="border-l border-grey-primary pl-4 hidden lg:block">
          <button
            type="submit"
            className="bg-white mt-4 uppercase flex font-bold items-center text-blue-medium py-2 px-6 text-sm rounded-full hover:bg-blue-primary focus:outline-2 lg:mr-1 lg:mb-0 lg:mt-0 lg:shadow lg:shadow-lg ml-3"
          >
            Login
          </button>
        </div>
      </div>
      <hr class="border-b border-grey-primary opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;

{
  /* <button
className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded text-white focus:outline-none block lg:hidden outline-none focus:outline-none lg:hidden"
type="button"
onClick={() => setNavbarOpen(!navbarOpen)}
>
<i className="text-white fas fa-bars"></i>
<MenuIcon className="h-6 w-6" aria-hidden="true" />
</button> */
}
