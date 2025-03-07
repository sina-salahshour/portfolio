import { ExperienceSection } from "./experience/experience.component";
import { HeroSection } from "./hero/hero.component";
import { SkillsSection } from "./skills/skills.component";

export default function RootScreen() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
    </>
  );
}
