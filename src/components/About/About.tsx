"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./About.css";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 15, suffix: "+", label: "Years of Experience" },
  { target: 200, suffix: "+", label: "Projects Completed" },
  { target: 50, suffix: "+", label: "Certified Engineers" },
  { target: 12, suffix: "+", label: "States Covered" },
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  /* ---- Fade-in animations for image & text ---- */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const fadeElements = section.querySelectorAll(".fade-in-left, .fade-in-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  /* ---- Counter animation for stats bar ---- */
  useEffect(() => {
    const statsEl = statsRef.current;
    if (!statsEl || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(statsEl);

    return () => {
      observer.unobserve(statsEl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // ms
    const frameRate = 16; // ~60fps
    const totalFrames = Math.round(duration / frameRate);

    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      // Ease-out cubic for a smooth deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCounters(
        stats.map((stat) => Math.round(easedProgress * stat.target))
      );

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounters(stats.map((stat) => stat.target));
      }
    }, frameRate);
  };

  return (
    <section id="about" className="about-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          {/* ---- Image Column ---- */}
          <div className="about-image fade-in-left">
            <Image
              src="/images/hero-bg.png"
              alt="Ykefolds scaffolding project"
              width={600}
              height={500}
              priority={false}
            />
          </div>

          {/* ---- Text Column ---- */}
          <div className="about-content fade-in-right">
            <span className="about-tag">About Us</span>
            <h2>Ykefolds Integrated Service Limited</h2>
            <p>
              Registered under the Companies and Allied Matters Act with
              Registration Number <strong>RC 8282995</strong>, Ykefolds Integrated
              Service Limited is a fully incorporated Nigerian company based in
              Eket, Akwa Ibom State, committed to excellence in every project
              we undertake.
            </p>
            <p>
              We have been providing scaffold solutions throughout Nigeria for
              years and are one of the highest regarded players in the industry,
              thanks to our commitment to quality, professionalism and safety. We
              pride ourselves in providing a level of customer service second to
              none, whilst giving a professional and effective service regardless
              of size or proximity.
            </p>
            <p>
              Our inventory of high quality scaffold materials ensures each
              scaffolding system is designed specifically for your project and
              planned in advance to save valuable time on site. As an approved
              training provider of DB HSE International, we also deliver
              internationally certified HSE training programmes accredited by
              IOSH (UK) and AOSH (UK).
            </p>
          </div>
        </div>

        {/* ---- Stats Bar ---- */}
        <div className="stats-bar" ref={statsRef}>
          {stats.map((stat, index) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-number">
                {counters[index]}
                {stat.suffix}
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
