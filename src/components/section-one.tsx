import Link from "next/link";
import { MotionDiv, MotionLi, MotionUl } from "./MotionDiv";

export default function SectionOne(props: any) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  return (
    <>
    <div className="flex flex-wrap mt-20">
    <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
    <MotionUl
      variants={container}
      initial="hidden"
      animate="show"
      className="flex mb-5">
        <MotionLi variants={item}>
      <Link className="p-3 bg-slate-700 text-white rounded" href="/">HOME</Link>
        </MotionLi>
        <MotionLi variants={item}>
      <Link className="p-3 bg-slate-700 text-white rounded ml-2" href="/contact">CONTACT</Link>
        </MotionLi>
        <MotionLi variants={item}>
      <Link className="p-3 bg-slate-700 text-white rounded ml-2" href="/">HOME</Link>
        </MotionLi>
      </MotionUl>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Working with gestures
      </h3>
      <p
        className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
      >
        Don&apos;t let your uses guess by attaching tooltips and popoves to
        any element. Just make sure you enable them first via
        JavaScript.
      </p>
      <p
        className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
      >
        The kit comes with three pre-built pages to help you get started
        faster. You can change the text and images and you&apos;re good to
        go. Just make sure you enable them first via JavaScript.
      </p>
    
  
    </div>

    <MotionDiv 
     initial={{ opacity: 0, y:100 }}
     animate={{ opacity: 1, y:0, transition: {delay:.5} }}
     exit={{ opacity: 0, y:100 }}
     transition={{ duration: .6 }}
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
    </MotionDiv>
  
    </div>
   
      </>
  );
}