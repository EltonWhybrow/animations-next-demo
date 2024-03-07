
import HeroSection from "@/components/hero-section";
import { PageWrapper } from "@/components/pageWrapper";
import SectionOne from "@/components/section-one";
import SectionThree from "@/components/section-three";
import SectionTwo from "@/components/section-two";

export default function Home() {
  return (
    <>
      <HeroSection title="Welcome to the home page" />
    <PageWrapper className="flex flex-col bg-amber-100 gap-10 overflow-hidden">

  
      <h1 className="text-4xl">Home Page</h1>
      <p className="line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna
        auctor, viverra sapien. Donec euismod turpis eget massa lobortis, eget
        scelerisque justo.
      </p>

      <SectionOne title="Home"/>
        {/* <TransitionLink href="/" label="Home ->" /> */}
        <SectionTwo title="Scroll text"/>
        <SectionThree title="Section three"/>
      
  
    </PageWrapper>
    </>
  );
}