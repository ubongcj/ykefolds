"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Gallery.css";

interface GalleryItem {
  id: number;
  src: string;
  category: "Civil" | "Industrial" | "Offshore";
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/hero-bg.png",
    category: "Industrial",
    title: "Industrial Scaffolding Project",
  },
  {
    id: 2,
    src: "/images/hero-bg.png",
    category: "Offshore",
    title: "Offshore Platform Installation",
  },
  {
    id: 3,
    src: "/images/hero-bg.png",
    category: "Civil",
    title: "Civil Construction Support",
  },
  {
    id: 4,
    src: "/images/hero-bg.png",
    category: "Industrial",
    title: "Refinery Maintenance Scaffolding",
  },
  {
    id: 5,
    src: "/images/hero-bg.png",
    category: "Offshore",
    title: "Subsea Pipeline Support Structure",
  },
  {
    id: 6,
    src: "/images/hero-bg.png",
    category: "Civil",
    title: "Bridge Restoration Framework",
  },
  {
    id: 7,
    src: "/images/hero-bg.png",
    category: "Industrial",
    title: "Power Plant Access Systems",
  },
  {
    id: 8,
    src: "/images/hero-bg.png",
    category: "Offshore",
    title: "Wind Farm Assembly Platform",
  },
];

const filterCategories = ["All", "Civil", "Industrial", "Offshore"] as const;

type FilterCategory = (typeof filterCategories)[number];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryItems);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Filter items when active filter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(
        galleryItems.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gallery-item-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredItems]);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = useCallback(
    (direction: number) => {
      setLightboxIndex((prev) => {
        const next = prev + direction;
        if (next < 0) return filteredItems.length - 1;
        if (next >= filteredItems.length) return 0;
        return next;
      });
    },
    [filteredItems.length]
  );

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("lightbox")) {
      closeLightbox();
    }
  };

  return (
    <section id="gallery" className="section-padding" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2>Our Projects</h2>
          <p>
            Showcasing our expertise across civil, industrial, and offshore
            projects
          </p>
        </div>

        <div className="gallery-filters">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn${activeFilter === category ? " active" : ""}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <div className="gallery-item-info">
                  <h4>{item.title}</h4>
                  <span className="gallery-item-category">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={handleBackdropClick}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={() => navigateLightbox(-1)}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <img
            src={filteredItems[lightboxIndex]?.src}
            alt={filteredItems[lightboxIndex]?.title}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={() => navigateLightbox(1)}
            aria-label="Next image"
          >
            &#8250;
          </button>

          <div className="lightbox-caption">
            <h4>{filteredItems[lightboxIndex]?.title}</h4>
            <span>{filteredItems[lightboxIndex]?.category}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
