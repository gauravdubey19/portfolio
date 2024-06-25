import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero devName="GAURAV" desc="Currently pursuving MBA..." />
      {/* SRiZA BiSWAS */}
      <About />
      <TechStack />
      <Projects />
    </main>
  );
}
