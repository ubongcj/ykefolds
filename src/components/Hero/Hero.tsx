"use client";

import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      {/* Background Video */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-bg.png"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay is handled via ::before on .hero */}

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__headline">
          Building Nigeria&apos;s Future &mdash; One Scaffold at a Time
        </h1>
        <p className="hero__subtitle">
          Determination leads to success through dedication and hardwork
        </p>

        <div className="hero__cta-group">
          <a href="#services" className="hero__btn hero__btn--outline">
            Our Services
          </a>
          <a href="#contact" className="hero__btn hero__btn--filled">
            Request a Quote
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <svg
          className="hero__chevron"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
