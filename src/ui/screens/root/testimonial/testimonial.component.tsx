import type { ComponentProps } from "react";

import DummyTestimonialAvatar from "@/assets/images/(testimonial)/project-1.png";
import { Typography } from "@/ui/components/typography/typography.component";

import {
  testimonialContainer,
  testimonialHeader,
  testimonialStack,
} from "./testimonial.css";
import { TestimonialCard } from "./testimonial-card/testimonial-card.component";

const dummyTestimonials = Array.from(
  { length: 3 },
  (_, index) =>
    ({
      name: "Evren Shah",
      testimonial:
        "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      avatar: DummyTestimonialAvatar,
      role: "Designer",
      variant: index === 1 ? "secondary" : "primary",
    }) satisfies ComponentProps<typeof TestimonialCard>,
);

export function TestimonialSection() {
  return (
    <section className={testimonialContainer}>
      <header className={testimonialHeader}>
        <Typography as="h2">
          My <Typography weight="heading-x-bold">Testimonial</Typography>
        </Typography>
      </header>

      <div className={testimonialStack}>
        {dummyTestimonials.map((testimonial, key) => (
          <TestimonialCard key={key} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
