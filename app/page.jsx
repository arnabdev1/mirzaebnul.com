"use client";
import React, { useContext, memo, useMemo } from "react";
import { UserInputContext } from "./context/Context";
import Link from "next/link";
import dynamic from "next/dynamic";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import Skills from "../components/Skills";

const WorkExperience = dynamic(() => import("@/components/WorkExperience"), {
  loading: () => <div className="h-20" />,
});
const Publications = dynamic(() => import("@/components/Publications"), {
  loading: () => <div className="h-20" />,
});

const Home = memo(() => {
  const { userInput } = useContext(UserInputContext);
  
  const socialProps = useMemo(() => ({
    containerStyles: "flex gap-6",
    iconStyles: "md:w-12 md:h-12 w-10 h-10 hover:scale-125 border border-secondary rounded-full flex justify-center items-center text-secondary text-base hover:bg-secondary hover:text-primary transition-all duration-200"
  }), []);

  return (
    <section className="h-full">
      <div className="container w-full h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl dark:text-white/80 text-black/80">
              Mechanical Engineer
            </span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <div className="text-secondary flex flex-row gap-[2vw] xl:justify-normal justify-center items-center">
                <div id="name">
                  {userInput.firstName || "Mirza Ebnul"} {userInput.lastName || "Hasan"}
                </div>
              </div>
            </h1>
            <p className="w-full mb-9 dark:text-white text-black font-bold">
              Looking for ME Intern roles.
            </p>
            <Stats />
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
        <div className="mb-8 xl:mb-0">
          <Social {...socialProps} />
        </div>
      </div>

      <div className="flex flex-col">
        <Skills />
        <Publications />
        <WorkExperience />
      </div>
    </section>
  );
});

Home.displayName = 'Home';

export default Home;
