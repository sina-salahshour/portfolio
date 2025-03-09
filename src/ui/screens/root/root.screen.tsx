import { AboutSection } from "./about/about.component";
import { ContactSection } from "./contact/contact.component";
import { ExperienceSection } from "./experience/experience.component";
import { HeroSection } from "./hero/hero.component";
import { ProjectsSection } from "./projects/projects.component";
import { SkillsSection } from "./skills/skills.component";
import { TestimonialSection } from "./testimonial/testimonial.component";

export default function RootScreen() {
  return (
    <>
      {/* dont forget hero section links */}
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
