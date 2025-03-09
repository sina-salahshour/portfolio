import type { StaticImageData } from "next/image";
import Image from "next/image";

import QuoteIcon from "@/assets/svg/(testimonial)/quote.svg";
import { Typography } from "@/ui/components/typography/typography.component";

import {
  testimonialCardContainer,
  testimonialCardFigure,
  testimonialCardImage,
  testimonialCardQuote,
  testimonialCardQuoteContainer,
  testimonialCardSeparator,
} from "./testimonial-card.css";

interface TestimonialCardProps {
  avatar: StaticImageData;
  name: string;
  role: string;
  testimonial: string;
  variant?: "primary" | "secondary";
}
export function TestimonialCard(props: TestimonialCardProps) {
  return (
    <section
      className={testimonialCardContainer}
      data-secondary={props.variant === "secondary"}
    >
      <figure className={testimonialCardFigure}>
        <Image
          className={testimonialCardImage}
          src={props.avatar}
          alt={props.name + " avatar"}
        />
        <div className={testimonialCardQuoteContainer}>
          <QuoteIcon className={testimonialCardQuote} />
        </div>
      </figure>
      <Typography as="p" type="button2">
        {props.testimonial}
      </Typography>
      <hr className={testimonialCardSeparator} />
      <Typography as="h3" type="h5">
        {props.name}
      </Typography>
      <Typography as="h4" type="h6">
        {props.role}
      </Typography>
    </section>
  );
}
