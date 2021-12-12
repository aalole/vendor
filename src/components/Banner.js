/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import LoginModal from "../components/LoginModal";
import greenCabbage from "../assets/green-beans.png";
import applogo from '../assets/applogo.png'

const navigation = [
  { name: "Product", href: "/login" },
  { name: "Features", href: "/login" },
  { name: "Marketplace", href: "/login" },
];

export default function Banner() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative overflow-hidden banner">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="navigation flex items-center justify-between sm:h-10 lg:justify-between "
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/login">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto sm:h-10 applogo"
                        src={applogo}
                        alt="user"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <LoginModal open={open} setOpen={setOpen} />
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 nav-item-wrap">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900 nav-items"
                    >
                      {item.name}
                    </a>
                  ))}
                  <button
                    className="nav-items font-medium"
                    onClick={() => setOpen(true)}
                  >
                    Login
                  </button>
                  <button
                    className="nav-items font-medium"
                    onClick={() => setOpen(true)}
                  >
                    Sign Up
                  </button>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto applogo"
                        src={applogo}
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </button>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-lg banner-food-text-heading">
                  Welcome to our
                </span>{" "}
                <span className="block xl:inline banner-food-text text-bolder capitalize">
                  healthy food collection!
                </span>
              </h1>
              <p className="banner-para mt-3 text-base text-gray-400 pr-10 leading-6 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-xm lg:mx-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full">
                  <a
                    href="/"
                    className="w-full px-10 py-2 border font-medium rounded-full bg-none hover:bg-green-700 hover:text-white md:py-4 md:text-sm md:px-10 shop-now-btn"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 img-div"></div>
      <div className="col-cont-wrap">
        <img
          className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-80 m-auto lg:h-full  beans-img"
          src={greenCabbage}
          alt="salad"
        />
      </div>
    </div>
  );
}
