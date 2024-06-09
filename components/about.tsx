"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After enrolling in a university to pursue a degree in{" "}
        <span className="font-medium">Mechanical Engineering</span>, I decided to pursue my
        passion for programming at the same time. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">frontEnd web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        .I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Remote position or a one time job</span> as a web development.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy writing songs, watching movies, and playing football. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and science</span>.
      </p>
    </motion.section>
  );
}
