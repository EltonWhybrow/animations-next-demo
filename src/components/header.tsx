import Link from "next/link";
import React from "react";
import AnimatedLink from "./animatedLink";
import TransitionLink from "./TransitionLinks";

export default function Header() {
  return (
    <div className="bg-slate-700 text-slate-50 py-4 ">
      <div className="container mx-auto flex gap-2">
        <AnimatedLink href="/">Home</AnimatedLink>
        <AnimatedLink href="/about">About</AnimatedLink>
        <AnimatedLink href="/contact">Contact</AnimatedLink>

      {/* <TransitionLink href="/" label="Home ->" />
      <TransitionLink href="/about" label="About ->" />
      <TransitionLink href="/contact" label="Contact ->" /> */}
      </div>
    </div>
  );
}