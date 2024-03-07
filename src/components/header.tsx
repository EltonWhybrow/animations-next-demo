"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/about", label: "Really long link name to home" },
];

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="bg-slate-700 text-slate-50 py-4 ">
      <div className="container mx-auto flex gap-2">
     
     <nav>
      <ul className="[&_li]:ml-4 ml-12 flex">
        {links.map((link) => (
          <li key={link.href}>  
          <Link href={link.href} className="relative">
            {link.href === pathName && (<motion.span layoutId="underline" className="absolute left-0 top-full block h-[1px] w-full bg-white"></motion.span>)}{link.label}
            </Link>
            </li>
        ))}
      </ul>
     </nav>

      </div>
    </div>
  );
}