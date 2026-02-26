"use client";

import { useEffect, useRef } from "react";
import "./VisionMission.css";

const cards = [
  {
    title: "Vision",
    description:
      "To be the best name in scaffold support services through offering quality services to achieve our clients' satisfaction, move up the value chain, and capitalize on quality technical professionals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Telescope body */}
        <line x1="10" y1="54" x2="28" y2="30" />
        <line x1="22" y1="54" x2="28" y2="30" />
        <circle cx="38" cy="22" r="12" />
        <circle cx="38" cy="22" r="6" />
        <line x1="28" y1="30" x2="50" y2="14" />
        {/* Lens flare rays */}
        <line x1="54" y1="10" x2="58" y2="6" />
        <line x1="56" y1="16" x2="62" y2="16" />
        <line x1="52" y1="6" x2="52" y2="2" />
      </svg>
    ),
  },
  {
    title: "Mission",
    description:
      "To enhance excellence through capability and capacity to satisfy our customers.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Bullseye target */}
        <circle cx="32" cy="32" r="28" />
        <circle cx="32" cy="32" r="20" />
        <circle cx="32" cy="32" r="12" />
        <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Objective",
    description:
      "To achieve growth in our operations and better our performance from year to year without compromising on the quality of service we render.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Growth chart */}
        <polyline points="4,52 4,8" />
        <polyline points="4,52 60,52" />
        {/* Bars */}
        <rect x="12" y="36" width="8" height="16" rx="1" fill="currentColor" opacity="0.25" />
        <rect x="26" y="28" width="8" height="24" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="40" y="18" width="8" height="34" rx="1" fill="currentColor" opacity="0.6" />
        {/* Trend line with arrow */}
        <polyline points="16,34 30,26 44,16 56,8" />
        <polyline points="48,8 56,8 56,16" />
      </svg>
    ),
  },
];

export default function VisionMission() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cardElements = section.querySelectorAll(".vm-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".vm-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("visible");
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const grid = section.querySelector(".vm-grid");
    if (grid) observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vision-mission"
      className="section-padding vision-mission-section"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-header">
          <h2>Our Vision &amp; Mission</h2>
        </div>

        <div className="vm-grid">
          {cards.map((card) => (
            <div className="vm-card" key={card.title}>
              <div className="vm-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
