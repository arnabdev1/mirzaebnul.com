"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { UserInputContext } from "../app/context/Context";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const throttleTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (throttleTimeout.current) return;
      
      throttleTimeout.current = setTimeout(() => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = prevScrollPos.current > currentScrollPos;
        const isAtTop = currentScrollPos < 10;
        
        setVisible(isScrollingUp || isAtTop);
        prevScrollPos.current = currentScrollPos;
        throttleTimeout.current = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, []);

  const { userInput } = useContext(UserInputContext);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ease-in-out ${
        visible
          ? "translate-y-0 dark:xl:bg-primary xl:bg-[#ffffff] dark:xl:bg-opacity-75  xl:bg-opacity-75"
          : "-translate-y-full xl:bg-transparent"
      }`}
    >
      <div className="py-4 dark:text-white text-black">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="flex flex-row text-4xl font-semibold gap-0">
              <div id="firstname">{userInput.firstName || "Mirza"}</div>
              <span className="text-secondary">.</span>
            </h1>
          </Link>

          <div className="hidden xl:flex items-center gap-8">
            <ThemeSwitch className="w-40" />

            <Nav />

            <Link href="/cv.pdf" target="_blank">
              <button className="transition-all duration-300 p-3 rounded-full text-lg dark:border-white border-black border-2 hover:border-transparent font-light dark:text-white text-black bg-transparent hover:scale-110 hover:bg-secondary hover:text-black active:bg-secondary focus:outline-none dark:focus:text-white focus:text-black active:text-black focus:ring focus:ring-[#ffffff]">
                Hire me
              </button>
            </Link>
          </div>
          <div className="xl:hidden flex flex-row gap-5 justify-center items-center">
            <ThemeSwitch className="w-40" />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
