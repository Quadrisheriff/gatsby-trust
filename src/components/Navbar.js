import React, { useState, useEffect, Fragment } from "react";
import { ChevronDownIcon, MenuIcon } from "@heroicons/react/solid";
import { Link } from "gatsby";
import LogoSVG from "../images/logo.svg";
import { Popover, Transition } from "@headlessui/react";

const accounts = [
  {
    name: "Personal Account",
    link: "/personal",
  },
  {
    name: "Business Account",
    link: "/business",
  },
];

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/" },
  { name: "Community", link: "/" },
  { name: "Careers", link: "/" },
];

const Navbar = () => {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <>
      <nav
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && "bg-white text-blue-medium blur shadow-lg"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="flex-shrink-0 mr-4">
              <Link
                className={`toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl ${
                  !top && "bg-blue-medium"
                }`}
                href="/"
              >
                <img
                  className="h-6 w-auto"
                  src={LogoSVG}
                  alt="TrustBroker logo"
                />
              </Link>
            </div>

            <div
              className={`mt-1 hidden lg:block text-md font-extrabold text-white ${
                !top && "text-blue-medium"
              }`}
            >
              {navItems.map((navItem) => (
                <a
                  className="mx-3 py-5 hover:gradient-border-bottom"
                  href={navItem.link}
                >
                  {navItem.name}
                </a>
              ))}
            </div>

            {/* Site navigation */}
            <nav className="flex flex-grow justify-end">
              <div
                className={`border-l border-grey-primary pl-4 hidden lg:block ${
                  !top && "border-l border-blue-medium"
                }`}
              >
                <div className="w-full max-w-sm px-4">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={`${
                            open ? "" : "text-opacity-90"
                          } text-white font-bold group bg-blue-medium px-4 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                          <span>Get Started</span>
                          <ChevronDownIcon
                            className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-blue-primary group-hover:text-opacity-80 transition ease-in-out duration-150`}
                            aria-hidden="true"
                          />
                        </Popover.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute z-10 w-60 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-4 bg-white p-7 grid-cols-1">
                                {accounts.map((account) => (
                                  <Link to={account.link} className="text-blue-medium font-semibold">{account.name}</Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
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
</button>
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
            className="bg-white mt-4 uppercase flex font-bold items-center text-blue-medium py-2 px-6 text-sm hover:bg-blue-primary focus:outline-2 lg:mr-1 lg:mb-0 lg:mt-0 lg:shadow lg:shadow-lg ml-3"
          >
            Get Started
          </button>
        </div>
      </div>
      <hr class="border-b border-grey-primary opacity-25 my-0 py-0" />
    </nav> */
}
