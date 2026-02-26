"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./Footer.css";

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          {/* Footer Top - Logo & Motto */}
          <div className="footer-top">
            <div className="footer-logo">
              <Image
                src="/images/logo.png"
                alt="Ykefolds Logo"
                width={120}
                height={40}
                style={{ height: "40px", width: "auto" }}
              />
            </div>
            <p className="footer-motto">
              Determination leads to success through dedication and hardwork
            </p>
          </div>

          {/* Footer Grid */}
          <div className="footer-grid">
            {/* Column 1 - Quick Links */}
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Column 2 - Our Services */}
            <div className="footer-col">
              <h3>Our Services</h3>
              <ul>
                <li><a href="#services">Supply &amp; Hiring</a></li>
                <li><a href="#services">Scaffold Consultancy</a></li>
                <li><a href="#services">Procurement</a></li>
                <li><a href="#services">Fabrication &amp; Installation</a></li>
                <li><a href="#services">Labour Supply</a></li>
              </ul>
            </div>

            {/* Column 3 - Contact Info */}
            <div className="footer-col">
              <h3>Contact Info</h3>
              <div className="footer-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.004 1.004 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>+234 803 XXX XXXX</span>
              </div>
              <div className="footer-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>ykefold@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                <span>3 Ibong Ukiere Street, Off Upua Road, Eket, Akwa Ibom State</span>
              </div>
            </div>

            {/* Column 4 - Newsletter */}
            <div className="footer-col">
              <h3>Newsletter</h3>
              <p className="newsletter-text">
                Stay updated with our latest projects and news
              </p>
              <form
                className="newsletter-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>

          {/* Registration */}
          <div className="footer-registration">
            <p>
              RC 8282995 - Registered under Companies and Allied Matters Act 2020
            </p>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>
              &copy; 2025 Ykefolds Integrated Service Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        &#8593;
      </button>
    </>
  );
};

export default Footer;
