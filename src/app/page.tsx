import TransitionLink from "@/components/TransitionLinks";
import SectionOne from "@/components/section-one";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-amber-100 gap-10 routeContent">
      <h1 className="text-4xl pageHeader">Home Page</h1>
      <p className="mx-10 text-center line-clamp-3 pageContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna
        auctor, viverra sapien. Donec euismod turpis eget massa lobortis, eget
        scelerisque justo.
      </p>

      <SectionOne title="Home"/>
  
    </div>
  );
}