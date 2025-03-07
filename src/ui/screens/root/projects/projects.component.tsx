import clsx from "clsx";

import SampleProjectImage from "@/assets/images/(project)/project-1.png";
import { Typography } from "@/ui/components/typography/typography.component";
import { fullBleed, wrapper } from "@/ui/layouts/main-layout/main-layout.css";

import { ProjectCard } from "./project-card/project-card.component";
import {
  projectContainer,
  projectHeader,
  projectWrapper,
} from "./projects.css";

const sampleProject = {
  title: "Portfolio Project",
  description:
    "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
  link: "https://portfolio.drhexe.ir",
  image: SampleProjectImage,
};

export function ProjectsSection() {
  return (
    <div className={clsx(fullBleed, wrapper, projectWrapper)}>
      <section className={projectContainer}>
        <header className={projectHeader}>
          <Typography as="h2">
            My<Typography weight="heading-x-bold"> Projects</Typography>
          </Typography>
        </header>

        <div>
          {Array.from({ length: 3 }, (_, index) => (
            <ProjectCard key={index} index={index} {...sampleProject} />
          ))}
        </div>
      </section>
    </div>
  );
}
