"use client";
import { motion } from "framer-motion";

export const PageWrapper = ({ children, className }: { children: React.ReactNode; className:string }) => {
    return (
        <motion.div 
        initial={{ opacity: 0, x:505 }}
        animate={{ opacity: 1, x:0 }}
        exit={{ opacity: 0, x:505 }}
        transition={{ duration: 0.4 }}
        

        className={className}>
        {children}
        </motion.div>
    );
    }