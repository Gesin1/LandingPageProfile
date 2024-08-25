"use client";
import { useState, useEffect } from "react";
import { navigation } from "@/lib/constants";
import Image from "next/image";
import { FaMessage } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Hide navbar when scrolling down
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-black-200 border-b lg:border-0 fixed top-0 left-5 right-5 sm:left-10 sm:right-10 xl:left-0 xl:right-0 z-[100] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } px-5 sm:px-10 rounded-xl`}
    >
      <div className="items-center  max-w-screen-xl mx-auto lg:flex ">
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <a href="#home">
            <Image src="/gesinLogo.svg" width={120} height={50} alt="My Logo" />
          </a>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
            {navigation.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <li
                  key={idx}
                  className="text-gray-300 hover:text-gray-600 flex justify-start items-center gap-1"
                >
                  <Link href={item.path}>{item.title}</Link>
                  <div>
                    <IconComponent />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:inline-block">
          <Link
            href="https://wa.me/qr/PCFD7XUZY7QWC1"
            className="py-3 px-4 text-white bg-black-100 hover:bg-black-200 rounded-lg shadow flex justify-center items-center gap-1"
          >
            Let&apos;s talk <FaMessage className="w-[20px] h-[20px]" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
