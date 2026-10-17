import React from "react";
import "../assets/styles/Journey.scss";

type JourneyGroup = {
  period: string;
  items: Array<
    | string
    | { text: string; href?: string }
  >;
};

const DATA: JourneyGroup[] = [
  {
    period: "2026",
    items: [
      { text: "Joined Nium as an SDE 1, building full-stack with a strong overlap into AI-driven solutions for the FinTech space" },
    ],
  },
  {
    period: "2025",
    items: [
      { text: "Graduated with a Masters from Purdue University; focusing on Software + AI Engineering" },
      { text: "Published my MS Thesis modeling the linguistic and behavioral patterns in serial killer interviews using LLMs", href: "https://doi.org/10.25394/PGS.28904876.v1" }
    ],
  },
  {
    period: "2024 – 2023",
    items: [
      {text: "Explored Digital Twins building AI models to replicate their behavior at Laboratory of Data Science, Purdue"},
      {text: "Built my first full-fledged AI centric web app ViXlate"},
    ],
  },
  {
    period: "2023 – 2021",
    items: [
      { text: "Got Accepted into the Masters of Computer Science program at Purdue University" },
      { text: "Got promoted to Senior Full Stack Developer within 1.5 years of joining" },
      { text: "Joined Accenture's MySolution Planner team as a Full Stack Developer" },
      { text: "Published my first paper in IEEE describing a prototype to identify and plot potholes on the streets of Mumbai", href: "https://ieeexplore.ieee.org/document/9487763" },
    ],
  },
  {
    period: "2020 – 2019",
    items: [
      { text: "Presented the SQM project at IIT Bombay and won the award for the Best Algorithm" },
      { text: "Graduated with a Bachelors in Information Technology from University of Mumbai" },
    ],
  },
  {
    period: "2019 – 2016",
    items: [
      { text: "Developed my first AI-based project to identify and track plastic waste as a part of the Deep Blue project" },
      { text: "Built my first ever full fledged website to  using Python Tkinter" },
      { text: "Got interested in Coding, Physics, and Astronomy!" },
    ],
  },
];

function renderItem(it: JourneyGroup["items"][number], i: number) {
  if (typeof it === "string") return <li key={i} className="jl-li">{it}</li>;
  if (it.href) {
    return (
      <li key={i} className="jl-li">
        <a href={it.href} target="_blank" rel="noreferrer">{it.text}</a>
      </li>
    );
  }
  return <li key={i} className="jl-li">{it.text}</li>;
}

export default function JourneyList({ groups = DATA }: { groups?: JourneyGroup[] }) {
  return (
    <section className="journey-list" id="journey" aria-labelledby="journey-heading">
      <div className="jl-inner">
        <h2 className="jl-heading">My Journey</h2>
        <p className="jl-intro">Tracing the milestones, detours, and lessons along the way.</p>

        <div className="jl-grid" role="list">
          {groups.map((g, idx) => (
            <div className="jl-row" key={`${g.period}-${idx}`} role="listitem">
              <div className="jl-period">{g.period}</div>
              <ul className="jl-points">
                {g.items.map((it, i) => renderItem(it, i))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
