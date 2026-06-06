"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const experience = [
  {
    img: "/ttuh.png",
    company: "Texas Tech University - FCA Laboratory",
    position: "Undergraduate Research Assistant",
    content:
      `• Conducting research on aeronautical flows with a focus on improving aerodynamic, aeroelastic, and aeroacoustic performances.
• Applying passive and active flow control techniques to enhance fluid-structure interaction behavior.
• Supporting experimental setup design and data collection for ongoing aerodynamic performance studies.`,
    timeline: "August 2025 - Current",
  },
  {
    img: "/ttu.png",
    company: "Red Raider Racing",
    position: "Apprenticeship Trainee",
    content:
      `• Supported shop tasks and documentation for design review.`,
    timeline: "April 2025 - Current",
  },
  {
    img: "/ttu.png",
    company: "Texas Tech IT Help Central",
    position: "Student Assistant",
    content:
      `• Resolved 15-20 technical support tickets per shift (Windows/macOS login issues, imaging, account resets); documented fixes in the knowledge base.
• Reorganized office records (300+ files), reducing retrieval time by ~40%.`,
    timeline: "September 2025 - Current",
  },
  {
    img: "/JBL.jpg",
    company: "Jamuna Bank",
    position: "IT Intern - Technical Systems & Data Analysis",
    content:
      `• Automated 10+ data workflows and dashboards in MATLAB/Excel, accelerating report generation by ~35% for the treasury team.
• Drafted 8 standard operating procedures for troubleshooting and secure access provisioning.`,
    timeline: "June 2025 - August 2025",
  },
  {
    img: "/nif.png",
    company: "Next Initiative Foundation",
    position: "Co-Founder",
    content:
      `• Coordinated 20+ awareness events (online and in-person) reaching 500+ students, managing logistics and media outreach.`,
    timeline: "September 2020 - January 2025",
  },
];

const WorkExperience = memo(() => {
  return (
    <section className="w-full py-12 xl:py-20">
      <div className="container mx-auto">
        <h2 className="h2 text-center mb-12">
          Work <span className="text-secondary">Experience</span>
        </h2>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3 }}
              className="bg-[#27272c] border border-secondary/20 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden border-2 border-secondary/30 group-hover:border-secondary/60 transition-all duration-300">
                    <Image
                      src={item.img}
                      alt={item.company}
                      fill
                      sizes="(max-width: 768px) 96px, 112px"
                      className="object-contain p-2 bg-white/5"
                    />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                          {item.company}
                        </h3>
                        <p className="text-secondary font-semibold mt-1">
                          {item.position}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
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
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="whitespace-nowrap">{item.timeline}</span>
                      </div>
                    </div>

                    <div className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
                      {item.content}
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

WorkExperience.displayName = 'WorkExperience';

export default WorkExperience;
