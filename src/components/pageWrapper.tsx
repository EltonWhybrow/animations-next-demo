"use client";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const PageWrapper = ({ children, className }: { children: React.ReactNode; className:string }) => {
let {scrollYProgress} = useScroll();
let y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

    return (
        <>
        <motion.div 
        initial={{ opacity: 0, x:600 }}
        animate={{ opacity: 1, x:0 }}
        exit={{ opacity: 0, x:600 }}
        transition={{ duration: 0.4 }}
        

        className={clsx(className, 'oneclass', 'p-24')}>
        {children}
        </motion.div>
       
            </>
    );
    }