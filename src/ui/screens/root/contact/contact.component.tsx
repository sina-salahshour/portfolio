import { Button } from "@/ui/components/button/button.component";
import { TextInput } from "@/ui/components/text-input/text-input.component";
import { Typography } from "@/ui/components/typography/typography.component";

import { ContactLinks } from "../contact-links/contact-links.component";
import {
  contactContainer,
  contactForm,
  contactFormActionsContainer,
  contactHeadingL2,
  contactInfo,
  contactInfoDescription,
  contactInfoEmail,
  contactInfoNumber,
} from "./contact.css";

export function ContactSection() {
  return (
    <section className={contactContainer} id="contact">
      <form className={contactForm}>
        <TextInput placeholder="Your name" />
        <TextInput placeholder="email" inputProps={{ type: "email" }} />
        <TextInput placeholder="Your website (if exists)" />
        <TextInput placeholder="How can I help?" as="textarea" />
        <div className={contactFormActionsContainer}>
          <Button>
            <Typography type="button" weight="semibold">
              Get In Touch
            </Typography>
          </Button>
          <ContactLinks />
        </div>
      </form>
      <section className={contactInfo}>
        <header>
          <div>
            <Typography weight="heading-x-bold">
              Let’s
              <Typography type="outlined" weight="heading-x-bold">
                {" "}
                talk
              </Typography>{" "}
              for
            </Typography>
          </div>
          <div className={contactHeadingL2}>
            <Typography weight="heading-x-bold">Something special</Typography>
          </div>
        </header>
        <Typography as="p" type="p2" className={contactInfoDescription}>
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </Typography>
        <Typography
          as="p"
          type="h3"
          weight="semibold"
          className={contactInfoEmail}
        >
          sina.salahshour.32@gmail.com
        </Typography>
        <Typography
          as="p"
          type="h3"
          weight="semibold"
          className={contactInfoNumber}
        >
          +989389353986
        </Typography>
      </section>
    </section>
  );
}
