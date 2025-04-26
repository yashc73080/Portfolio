"use client";

import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { ProjectCard } from "@/components/project-card";
import { HackathonCard } from "@/components/hackathon-card";
import { Chatbot } from "@/components/chatbot";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import TypingAnimation from "@/components/ui/typing-animation";
import Markdown from "react-markdown";
import { X } from 'lucide-react';
import Link from "next/link";
import React, { useState, useEffect } from "react";

const BLUR_FADE_DELAY = 0.04;

const GradientSparkles = () => (
  <svg
    viewBox="0 0 24 24"
    width="40"
    height="40"
    className="h-10 w-10"
  >
    <defs>
    <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#7C3AED" />
      <stop offset="33%" stopColor="#7C3AED" />
      <stop offset="42%" stopColor="#2563EB" />
      <stop offset="58%" stopColor="#2563EB" />
      <stop offset="70%" stopColor="#10B981" />
      <stop offset="100%" stopColor="#10B981" />
    </linearGradient>
    </defs>
    {/* Main center sparkle */}
    <path
      d="M12 1L14.5 9.5L22 11L14.5 12.5L12 21L9.5 12.5L2 11L9.5 9.5L12 1Z"
      fill="url(#sparkleGradient)"
    >
      <animate attributeName="opacity" values="1;0.7;1" dur="2s" repeatCount="indefinite" />
    </path>
    {/* Top right sparkle */}
    <path
      d="M19 0L20.5 3.5L24 4.5L20.5 5.5L19 9L17.5 5.5L14 4.5L17.5 3.5L19 0Z"
      fill="url(#sparkleGradient)"
    >
      <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite" />
    </path>
    {/* Bottom left sparkle */}
    <path
      d="M5 13L6.5 16.5L10 17.5L6.5 18.5L5 22L3.5 18.5L0 17.5L3.5 16.5L5 13Z"
      fill="url(#sparkleGradient)"
    >
      <animate attributeName="opacity" values="1;0.5;1" dur="1.7s" repeatCount="indefinite" />
    </path>
  </svg>
);

export default function Page() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after a short delay
    const showTimer = setTimeout(() => setShowPopup(true), 2000);
    
    // Hide the popup after 5 seconds
    const hideTimer = setTimeout(() => setShowPopup(false), 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-9">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                {DATA.avatarUrl ? (
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                ) : (
                  <AvatarFallback className="text-4xl font-bold">{DATA.initials}</AvatarFallback>
                )}
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="typing-animation" className="-mt-10">
        <div className="max-w-[600px]">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <TypingAnimation
              phrases={["Software Engineering", "Machine Learning", "Full Stack"]}
              typingSpeed={100}
              backspaceSpeed={50}
              pauseTime={1200}
              className="text-2xl font-medium"
            />
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                links={work.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
                description={education.description}
                links={education.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Some cool stuff I&apos;ve built
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve developed many projects, AI-powered web applications to machine learning models.
                  Here are some of my favorites. 
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Building things with friends
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I love participating in hackathons and learning about wonderful and innovative ideas from my 
                  teammates and other groups.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Please feel free to reach out to me via{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>{" "}
                or{" "}
                <Link
                  href="mailto:yash.chennawar@gmail.com"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </Link>{" "} 
                if you have any questions or just want to chat.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <div className="fixed bottom-[20%] right-6 flex items-center">
      <div className="relative">
        {showPopup && (
          <div className="absolute bottom-full right-0 mb-2 transform-none">
            <div className="relative bg-foreground text-background px-5 py-1 rounded-lg shadow-lg animate-fade-in-out text-sm whitespace-nowrap">
              Try me!
              <div className="absolute -bottom-1 right-3 w-3 h-3 transform rotate-45 bg-foreground" />
            </div>
          </div>
        )}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-foreground hover:bg-foreground/90 text-background rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          aria-label={isChatOpen ? "Close chat" : "Open chat"}
        >
          {isChatOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <GradientSparkles />
          )}
        </button>
      </div>
      
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[30rem] bg-background border border-foreground/20 text-foreground rounded-md shadow-xl overflow-hidden flex flex-col">
          <Chatbot onClose={() => setIsChatOpen(false)}/>
        </div>
      )}
    </div>

    </main>
  );
}