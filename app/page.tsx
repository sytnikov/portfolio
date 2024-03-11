import About from "@/components/About";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
