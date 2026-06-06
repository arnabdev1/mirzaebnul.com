"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "resume",
    path: "/cv.pdf",
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

const Nav = () => {
  const pathname = usePathname()
  return (
    <nav className="flex gap-8">
      
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            target={link.path === "/cv.pdf" ? "_blank" : undefined}
            className={`${
              link.path === pathname &&
              "text-secondary border-b-2 border-secondary"
            } capitalize font-medium hover:text-secondary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
