import type { StaticImageData } from "next/image";
import Image from "next/image";

import ReadMoreIcon from "@/assets/svg/(project)/read-more.svg";
import { Typography } from "@/ui/components/typography/typography.component";

import {
  projectCardContainer,
  projectCardContent,
  projectCardDescription,
  projectCardFigure,
  projectLinkIcon,
} from "./project-card.css";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  link?: string;
  image: StaticImageData;
}
export function ProjectCard(props: ProjectCardProps) {
  return (
    <section className={projectCardContainer}>
      <figure className={projectCardFigure}>
        <Image
          fill
          src={props.image}
          alt={props.title + " preview image"}
          sizes="(max-width: 1280px) 100vw, 33vw"
          objectFit="cover"
        />
      </figure>
      <div className={projectCardContent}>
        <Typography as="p" weight="heading-x-bold">
          {(props.index + 1).toString().padStart(2, "0")}
        </Typography>
        <Typography as="header" type="h2" weight="heading-bold">
          {props.title}
        </Typography>
        <Typography as="p" type="p2" className={projectCardDescription}>
          {props.description}
        </Typography>

        {props.link != null && (
          <a href={props.link} target="_blank">
            <ReadMoreIcon className={projectLinkIcon} />
          </a>
        )}
      </div>
    </section>
  );
}
