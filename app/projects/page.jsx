"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Projects = memo(() => {
const data = [
    {
      name: "Hidden Ducted Fan eVTOL Propulsion Integration",
      img: "/neurosync-logo.png",
      description:
        `Studied aerodynamic effects of horizontally mounted electric ducted fans (EDFs) placed near an airfoil trailing edge for urban air mobility concepts. Compared EDF placement (top/middle/bottom) and inlet distance to analyze boundary-layer ingestion, drag trends, thrust-efficiency indicators, and wake behavior. Built simulation-to-test workflow.`,
      tech: "CFD, Wind Tunnel Validation",
      link: "#",
    },
    {
      name: "Ethical Systems Analysis of Hydrogen Fuel Cell Vehicles",
      img: "/sprinklify.png",
      description:
        `Built Causal Loop Diagram (10+ variables) modeling adoption feedbacks over 20-year horizon. Wrote 1,500-word analysis applying prudence (virtue ethics); presented system interventions.`,
      tech: "Systems Analysis, Causal Loop Modeling",
      link: "#",
    },
    {
      name: "HVAC Energy Predictor",
      img: "/vafuzz.png",
      description:
        `Implemented multi-variable linear regression in Python (NumPy, Pandas, Matplotlib); engineered features from usage logs. Evaluated model with train/test split & cross-validation; documented results and assumptions.`,
      tech: "Python, NumPy, Pandas, Matplotlib, Scikit-Learn",
      link: "#",
    },
    {
      name: "Personal Portfolio",
      img: "/personalportfolio.png",
      description: "You are looking at it!",
      tech: "Next.js",
      link: "https://mirzaebnul.com/", 
    },
];
  
  return (
    <section className="w-full py-12 xl:py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="h2 text-center mb-12">
          My <span className="text-[#aeacb1]">Projects</span>
        </h1>

        <div className="grid gap-6 max-w-6xl mx-auto">
          {data.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
              className="bg-[#27272c] border border-secondary/20 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="relative w-full md:w-48 h-40 md:h-32 rounded-lg overflow-hidden border-2 border-secondary/30 group-hover:border-secondary/60 transition-all duration-300">
                    <Image
                      src={project.img}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 192px"
                      className="object-cover"
                    />
                    </div>
                  </div>


                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                          {project.name}
                        </h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 rounded-lg text-secondary transition-all duration-300 w-fit text-sm"
                          >
                            <span className="font-medium">View Project</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                          </a>
                        )}
                      </div>

                      <p className="text-white/80 text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-secondary text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      <span className="font-semibold">{project.tech}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;