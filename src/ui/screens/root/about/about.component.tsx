import AboutBanner from "@/assets/svg/(about)/banner.svg";
import { Typography } from "@/ui/components/typography/typography.component";

import {
  aboutBanner,
  aboutContainer,
  aboutInfoContainer,
  aboutInfoHeader,
  aboutInfoStack,
} from "./about.css";

const aboutMeData = [
  "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.",
  "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",
  "When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.",
];

export function AboutSection() {
  return (
    <div id="about" className={aboutContainer}>
      <AboutBanner className={aboutBanner} />
      <section className={aboutInfoContainer}>
        <header className={aboutInfoHeader}>
          <Typography as="h2">
            About<Typography weight="heading-x-bold"> Me</Typography>
          </Typography>
        </header>
        <div className={aboutInfoStack}>
          {aboutMeData.map((info, index) => (
            <Typography key={index} as="p" type="p2">
              {info}
            </Typography>
          ))}
        </div>
      </section>
    </div>
  );
}
