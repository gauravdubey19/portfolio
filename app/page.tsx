import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero devName="SRiZA BiSWAS" desc="Currently pursuving MBA..." />
      <About
        devName="Sriza Biswas"
        resume="/assets/{add-resume-in-public/assets-and-write-name-of-file}.pdf"
      />
      <TechStack />
      <Projects />
    </main>
  );
}
