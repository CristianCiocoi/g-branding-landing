"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// Import the SVG files directly as URLs
import RecentWorksButtonSvg from "@/assets/icons/recent_works_button.svg";
import DesignTool3Svg from "@/assets/icons/design_tool_3.svg";
import DesignTool4Svg from "@/assets/icons/design_tool_4.svg";
import DesignTool5Svg from "@/assets/icons/design_tool_5.svg";
import DesignTool6Svg from "@/assets/icons/design_tool_6.svg";
import Link from "next/link";

// Define the tools with their respective SVG imports
const DESIGN_TOOLS = [
  {
    icon: DesignTool3Svg,
    title: "Fast Delivery",
    description: "Get your design one at a time in just a couple days on average.",
  },
  {
    icon: DesignTool4Svg,
    title: "Top-notch quality",
    description: "Senior-level design quality at your fingertips, whenever you need it.",
  },
  {
    icon: DesignTool5Svg,
    title: "Custom Solutions",
    description: "Every design is tailored specifically to your brand and goals.",
  },
  {
    icon: DesignTool6Svg,
    title: "Unlimited Revisions",
    description: "We'll keep refining until you're completely satisfied with the result.",
  },
];

const SERVICE_LINKS = [
  { href: "/brand-identity", label: "Brand Identity" },
  { href: "/logos", label: "Logos" },
  { href: "/social-media", label: "Social Media" },
  { href: "/email", label: "Email" },
  { href: "/print-design", label: "Print Design" },
  { href: "/icons", label: "Icons" },
  { href: "/display-ads", label: "Display ads" },
];

export default function DesignToolsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Add intersection observers for animations
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [toolsRef, toolsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [tagsRef, tagsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust for faster/slower scroll
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-8 sm:py-10 md:py-20 px-4 md:px-6 lg:px-8 text-white relative">
      <div className="container mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`px-4 max-w-4xl mx-auto text-center mb-8 md:mb-12 transition-all duration-700 transform ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-satoshi text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-bold mb-4 md:mb-8 w-full select-none">
            So good, it&apos;s all you&apos;ll want.
          </h2>
          <p className="font-satoshi text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-secondary select-none">
            Say goodbye to inconsistent freelancers and overpriced agencies. With GBranding you get premium, on-demand
            design delivered quickly—so you can focus on growing your brand without the hassle.
          </p>
        </div>

        {/* Left border line - extends through entire page */}
        <div className="hidden md:block absolute left-0 top-[-9999px] bottom-[-9999px] w-px bg-secondary "></div>

        {/* Right border line - extends through entire page */}
        <div className="hidden md:block absolute right-0 top-[-9999px] bottom-[-9999px] w-px bg-secondary z-30"></div>

        <div
          ref={toolsRef}
          className={`overflow-hidden mb-12 relative transition-all duration-700 transform ${
            toolsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div
            ref={scrollRef}
            className="relative flex gap-8 lg:gap-12 cursor-grab overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          >
            {/* First set of tools */}
            {DESIGN_TOOLS.map((tool, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center w-[150px] sm:w-[200px] md:w-[300px] lg:w-[300px] transition-all duration-500 transform"
                style={{
                  transitionDelay: `${0.1 * index}s`,
                  opacity: toolsInView ? 1 : 0,
                  transform: toolsInView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <Image
                  src={tool.icon}
                  alt={tool.title}
                  width={250}
                  height={250}
                  className="mb-4 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] no-drag transition-transform duration-500 hover:scale-105"
                  draggable="false"
                />
                <h3 className="font-satoshi text-xl sm:text-2xl md:text-3xl font-bold mb-2 overflow-hidden text-ellipsis text-center w-full select-none">
                  {tool.title}
                </h3>
                <p className="font-satoshi text-xs sm:text-sm text-secondary max-w-[250px] text-center select-none">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={tagsRef}
          className={`flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-16 transition-all duration-700 transform ${
            tagsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {SERVICE_LINKS.map((link, index) => (
            <div
              key={index}
              className="font-satoshi text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white text-white select-none transition-all duration-300 hover:bg-white/10"
              style={{
                transitionDelay: `${0.05 * index}s`,
                animationDelay: `${0.05 * index}s`,
              }}
            >
              {link.label}
            </div>
          ))}
          <div className="w-full flex justify-center mt-3 md:mt-4">
            <div className="font-satoshi text-sm md:text-base px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white text-white flex items-center gap-2 select-none transition-all duration-300 hover:bg-white/10 animate-pulse-slow">
              + more
            </div>
          </div>
        </div>

        <div
          ref={ctaRef}
          className={`text-center transition-all duration-700 transform ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <p className="font-satoshi text-xl sm:text-2xl md:text-3xl max-w-3xl mx-auto mb-4 md:mb-8 select-none">
            Step into my world of design—let&apos;s craft something truly unforgettable together.
          </p>
          <div className="flex justify-center">
            <Link href="https://www.behance.net/zotagabrielaportfo" target="_blank">
              <Image
                src={RecentWorksButtonSvg}
                alt="Recent Works"
                width={250}
                height={250}
                className="w-[150px] h-auto sm:w-[200px] md:w-[250px] cursor-pointer no-drag transition-transform duration-300 hover:scale-105 animate-float"
                draggable="false"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
