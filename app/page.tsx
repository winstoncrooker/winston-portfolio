"use client";

import BootSequence from "@/components/BootSequence";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BootSequence />
      <Navbar />
      <Hero />
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      <SectionWrapper id="skills">
        <Skills />
      </SectionWrapper>
      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>
      <SectionWrapper id="articles">
        <Articles />
      </SectionWrapper>
      <SectionWrapper id="experience">
        <Experience />
      </SectionWrapper>
      <SectionWrapper id="education">
        <Education />
      </SectionWrapper>
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
      <Footer />
    </>
  );
}
