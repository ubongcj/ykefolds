"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* ── Scroll‑based background transition ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Intersection Observer for active link tracking ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  /* ── Lock body scroll when mobile drawer is open ── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── Handlers ── */
  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeMobile();

      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [closeMobile]
  );

  return (
    <>
      <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar__logo"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <Image
              src="/images/logo.png"
              alt="Ykefolds Logo"
              width={160}
              height={50}
              priority
              style={{ objectFit: "contain" }}
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar__link${
                    activeSection === link.href ? " navbar__link--active" : ""
                  }`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            Request a Quote
          </a>

          {/* Hamburger Button */}
          <button
            className={`navbar__hamburger${
              mobileOpen ? " navbar__hamburger--open" : ""
            }`}
            onClick={toggleMobile}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`navbar__backdrop${
          mobileOpen ? " navbar__backdrop--visible" : ""
        }`}
        onClick={closeMobile}
      />

      {/* Mobile Drawer */}
      <aside
        className={`navbar__drawer${
          mobileOpen ? " navbar__drawer--open" : ""
        }`}
      >
        <ul className="navbar__drawer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`navbar__drawer-link${
                  activeSection === link.href
                    ? " navbar__drawer-link--active"
                    : ""
                }`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="navbar__cta navbar__cta--mobile"
          onClick={(e) => handleLinkClick(e, "#contact")}
        >
          Request a Quote
        </a>
      </aside>
    </>
  );
};

export default Navbar;
