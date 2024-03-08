"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { MotionSpan } from "./MotionDiv";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "Really long link name for about page" },
];

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="bg-slate-700 text-slate-50 py-4 ">
      <div className="container mx-auto flex gap-2">
     
     <nav>
      <ul className="[&_li]:ml-4 ml-12 flex py-3">
        {links.map((link) => (
          <li key={link.href}>  
          <Link href={link.href} className="relative p-2">
            {link.href === pathName && (<MotionSpan layoutId="underline" className="absolute left-0 top-full block h-[2px] w-full bg-white"></MotionSpan>)}{link.label}
            </Link>
            </li>
        ))}
      </ul>
     </nav>

      </div>
    </div>
  );
}