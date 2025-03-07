import HeroBanner from "@/assets/svg/(hero)/banner.svg";
import { Typography } from "@/ui/components/typography/typography.component";

import {
  headingText,
  heroBanner,
  heroContainer,
  selfDescription,
} from "./hero.css";

export function HeroSection() {
  return (
    <section className={heroContainer}>
      <div>
        <main className={headingText}>
          <div>
            <Typography>Hello I’am </Typography>
            <Typography weight="heading-x-bold">Sina Salahshour.</Typography>
          </div>
          <div>
            <Typography weight="heading-x-bold">Frontend </Typography>
            <Typography type="outlined" weight="heading-x-bold">
              Developer
            </Typography>
          </div>
          <div>
            <Typography>Based In </Typography>
            <Typography weight="heading-x-bold">Tabriz</Typography>
          </div>
        </main>
        <Typography as="p" type="p2" className={selfDescription}>
          Dedicated and skilled frontend developer with over{" "}
          <Typography type="p2" weight="semibold">
            4 years of experience
          </Typography>{" "}
          in designing and implementing user interfaces and web applications
          using{" "}
          <Typography type="p2" weight="semibold">
            React&nbsp;and&nbsp;Next.js
          </Typography>
          . Proven track record of quickly learning and mastering new
          technologies. Demonstrates the ability to identify, analyze, and{" "}
          <Typography type="p2" weight="semibold">
            resolve&nbsp;complex&nbsp;issues&nbsp;in&nbsp;various&nbsp;projects
          </Typography>
          . Collaborates effectively with{" "}
          <Typography type="p2" weight="semibold">
            cross-functional teams
          </Typography>
          , showcasing strong soft skills such as{" "}
          <Typography type="p2" weight="semibold">
            time management
          </Typography>
          ,{" "}
          <Typography type="p2" weight="semibold">
            attention to detail
          </Typography>
          , and{" "}
          <Typography type="p2" weight="semibold">
            providing support to the team
          </Typography>
          .
        </Typography>
      </div>
      <HeroBanner className={heroBanner} />
    </section>
  );
}
