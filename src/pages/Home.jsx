import { useEffect, useState, useRef } from "react";
import React from "react";

import { useNavigate } from "react-router-dom";

const images = [
  "/assets/hero1.png",
  "/assets/hero2.png",
  "/assets/hero3.png",
];

const featuredPresets = [
  {
    name: "Cinematic",
    image: "/assets/gd6.jpg",
    description:
      "Inspired by Hollywood films. Deep contrast and desaturated shadows create mood and emotion.",
  },
  {
    name: "Teal & Orange",
    image: "/assets/gd9.jpg",
    description:
      "Popular stylized look with warm skin tones and cool shadows. Perfect for travel vlogs and YouTube.",
  },
  {
    name: "Vintage / Retro",
    image: "/assets/gd7.jpg",
    description:
      "Faded blacks, grainy texture and sepia tones for a nostalgic, retro vibe.",
  },
  {
    name: "Dark & Moody",
    image: "/assets/gd8.jpg",
    description:
      "Desaturated, deep blacks, and cool shadows. Emphasizes emotion and artistic drama.",
  },
  {
    name: "Film Look / Analog",
    image: "/assets/gd1.jpg",
    description:
      "Emulates analog film (Kodak, Fuji, etc.). Slight grain, rich colors, balanced highlights.",
  },
];

export default function Home() {
  // Hero background slider
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleRadioChange = (idx) => {
    clearInterval(timerRef.current);
    setCurrent(idx);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  const handlePrev = () => {
    clearInterval(timerRef.current);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  const handleNext = () => {
    clearInterval(timerRef.current);
    setCurrent((prev) => (prev + 1) % images.length);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
  };

  const handleUploadClick = () => {
    navigate("/grading");
  };

  return (
    <div className="min-h-screen w-full bg-black pt-20">
      {/* HERO SECTION */}
      <section className="relative w-full h-[38vh] min-h-[220px] flex items-center justify-center overflow-hidden mb-8">
        {/* Background slideshow */}
        <div className="absolute inset-0 w-full h-full">
          {images.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={`Hero ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: idx === current ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        {/* Left Arrow */}
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-70 transition"
        >
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        {/* Right Arrow */}
        <button
          aria-label="Next"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 rounded-full p-2 hover:bg-opacity-70 transition"
        >
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
        {/* Hero Content */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-3">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight text-center">
              Welcome to Pixelfable
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-8 leading-relaxed text-center text-gray-200 max-w-xl mx-auto">
              Discover premium LUTs and color grading presets to elevate your photos and videos.
            </p>
            <a
              href="/presets"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition"
            >
              Browse Presets
            </a>
            {/* SMALL RADIO BUTTONS FOR SLIDES */}
            <form className="mt-6 flex justify-center gap-3">
              {images.map((_, idx) => (
                <label key={idx} className="flex flex-col items-center cursor-pointer">
                  <input
                    type="radio"
                    name="hero-slider"
                    checked={current === idx}
                    onChange={() => handleRadioChange(idx)}
                    className="peer appearance-none w-3 h-3 rounded-full border-2 border-white checked:bg-white checked:border-white transition"
                  />
                </label>
              ))}
            </form>
          </div>
        </div>
      </section>

      {/* ABOUT PIXELFABLE SECTION */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center bg-black p-6 md:p-8 shadow-lg">
        {/* About Description (left, always above on mobile) */}
        <div className="w-full md:w-2/3 text-white flex flex-col items-start order-1 md:order-1">
          <div className="max-w-2xl w-full">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-5 md:mb-6 text-left leading-tight md:text-left text-center">
              About Pixelfable
            </h2>
            <p className="mb-5 sm:mb-7 text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed md:text-left text-center">
              Pixelfable is dedicated to empowering creators, photographers, and filmmakers with premium color grading tools and LUTs.
              Our mission is to help you bring your visual stories to life with vibrant, professional-grade color enhancements.
              With a passion for creative expression and technical excellence, Pixelfable supports artists at every level—whether you’re a seasoned professional or just starting your creative journey.
            </p>
          </div>
        </div>
        {/* About Image (right, below on mobile) */}
        <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0 md:ml-8 order-2 md:order-2">
          <img
            src="/assets/hero4.png"
            alt="About Pixelfable"
            className="rounded-lg shadow-lg w-full max-w-[320px] h-[320px] object-cover border border-gray-700"
          />
        </div>
      </section>

      {/* FEATURED PRESETS SECTION */}
      <section className="w-full mt-10 px-2 md:px-0 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 sm:mb-10 md:mb-12 text-center leading-tight">
            Featured Presets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredPresets.map((preset, idx) => (
              <div
                key={preset.name}
                className="flex flex-col rounded-xl bg-gray-900 bg-opacity-80 shadow-lg overflow-hidden max-w-xs mx-auto"
              >
                <div className="w-full h-[160px] md:h-[180px] flex-shrink-0">
                  <img
                    src={preset.image}
                    alt={preset.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col items-center text-center">
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white mb-1 flex items-center justify-center gap-2 leading-tight text-center">
                    {preset.name}
                  </h3>
                  <div className="text-sm xs:text-base sm:text-lg text-gray-200 mb-1 leading-normal text-center">
                    {preset.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRADING SECTION */}
      <section className="w-full mt-10 flex flex-col md:flex-row items-center justify-center bg-black rounded-xl p-6 md:p-8 shadow-lg">
        {/* Image on left on desktop, above on mobile */}
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0 md:mr-8 order-1 md:order-1">
          <img
            src="/assets/gd6.jpg"
            alt="Gallery Submission Example"
            className="rounded-lg shadow-lg w-auto h-[200px] sm:h-[280px] md:h-[320px] object-cover border border-gray-700"
            style={{ maxWidth: "240px" }}
          />
        </div>
        {/* Description and button on right on desktop, below image on mobile */}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start order-2 md:order-2">
          <div className="max-w-2xl w-full">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-5 md:mb-6 text-center md:text-left leading-tight w-full">
              Submit Your Best Graded Shot!
            </h2>
            <p className="mb-5 sm:mb-7 text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed text-center md:text-left">
              Proud of your color grading skills? Upload your favorite graded image and get a chance to be featured on our site! If your work stands out, we’ll showcase it in our gallery to inspire fellow creators.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                className="bg-white text-black font-bold px-8 py-3 rounded-full shadow hover:bg-gray-200 transition"
                onClick={handleUploadClick}
              >
                Upload Your Graded Image
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}