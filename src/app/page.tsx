"use client";
import { useEffect, useRef } from "react";
import canvasAnimate from "../utils/animate";
import NavBar from "@/components/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoreExpertiseSection } from "@/components/sections/CoreExpertiseSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Reveal } from "@/components/Reveal";
import { SECTION_IDS } from "@/constants/navigation";

export default function Home() {
  const canvasElem = useRef<HTMLCanvasElement | null>(null);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!canvasElem.current) return;

    let animate = canvasAnimate(canvasElem.current);
    animate.start();

    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        animate.end();
        animate = canvasAnimate(canvasElem.current!);
        animate.start();
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      animate.end();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-20">
        <NavBar />
      </header>

      <main className="flex min-h-screen flex-col" id={SECTION_IDS.hero}>
        {/* Faint canvas network — low opacity so it reads as texture, not effect */}
        <canvas
          className="pointer-events-none fixed h-full w-full -z-10 opacity-40"
          ref={canvasElem}
        />
        <div className="relative z-10 flex-1 px-6 pb-24 pt-24 md:px-12 lg:px-16">
          <div className="mx-auto max-w-container space-y-24 md:space-y-section">
            <Reveal>
              <HeroSection />
            </Reveal>
            <Reveal>
              <AboutSection />
            </Reveal>
            <Reveal>
              <CoreExpertiseSection />
            </Reveal>
            <Reveal>
              <SkillsSection />
            </Reveal>
            <Reveal>
              <ProjectsSection />
            </Reveal>
            <Reveal>
              <ArchitectureSection />
            </Reveal>
            <Reveal>
              <ExperienceSection />
            </Reveal>
            <Reveal>
              <TestimonialsSection />
            </Reveal>
            <Reveal>
              <ContactSection />
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}
