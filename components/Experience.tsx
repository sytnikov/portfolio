"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/ThemeContext";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="!max-w-[60rem]">
      <h2>My experience</h2>
      <VerticalTimeline lineColor="" layout="1-column-left">
        {experiencesData.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              className="vertical-timeline-element--work"
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "#4b5563",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-bold capitalize">{exp.title}</h3>
              <p className="font-normal !mt-0">{exp.location}</p>
              <p className="!font-normal text-gray-700">{exp.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
