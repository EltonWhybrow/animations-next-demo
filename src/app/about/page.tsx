import TransitionLink from "@/components/TransitionLinks";
import SectionOne from "@/components/section-one";


export default function About() {
    return (
      <div className="flex flex-col h-screen items-center justify-center bg-slate-200 gap-10 routeContent">
        <h1 className="text-4xl pageHeader">About Page</h1>
        <p className="mx-10 pageContent text-center line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna
          auctor, viverra sapien. Donec euismod turpis eget massa lobortis, eget
          scelerisque justo.
        </p>
        <SectionOne title="About"/>
        {/* <TransitionLink href="/" label="Home ->" /> */}
      </div>
    );
  }