import type { SVGIcon } from "@/types/svg-icon";
import { Typography } from "@/ui/components/typography/typography.component";

import {
  experienceCardContainer,
  experienceDateRange,
  experienceHeading,
} from "./experience-card.css";

interface ExperienceCardProps {
  icon?: SVGIcon;
  title: string;
  description: string;
  dateRange: string;
}
export function ExperienceCard(props: ExperienceCardProps) {
  return (
    <section className={experienceCardContainer}>
      <header className={experienceHeading}>
        {props.icon != null && <props.icon />}
        <Typography as="h3" type="h5" weight="semibold">
          {props.title}
        </Typography>
        <Typography
          className={experienceDateRange}
          as="h4"
          type="h6"
          weight="semibold"
        >
          {props.dateRange}
        </Typography>
      </header>
      <Typography as="p" type="p2">
        {props.description}
      </Typography>
    </section>
  );
}
