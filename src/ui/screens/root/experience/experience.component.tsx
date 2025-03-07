import clsx from "clsx";

import { Typography } from "@/ui/components/typography/typography.component";
import { fullBleed, wrapper } from "@/ui/layouts/main-layout/main-layout.css";

import {
  experienceCardStack,
  experienceContainer,
  experienceHeader,
  experienceWrapper,
} from "./experience.css";
import { ExperienceCard } from "./experience-card/experience-card.component";

export function ExperienceSection() {
  return (
    <div className={clsx(fullBleed, wrapper, experienceWrapper)}>
      <section className={experienceContainer}>
        <header className={experienceHeader}>
          <Typography as="h2">
            My <Typography weight="heading-x-bold">Experience</Typography>
          </Typography>
        </header>
        <div className={experienceCardStack}>
          {Array.from({ length: 3 }, (_, index) => (
            <ExperienceCard
              key={index}
              title="Lead Software Engineer at Google"
              dateRange="Nov 2019 - Present"
              description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
            />
          ))}
        </div>
      </section>
    </div>
  );
}
