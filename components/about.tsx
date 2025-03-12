"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.4);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am an innovative{" "}
        <span className="font-medium">software developer</span> with over 10
        years' experience in SaaS, B2B, and eLearning through web and mobile
        applications. Working in a{" "}
        <span className="font-medium">full-stack environment</span> using the
        latest frameworks (most recently React and Golang) to create end-to-end
        web solutions. Implementing{" "}
        <span className="font-medium">asynchronous data transfer</span> through
        REST services using Axios to communicate with the backend and
        third-party APIs. Utilizing tools like{" "}
        <span className="font-medium">
          Postgresql, Docker, and CI/CD platforms
        </span>{" "}
        like GitLab to streamline the development process. Expertise in front
        end development has made me highly proficient in{" "}
        <span className="font-medium">user experience and web standards</span>.
        Focusing on shorter development cycles using{" "}
        <span className="font-medium">Agile methodologies</span>, I can
        prioritize tasks by their type, severity, and complexity with the team
        to stay on time and below budget.
      </p>
      <p>
        Having worked at a marketing and advertising agency through the lens of
        development, I have cultivated a unique technical acumen. I have
        developed adept documentation skills from{" "}
        <span className="font-medium">
          project planning, market discovery research, building estimates
        </span>{" "}
        and presenting ideas to the team. Being a part of multiple teams at once
        has not only made me an adept multi-tasker but has provided me with{" "}
        <span className="font-medium">
          effective organizational and interpersonal communication skills
        </span>
        . Currently looking for a full-time position, I am confident that I can
        make a significant contribution to any organization.
      </p>
    </motion.section>
  );
}
