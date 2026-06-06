"use client"

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import { UserInputContext } from "../app/context/Context";
import { useContext } from "react";


const MobileNav = () => {
  const { userInput } = useContext(UserInputContext);
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "resume",
      path: "cv.pdf",
    },
    // {
    //   name: "magic",
    //   path: "/magic",
    // },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  const pathname = usePathname();
  return (
    <Sheet className="bg-[#ffffff] dark:bg-primary">
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="md:text-[32px] text-[24px] text-secondary" />
      </SheetTrigger>
      <SheetContent className="bg-[#ffffff] dark:bg-primary flex flex-col">
        <div className=" mt-10 mb-10 text-center flex flex-row items-center justify-center gap-2 md:text-2xl text-xl">
          <div>{userInput.firstName || "Arnab"}</div>{" "}
          <div>{userInput.lastName || "Dev"}</div>
        </div>

        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-secondary border-b-2 border-secondary"
              } capitalize font-medium hover:text-secondary   transition-all`}
            >
              {link.name}
            </Link>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;