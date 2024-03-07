"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SectionTwo(props: any) {
  return (
    <div className="flex flex-wrap items-center mt-32">
     <motion.div
  initial={{ opacity: 0} }
  whileInView={{ opacity: 1, y:0, transition: {delay:.4} }}
    className="w-full md:w-4/12 px-4 mr-auto ml-auto">
      <div
        className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"
      >
        <img
          alt="..."
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
          className="w-full align-middle rounded-t-lg z-0"
        />
        <blockquote className="block relative p-8 bg-pink-600">
          <span className="absolute -top-[40px] left-0 z-10 w-full h-40">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 -top-[30px] w-full block"
         
          >
            <polygon
              points="-30,95 583,95 583,65"
              className="text-pink-600 fill-current"
            ></polygon>
          </svg>
          </span>
          <div className="h-16 w-16 text-white p-3 bg-red-400 inline-flex items-center justify-center rounded-full shadow-lg mb-4">
            <i className="fas fa-rocket text-xl"></i>
          </div>
          <h4 className="text-xl font-bold text-white">
            Top Notch Services
          </h4>
          <p className="text-md font-light mt-2 text-white">
            Corporis reiciendis quod necessitatibus vel minus cupiditate recusandae debitis aliquam, suscipit beatae nesciunt deleniti obcaecati distinctio neque laboriosam officia perspiciatis. Nam, a!
          </p>
        </blockquote>
      </div>
    </motion.div>

    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
    <motion.div
          whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 1.1 }}
          // drag="x"
          // dragConstraints={{ left: -100, right: 100 }}
        className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
      >
        
        <i className="fas fa-user-friends text-xl"></i>
       {props.title}
      </motion.div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Working with us is a pleasure
      </h3>
      <p
        className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
      >
        Don't let your uses guess by attaching tooltips and popoves to
        any element. Just make sure you enable them first via
        JavaScript.
      </p>
      <p
        className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
      >
        The kit comes with three pre-built pages to help you get started
        faster. You can change the text and images and you're good to
        go. Just make sure you enable them first via JavaScript.
      </p>
      <Link className="p-3 bg-slate-700 text-white rounded" href="/">HOME</Link>
      <Link className="p-3 bg-slate-700 text-white rounded ml-2" href="/contact">CONTACT</Link>
    </div>
    
    </div>
  );
}