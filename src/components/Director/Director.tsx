"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "./Director.css";

const Director: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const fadeElements = section.querySelectorAll(
      ".fade-in-left, .fade-in-right"
    );

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

    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="director" className="director-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Director</h2>
          <p>Leadership rooted in experience, driven by excellence</p>
        </div>

        <div className="director-grid">
          <div className="director-image fade-in-left">
            <Image
              src="/images/director.jpg"
              alt="Johnson Udoh - Managing Director"
              width={500}
              height={600}
              priority={false}
            />
          </div>

          <div className="director-content fade-in-right">
            <span className="director-tag">Managing Director</span>
            <h3>Johnson Udoh</h3>
            <p>
              With over a decade of hands-on experience in the scaffolding and
              construction industry, Johnson Udoh founded Ykefolds
              Integrated Service Limited with a clear vision: to deliver
              world-class scaffolding solutions that meet the highest standards
              of safety, quality, and reliability.
            </p>
            <p>
              Under his leadership, Ykefolds has grown from a regional operation
              into a trusted name across civil, industrial, and offshore sectors
              in Nigeria. His deep understanding of project requirements, coupled
              with an unwavering commitment to client satisfaction, has earned the
              company a reputation for excellence and dependability.
            </p>
            <p>
              Mr. Udoh is passionate about capacity building and workforce
              development. He has championed the training and certification of
              hundreds of scaffolding professionals, ensuring that every project
              is executed by competent, safety-conscious personnel. His strategic
              approach to procurement, partnerships, and service delivery
              continues to position Ykefolds as an industry leader.
            </p>

            <div className="director-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <span>Industry-Certified Professional</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <span>HSE & Safety Advocate</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <span>Strategic Business Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
