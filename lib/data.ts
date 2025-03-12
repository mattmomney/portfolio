import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Windsor, ON.",
    description:
      "I graduated with a 4.0 and received an advanced diploma in Web Development from St. Clair College. I immediately found a position at a digital Advertising and Marketing agency.",
    icon: React.createElement(LuGraduationCap),
    date: "2016",
  },
  {
    title: "Application Developer",
    location: "Windsor, ON. REMOTE",
    description:
      "I worked as a full-stack application developer for over 7 years at Alteris Group Canada. I was hired right out of college.",
    icon: React.createElement(FaReact),
    date: "2015 - 2023",
  },
  {
    title: "Technical Project Manager",
    location: "Windsor, ON. REMOTE",
    description:
      "I worked as a technical project manager for over 3 years overseeing the eLearning process at Alteris Group Canada in tandem with development.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Software Engineer",
    location: "Windsor, ON. REMOTE",
    description:
      "Currently work as a Software Engineer at Applied Systems as the front-end lead of a generative UI project.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "XML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Golang",
  "Ruby",
  ".NET",
  "C#",
  "PostgreSQL",
  "Python",
  "Django",
] as const;