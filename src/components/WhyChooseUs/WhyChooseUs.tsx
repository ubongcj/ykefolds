"use client";

import React, { useEffect, useRef } from "react";
import "./WhyChooseUs.css";

const differentiators = [
  {
    title: "Professional Service",
    description:
      "We deliver a high level of professional service and customer care to all our clients. Our customer service cuts across all industries, large and small enterprises.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L3 7V12C3 17.25 6.75 22.13 12 23C17.25 22.13 21 17.25 21 12V7L12 2Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "On-Schedule Delivery",
    description:
      "We guarantee completion of projects as scheduled by our customers, with meticulous planning and execution at every stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M12 6V12L16 14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Safety First",
    description:
      "Customer safety is our main priority. We have well trained and certified engineers as well as certified scaffold supervisors for scaffold designs and proper supervision of all projects.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 20H22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 20V14C4 14 4 12 6 11L12 4L18 11C20 12 20 14 20 14V20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 4V2"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 20V16H16V20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="1.5" fill="white" />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    description:
      "Each scaffolding system is designed specifically for your project and planned in advance to save valuable time on site. A secure, sound scaffolding is the key to success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M3 9H21"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M9 9V21"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M9 15H21"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="6" cy="6" r="1" fill="white" />
        <path
          d="M13 12L15 13.5L17 11"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Experienced Team",
    description:
      "Backed by an experienced management team for effective and safe workspaces. We endeavour to deliver the highest quality of workmanship on every project.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="3" stroke="white" strokeWidth="2" />
        <path
          d="M3 21V18C3 15.79 4.79 14 7 14H11C13.21 14 15 15.79 15 18V21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="17" cy="8" r="2.5" stroke="white" strokeWidth="2" />
        <path
          d="M19 14.5C20.21 15.14 21 16.46 21 18V21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".why-card");
    const header = section.querySelector(".why-header");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (header) {
      header.classList.add("fade-in-element");
      observer.observe(header);
    }

    cards.forEach((card, index) => {
      const element = card as HTMLElement;
      element.classList.add("fade-in-element");
      element.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="why-choose-section" ref={sectionRef}>
      <div className="why-choose-overlay"></div>
      <div className="container why-choose-content">
        <div className="why-header">
          <h2 className="section-title why-title">Why Choose Us</h2>
        </div>
        <div className="why-grid">
          {differentiators.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
