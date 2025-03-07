import type { SVGIcon } from "@/types/svg-icon";
import { Typography } from "@/ui/components/typography/typography.component";

import { skillCardContainer, skillCardIcon } from "./skill-card.css";

interface SkillCardProps {
  name: string;
  icon: SVGIcon;
}
export function SkillCard(props: SkillCardProps) {
  return (
    <div className={skillCardContainer}>
      <props.icon className={skillCardIcon} />
      <Typography type="h5" weight="heading-bold">
        {props.name}
      </Typography>
    </div>
  );
}
