import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Nuesa from "@/public/nuesa.jpg";
import Movies from "@/public/movies.jpg";
import Budgets from "@/public/budgets.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
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
    title: "Graduated bootcamp",
    location: "Gwagwalada",
    description:
      "I graduated after 8 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Uniabuja",
    description:
      "I worked as a front-end developer for 6 month in 1 job .",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Gwagwalada",
    description:
      "I'm now working to be a full-stack developer and also working as a freelancer. My stack includes React, Next.js, Tailwind, SQL. I'm open to remote opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "NUESA WEBSITE",
    description: "Served as a Front-End and partial Back-End Developer for a startup project over a two-month period.",
    tags: ["React", "Next.js", "GraphQL", "Tailwind", "email.js", "react-icons"],
    imageUrl: Nuesa,
    link: "https://nueasa-uofa.vercel.app/" // Replace with the actual URL
  },
  {
    title: "LUCIDIZE MOVIES",
    description: "Developed a dynamic Movies App using React, providing users with the latest movies, detailed overviews, ratings, and trailers.",
    tags: ["React", "CSS", "Redux", "axios", "fortawesome", "react-alice-carousel", "react-fontawesome", "react-responsive-modal", "react-router-dom"],
    imageUrl: Movies,
    link: "https://lucidizemovies.vercel.app/movies" // Replace with the actual URL
  },
  {
    title: "LUCID BUDGETS",
    description: "Created a Budget App that allows users to lay out their budget plans, with an automated system to sum up expenses and provide a comprehensive financial overview.",
    tags: ["React.js", "CSS", "react-icons"],
    imageUrl: Budgets,
    link: "https://lbudgets.vercel.app/" // Replace with the actual URL
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
