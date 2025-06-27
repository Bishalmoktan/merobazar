"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";

export default function AutoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const SLIDE_DURATION = 3000; // 3 seconds - easily adjustable

  const slides = [
    {
      id: 1,
      title: "Find Your Comfort",
      subtitle: "Wear the best Cloths",
      description:
        "Discover the perfect blend of style and comfort with our premium collection",
      cta: "50% off on everything",
      gradient: "from-purple-600 via-blue-600 to-blue-700",
    },
    {
      id: 2,
      title: "Latest Fashion Trends",
      subtitle: "Style Meets Innovation",
      description:
        "Stay ahead with our curated selection of the season's hottest styles",
      cta: "Explore Collection",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      id: 3,
      title: "Premium Quality",
      subtitle: "Luxury Redefined",
      description:
        "Experience luxury with our handpicked, high-quality fashion pieces",
      cta: "Discover More",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Progress bar animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / (SLIDE_DURATION / 50);
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentSlide]);

  // Touch/swipe handlers
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const threshold = 50;

    if (distance > threshold) {
      nextSlide();
    } else if (distance < -threshold) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setProgress(0);
    }
  };

  const getSlideIndex = (offset: number) => {
    return (currentSlide + offset + slides.length) % slides.length;
  };

  const slideVariants = {
    center: {
      x: 0,
      scale: 1,
      zIndex: 5,
      opacity: 1,
    },
    left: {
      x: "-85%",
      scale: 0.8,
      zIndex: 2,
      opacity: 0.7,
    },
    right: {
      x: "85%",
      scale: 0.8,
      zIndex: 2,
      opacity: 0.7,
    },
    hidden: {
      x: 0,
      scale: 0.8,
      zIndex: 1,
      opacity: 0,
    },
  };

  const getSlidePosition = (slideIndex: number) => {
    if (slideIndex === currentSlide) return "center";
    if (slideIndex === getSlideIndex(-1)) return "left";
    if (slideIndex === getSlideIndex(1)) return "right";
    return "hidden";
  };

  return (
    <div className="relative w-full h-96 md:h-[500px]">
      {/* Main Carousel Container */}
      <div
        className="relative w-full h-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* All Slides */}
        {slides.map((slide, index) => {
          const position = getSlidePosition(index);
          const isCenter = position === "center";

          return (
            <motion.div
              key={slide.id}
              variants={slideVariants}
              animate={position}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`absolute inset-0 bg-gradient-to-br ${
                slide.gradient
              } shadow-2xl cursor-pointer ${
                !isCenter ? "pointer-events-none" : ""
              }`}
              onClick={() => !isCenter && goToSlide(index)}
              style={{
                transformOrigin: "center center",
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center text-white overflow-hidden">
                {/* Content - Only show full content on center slide */}
                <div
                  className={`text-center px-8 md:px-16 z-10 transition-opacity duration-500 ${
                    isCenter ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{
                      y: isCenter ? 0 : 20,
                      opacity: isCenter ? 1 : 0.8,
                      scale: isCenter ? 1 : 0.9,
                    }}
                    transition={{ delay: isCenter ? 0.2 : 0, duration: 0.6 }}
                    className={`font-bold mb-4 text-shadow-lg ${
                      isCenter ? "text-4xl md:text-6xl" : "text-2xl md:text-4xl"
                    }`}
                  >
                    {slide.title}
                  </motion.h1>

                  {isCenter && (
                    <>
                      <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-2xl md:text-3xl font-semibold mb-6 text-shadow"
                      >
                        {slide.subtitle}
                      </motion.h2>

                      <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.button
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        {slide.cta}
                      </motion.button>
                    </>
                  )}
                </div>

                {/* Decorative elements - Only on center slide */}
                {isCenter && (
                  <>
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ delay: 1, duration: 1, type: "spring" }}
                      className="absolute top-10 right-10 w-20 h-20 border-4 border-white/20 rounded-full"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                      className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full"
                    />
                  </>
                )}

                {/* Overlay for side slides */}
                {!isCenter && (
                  <div className="absolute inset-0 bg-black/20 rounded-3xl" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => goToSlide(index)}
            className="relative cursor-pointer"
          >
            {index === currentSlide ? (
              // Progress bar for current slide
              <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </div>
            ) : (
              // Dot for other slides
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-2 h-2 bg-white/60 hover:bg-white/80 rounded-full transition-colors duration-200"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
