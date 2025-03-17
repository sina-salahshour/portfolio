import GitIcon from "@/assets/svg/(skills)/git.svg";
import GsapIcon from "@/assets/svg/(skills)/gsap.svg";
import JestIcon from "@/assets/svg/(skills)/jest.svg";
import LinuxIcon from "@/assets/svg/(skills)/linux.svg";
import MotionIcon from "@/assets/svg/(skills)/motion.svg";
import NextjsIcon from "@/assets/svg/(skills)/next.svg";
import ReactIcon from "@/assets/svg/(skills)/react.svg";
import ReduxIcon from "@/assets/svg/(skills)/redux.svg";
import RxjsIcon from "@/assets/svg/(skills)/rxjs.svg";
import ScssIcon from "@/assets/svg/(skills)/sass.svg";
import SocketioIcon from "@/assets/svg/(skills)/socketio.svg";
import SvelteIcon from "@/assets/svg/(skills)/svelte.svg";
import TailwindIcon from "@/assets/svg/(skills)/tailwindcss.svg";
import TanstackIcon from "@/assets/svg/(skills)/tanstack.svg";
import TypescriptIcon from "@/assets/svg/(skills)/typescript.svg";
import { Typography } from "@/ui/components/typography/typography.component";

import { SkillCard } from "./skill-card/skill-card.component";
import { skillsContainer, skillsGrid, skillsHeader } from "./skills.css";

const skills = [
  {
    name: "Typescript",
    icon: TypescriptIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Nextjs",
    icon: NextjsIcon,
  },
  {
    name: "Redux",
    icon: ReduxIcon,
  },
  {
    name: "Framer Motion",
    icon: MotionIcon,
  },
  {
    name: "GSAP",
    icon: GsapIcon,
  },
  {
    name: "Tanstack Query",
    icon: TanstackIcon,
  },
  {
    name: "Rxjs",
    icon: RxjsIcon,
  },
  {
    name: "Jest",
    icon: JestIcon,
  },
  {
    name: "Socketio",
    icon: SocketioIcon,
  },
  {
    name: "Scss",
    icon: ScssIcon,
  },
  {
    name: "Tailwind",
    icon: TailwindIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "Svelte",
    icon: SvelteIcon,
  },
  {
    name: "Linux",
    icon: LinuxIcon,
  },
];

export function SkillsSection() {
  return (
    <section className={skillsContainer} id="skills">
      <header className={skillsHeader}>
        <Typography as="h2">
          My <Typography weight="heading-x-bold">Skills</Typography>
        </Typography>
      </header>

      <div className={skillsGrid}>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
