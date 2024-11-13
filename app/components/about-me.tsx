"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../components/ui/tab-button";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { ShootingStars } from "./ui/shooting-starts";
import { StarsBackground } from "./ui/stars-background";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Programmer Analyst, Canadore College, ON</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          AWS Certified AI Practitioner Early Adopter ( Oct 2024 - Oct 2027 )
        </li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <ShootingStars className="top-full z-0" />
      <StarsBackground className="top-full z-0" />
      <div id="about" className="pt-36 z-10">
        <p className="text-slate-600 sm:text-2xl lg:text-2xl lg:leading-normal text-center">
          Get To Know More
        </p>
        <h2 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold text-center pb-2">
          About Me
        </h2>
      </div>
      <section className="text-white bg-zinc-800 rounded-3xl">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            src="/images/me-cat.png"
            width={400}
            height={400}
            alt="Portfolio"
            className="rounded-3xl"
          />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <p className="text-base lg:text-lg">
              I am a full-stack web developer with a strong background in both
              front-end and back-end technologies, specializing in creating
              scalable, responsive, and interactive web applications. My
              technical skill set includes Java, Python, Django, FastAPI,
              JavaScript, TypeScript, React, Next.js, PostgreSQL, MySQL,
              MongoDB, and Git. I have extensive experience in cloud computing,
              working with AWS, and implementing CI/CD pipelines.
            </p>
            <div className="flex flex-row justify-start mt-8 z-10">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
