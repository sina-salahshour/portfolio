import clsx from "clsx";

import Project1Image from "@/assets/images/(project)/project-1.png";
import Project2Image from "@/assets/images/(project)/project-2.png";
import Project3Image from "@/assets/images/(project)/project-3.png";
import { Typography } from "@/ui/components/typography/typography.component";
import { fullBleed, wrapper } from "@/ui/layouts/main-layout/main-layout.css";

import { ProjectCard } from "./project-card/project-card.component";
import {
  projectContainer,
  projectHeader,
  projectWrapper,
} from "./projects.css";

const projectList = [
  {
    title: "Recordifly",
    description:
      "Recordifly is a platform that people and artists can buy and sell music as nfts, the project had different sections like music player, playlist, music profile, artist profile, comment section, trading section and etc.",
    link: "https://recordifly.com",
    image: Project1Image,
  },
  {
    title: "NovaUniverse",
    description:
      "Novauniverse is a website for university apply support, it has features like requesting recommendation letters, creating university cvs and etc. I used Nextjs, framer motion, postcss for this project and created the ui components from scratch.",
    link: "https://app.novauniverse.co/",
    image: Project2Image,
  },
  {
    title: "This Portfolio Project :)",
    description:
      "I created this portfolio project to easily share my info with a single link, I used motion (formerly known as framer-motion), vanilla extract. my components are created from scratch. you can find the source code for this project from link below.",
    link: "https://github.com/sina-salahshour/portfolio/",
    image: Project3Image,
  },
];

export function ProjectsSection() {
  return (
    <div className={clsx(fullBleed, wrapper, projectWrapper)}>
      <section className={projectContainer} id="project">
        <header className={projectHeader}>
          <Typography as="h2">
            My<Typography weight="heading-x-bold"> Projects</Typography>
          </Typography>
        </header>

        <div>
          {projectList.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
