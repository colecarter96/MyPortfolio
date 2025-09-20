"use client";

import { useState, useEffect } from "react";

export default function ProjectsClient() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  // get the search params on the client
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const projectToOpen = params.get("open");
    if (projectToOpen) {
      const index = parseInt(projectToOpen, 10);
      if (!isNaN(index)) setOpenIndexes([index]);
    }
  }, []);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const projects = [
    {
      title: "Blueprint",
      type: "(Web)",
      techStack: ["NextJS", "Vercel", "TypeScript"],
      team: ["Me"],
      details:
        'Blueprint is a web app made as "visual discovery engine" for video content. Think like Pinterest or Cosmos but for the video stuff. Everything from Hooks and Fonts to videos in a specific niche.',
      img: "",
      link: "https://blueprint-five-ruby.vercel.app/",
    },
    {
      title: "Locked In: Habit Tracker",
      type: "(iOS)",
      techStack: ["SwiftUI"],
      team: ["Me"],
      details:
        "A mobile app that helps track habits. A design first app that helped me learn swift and designing from Figma to real app as fast as possible. With the purpose of encouraging you to keep all of your habits completed for each day.",
      img: "/lockedInLogo2Light.png",
      link: "https://apps.apple.com/us/app/locked-in-habit-tracker/id6751342228",
    },
    {
      title: "Pants Index",
      type: "(Web)",
      techStack: ["NextJS", "Vercel", "TypeScript"],
      team: ["Me"],
      details:
        "Measurements first pants shopping. As a man there isn't much we can do with our outfits, so getting the pants right is a crucial piece. Pants Index aims at helping solve that problem.",
      img: "/redWhiteLogoSq.svg",
      link: "https://pants-index.vercel.app/",
    },
    {
      title: "Government Trading Automation",
      type: "(Server)",
      techStack: ["AWS", "Alpaca API", "Python", "Beautiful Soup"],
      team: ["Me", "Liam Mathers"],
      details:
        "A US Government Politician Trading Automation. Built using Alpaca API, a custom web scraper, and ran on AWS. This automation would execute trades daily with a paper trading account.",
      img: "",
      link: "https://matter-alpha.vercel.app/projects",
    },
  ];

  return (
    <main>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`border-b-[1.5px] ${
            index === 0 ? "border-t-[1.5px] mt-40" : ""
          } ${index === projects.length - 1 ? "mb-40" : ""}`}
        >
          <div
            onClick={() => toggle(index)}
            className="flex justify-between px-5 lg:px-70 py-8 md:py-12 cursor-pointer"
          >
            <h1 className="text-xl md:text-2xl lg:text-4xl flex items-baseline gap-2">
              (0{index + 1}) {project.title}
              <sup className="text-sm md:text-lg lg:text-xl font-normal">
                {project.type}
              </sup>
            </h1>

            <span className="text-2xl md:text-4xl pr-2 transition-transform duration-300">
              {openIndexes.includes(index) ? "−" : "+"}
            </span>
          </div>

          {openIndexes.includes(index) && (
            <div>
              <div className="flex flex-col lg:gap-8 lg:flex-row lg:justify-between md:items-center px-5 lg:px-70 pb-8 text-gray-700 pt-4">
                <div>
                  <div className="flex flex-row gap-20 pb-10">
                    <div>
                      <p className="font-semibold text-xl">TEAM</p>
                      <div className="flex flex-col mt-1">
                        {project.team.map((member, i) => (
                          <p key={i} className="font-semibold text-lg">
                            {member}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-xl">TECH STACK</p>
                      <div className="flex flex-col mt-1">
                        {project.techStack.map((techStack, i) => (
                          <p key={i} className="font-semibold text-lg">
                            {techStack}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="underline pb-4 md:pb-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.title} ↗
                    </a>
                  </p>

                  <p className="mb-4 text-xl md:text-3xl font-semibold pt-4">
                    {project.details}
                  </p>
                  
                </div>
                {project.img && project.img.trim() !== "" && (
                    <img
                        src={project.img}
                        alt={project.title}
                        className="bg-black max-w-sm w-auto"
                    />
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
