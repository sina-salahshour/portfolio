import type { ComponentProps } from "react";

import DummyTestimonialAvatar from "@/assets/images/(testimonial)/saeed-najafi.jpg";
import { Typography } from "@/ui/components/typography/typography.component";

import {
  testimonialContainer,
  testimonialHeader,
  testimonialStack,
} from "./testimonial.css";
import { TestimonialCard } from "./testimonial-card/testimonial-card.component";

const dummyTestimonials = Array.from(
  { length: 1 },
  (_, index) =>
    ({
      name: "Saeed Najafi",
      testimonial:
        "During the past few years, I have had the pleasure of working with Sina on multiple successful projects. Sina is not only highly experienced in his field, but he also excels in teamwork and possesses extensive knowledge of cutting-edge technologies.",
      avatar: DummyTestimonialAvatar,
      role: "Tech Lead",
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
