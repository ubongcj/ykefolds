"use client";

import React, { useEffect, useRef } from "react";
import "./Services.css";

interface Service {
  title: string;
  description: string;
  detail: string;
  image: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Supply & Hiring",
    description:
      "Supply & hiring of all types of scaffold materials and accessories for civil, industrial, and offshore projects.",
    detail:
      "From system scaffolds to tube-and-fitting components, we stock and deliver everything you need on schedule.",
    image: "/images/services/supply.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Scaffold Consultancy",
    description:
      "Expert scaffold consultancy services to ensure safe, efficient, and compliant scaffolding solutions.",
    detail:
      "Our certified engineers provide risk assessments, design reviews, and regulatory compliance guidance.",
    image: "/images/services/consultancy.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    title: "International & Local Procurement",
    description:
      "Seamless procurement of scaffolding materials from local and international sources.",
    detail:
      "Leveraging a global supplier network, we source certified materials at competitive prices with reliable logistics.",
    image: "/images/services/procurement.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Fabrication & Installation",
    description:
      "Fabrication and installation of offshore manifolds and specialized scaffolding structures.",
    detail:
      "Our workshop and field teams handle custom fabrication, precision fitting, and turnkey installation projects.",
    image: "/images/services/fabrication.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Labour Supply",
    description:
      "Provision of skilled and certified scaffolding professionals for your project needs.",
    detail:
      "We deploy CISRS/OPITO-certified scaffolders, supervisors, and inspectors ready to mobilise at short notice.",
    image: "/images/services/labour.jpg",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll<HTMLElement>(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <p>
            Comprehensive scaffolding solutions for every project scale
          </p>
        </div>

        <div className="services-grid stagger-children" ref={gridRef}>
          {services.map((service, index) => (
            <div
              className="service-card fade-in"
              key={index}
              style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
            >
              <img
                className="service-card-bg"
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <div className="service-card-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p className="service-detail">{service.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
