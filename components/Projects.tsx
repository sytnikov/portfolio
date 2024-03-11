import React from "react";

import { projectsData } from "@/lib/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section>
      <h2>My projects</h2>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
