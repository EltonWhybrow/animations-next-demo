
import { PageWrapper } from "@/components/pageWrapper";
import SectionOne from "@/components/section-one";


export default function Contact() {
    return (
      <PageWrapper className="flex flex-col bg-amber-100 gap-10 overflow-hidden">
        <h1 className="text-4xl">Contact Page</h1>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna
          auctor, viverra sapien. Donec euismod turpis eget massa lobortis, eget
          scelerisque justo.
        </p>
        <SectionOne title="Contact"/>
    
      </PageWrapper>
    );
  }