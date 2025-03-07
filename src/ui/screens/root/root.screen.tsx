import { AboutSection } from "./about/about.component";
import { ExperienceSection } from "./experience/experience.component";
import { HeroSection } from "./hero/hero.component";
import { ProjectsSection } from "./projects/projects.component";
import { SkillsSection } from "./skills/skills.component";

export default function RootScreen() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}
