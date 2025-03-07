import TypescriptIcon from "@/assets/svg/(skills)/typescript.svg";
import { Typography } from "@/ui/components/typography/typography.component";

import { SkillCard } from "./skill-card/skill-card.component";
import { skillsContainer, skillsGrid, skillsHeader } from "./skills.css";

export function SkillsSection() {
  return (
    <section className={skillsContainer}>
      <header className={skillsHeader}>
        <Typography as="h2">
          My <Typography weight="heading-x-bold">Skills</Typography>
        </Typography>
      </header>

      <div className={skillsGrid}>
        {Array.from({ length: 10 }, (_, index) => (
          <SkillCard key={index} icon={TypescriptIcon} name="Typescript" />
        ))}
      </div>
    </section>
  );
}
