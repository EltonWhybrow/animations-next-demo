"use client";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { MotionSpan } from "./MotionDiv";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "Really long link name for about page" },
];

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="bg-slate-50 text-slate-50 py-4 flex">
      <div className="relative p-4">
        {/* <Image src="/fl-logo.svg" width={300} height={200} alt="random image" /> */}
      </div>
      <div className="mx-auto flex gap-2">
     
        <nav>
          <ul className="[&_li]:ml-4 ml-12 flex py-3">
            {links.map((link) => (
              <li key={link.href}>  
              <Link href={link.href} className="relative p-2 text-slate-700">
                {link.href === pathName && (<MotionSpan layoutId="underline" className="absolute left-0 top-full block h-[2px] w-full bg-slate-700"></MotionSpan>)}{link.label}
                </Link>
                </li>
            ))}
          </ul>
        </nav>

      </div>
    </div>
  );
}