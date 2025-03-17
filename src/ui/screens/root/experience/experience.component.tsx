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

const experienceList = [
  {
    company: "BlackDynamix",
    role: "Fronted Developer",
    date: "Apr 2023 - Jan 2024",
    desciprion:
      "Developed and maintained user interfaces and logical components using Next.js. Conducted cross-browser and device testing to ensure compatibility and consistent user experiences. Ensured that web application is accessible to all users by following accessibility guidelines and best practices. Created reusable HOCs to encapsulate common functionality and improve code reusability. Ensured that web application is accessible to all users by following accessibility guidelines and best practices. Implemented fast and high-quality admin panels and online shopping websites using React/Next.js.",
  },
  {
    company: "Webcentriq",
    role: "Fronted Developer",
    date: "Feb 2022 - Mar 2023",
    desciprion:
      "Developed and maintained user interfaces and logical components using Next.js, Parcel, Svelte, HTML. Crafted SEO strategy and intuitive interface for the site to achieve prominent ranking across search engines. Took charge of developing MVP and working overtime to ensure that it got completed by the deadline and completed 100% of deadlines ahead of schedule. Ensured that web application is accessible to all users by following accessibility guidelines and best practices. Continually research the current and emerging technologies and propose changes where needed.",
  },
  {
    company: "Sazmand",
    role: "Fronted Developer",
    date: "Mar 2020 - Jan 2022",
    desciprion:
      "Developed and maintained Projects using Next.js, Parcel, Svelte, HTML. Collaborated with backend developers to optimize server-side performance and implement efficient data retrieval and processing techniques. Took charge of developing MVP and working overtime to ensure that it got completed by the deadline and completed 100% of deadlines ahead of schedule. Worked on a cross functional team consisting of Designers, Backend developers, Project Managers and Tech leads.",
  },
];

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
          {experienceList.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={`${experience.role} at ${experience.company}`}
              dateRange={experience.date}
              description={experience.desciprion}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
