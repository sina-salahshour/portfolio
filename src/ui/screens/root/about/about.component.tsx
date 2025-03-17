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
  "I'm a passionate developer who specializes in Frontend development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me. and also almost always, I manage to get my tasks before the deadline.",
  "I began my journey as a web developer in 2020, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early twenties, 4 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, Svelte, Solidjs, TypeScript, Nestjs, Tailwindcss, Supabase and much more.",
  "I'm also really interested in Linux (arch btw) ecosystem and i'm always trying different linux distros, I usually spend my time in my terminal, I even code in it (neovim btw)",
  "Apart from Programming and computer, I'm a fan of Sci fi movies and nearly finished all of Marvel and DC movies/series. I also enjoy reading sci fi novels.",
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
