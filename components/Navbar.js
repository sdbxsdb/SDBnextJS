import Link from "next/link";
import Image from "next/image";
import useDarkMode from "../useDarkMode";
import { useState, useEffect } from "react";
import MobileNav from "../components/MobileNav";

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [showMobile, setShowMobile] = useState(false);

  const toggleMobileNav = () => {
    if (showMobile) {
      setShowMobile(false);
    } else {
      setShowMobile(true);
    }
  };

  return (
    <nav className="py-4 border-b-2 border-blue-400 flex fixed z-50 top-0 w-full dark:bg-darkGreyFaded dark:text-lightGrey bg-lightGreyFaded backdrop-blur-md text-darkGrey bg-opacity-30 transition">
      <div className="w-full flex justify-between mx-12">
        <Link href="/">
          <a className="flex justify-center items-center gap-x-4 group">
            <div className="rounded-full w-[80px] h-[80px] bg-blue-400 p-1 group-hover:scale-105 transition">
              <div
                style={{ backgroundImage: 'url("/sdbavatarnobg.png")' }}
                className="w-full h-full bg-contain bg-no-repeat bg-center"
              ></div>
            </div>
            <div className="min-w-max">
              <h1>Sam Donaghy-Bell</h1>
              <p>Course of Life</p>
            </div>
          </a>
        </Link>

        <div className=" my-6 flex justify-center ">
          {/* Desktop Nav */}
          <div className="gap-x-12 hidden md:flex">
            <div className="hover:scale-105 transition hover:text-blue-400">
              <Link href="/about">
                <a>Bio</a>
              </Link>
            </div>

            <div className="hover:scale-105 transition hover:text-blue-400">
              <Link href="/skills">
                <a>Skills</a>
              </Link>
            </div>

            <div className="hover:scale-105 transition hover:text-blue-400">
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </div>

            <div className="hover:scale-105 transition hover:text-blue-400">
              <Link href="/blogs">
                <a>Blog</a>
              </Link>
            </div>

            <div className="hover:scale-105 transition hover:text-blue-400">
              <a
                href="mailto:samdonaghybell@gmail.com?subject=Howdy!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </a>
            </div>
            <button className="darkLightMode hover:scale-105 transition hover:text-blue-400 pb-2">
              {colorTheme === "light" ? (
                <svg
                  onClick={() => setTheme("light")}
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setTheme("dark")}
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
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
          {/*END OF // Desktop Nav */}

          {/* MOBILE Nav */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileNav}
              className="flex flex-col gap-y-1.5"
            >
              <div className="w-[40px] h-[3px] bg-darkGrey dark:bg-lightGrey"></div>
              <div className="w-[40px] h-[3px] bg-darkGrey dark:bg-lightGrey"></div>
              <div className="w-[40px] h-[3px] bg-darkGrey dark:bg-lightGrey"></div>
            </button>
            <MobileNav show={showMobile} onClose={() => setShowMobile(false)} />
          </div>
          {/* END OF //  MOBILE Nav */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
