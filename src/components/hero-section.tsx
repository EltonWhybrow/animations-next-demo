"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection(props: any) {
  let {scrollYProgress} = useScroll();
let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
  
    <div className="w-full px-24 py-44 mr-auto ml-auto mb-24">
    <motion.div 
        style={{y}}
        className="absolute inset-x-0 top-0 -z-20 mx-auto h-screen">
            {/* add unsplash random image full screen using tailwind css */}
            <Image src="https://source.unsplash.com/random" layout="fill" objectFit="cover" alt="random image" />

            </motion.div>
  
      <h3 className="text-3xl mb-2 font-semibold leading-normal text-gray-100">
       Hero Section
      </h3>
      <p
        className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-100"
      >
        Don't let your uses guess by attaching tooltips and popoves to
        any element. Just make sure you enable them first via
        JavaScript.
      </p>
      <p
        className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-100"
      >
        The kit comes with three pre-built pages to help you get started
        faster. You can change the text and images and you're good to
        go. Just make sure you enable them first via JavaScript.
      </p>
      <Link className="p-3 bg-slate-300 text-gray-700 rounded" href="/">HOME</Link>
      <Link className="p-3 bg-slate-300 text-gray-700 rounded ml-2" href="/contact">CONTACT</Link>
     
    </div>
   
      </>
  );
}