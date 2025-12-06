"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import { useCallback, useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const scrollToElement = useCallback((elementId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(elementId);
    if (element) {
      const offset = 100; // Offset for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.scrollY + elementPosition - offset;

      window.scroll({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <header className="py-4 animate-fade-in-down relative z-40 bg-white" style={{ animationDelay: "0.1s" }}>
      <div className="px-4 md:px-6 lg:px-8 container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center transition-all duration-300 hover:scale-105 relative group">
          <Image src={Logo} alt="GBranding Logo" width={120} height={24} className="h-auto" />
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="mailto:gabriela@gbranding.co"
            className="font-satoshi px-6 py-2 rounded-lg border border-primary text-primary font-medium transition-all duration-300 hover:bg-clicked-secondary relative overflow-hidden group"
            onMouseEnter={() => setHoveredLink(0)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span className="relative z-10">Contact</span>
            <span
              className={`absolute inset-0 bg-primary/5 transform transition-transform duration-300 ${
                hoveredLink === 0 ? "scale-x-100" : "scale-x-0 origin-left"
              }`}
            ></span>
          </a>
          <a
            href="javascript:void(0)"
            onClick={(e) => scrollToElement("call-calendar", e)}
            className="font-satoshi px-6 py-2 rounded-lg bg-primary text-true-white font-medium transition-all duration-300 hover:bg-clicked-primary relative overflow-hidden group cursor-pointer"
            onMouseEnter={() => setHoveredLink(2)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span className="relative z-10">LET&apos;S TALK</span>
            <span
              className={`absolute inset-0 bg-white/10 transform transition-transform duration-300 ${
                hoveredLink === 2 ? "scale-x-100" : "scale-x-0 origin-left"
              }`}
            ></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none transition-all duration-300 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-primary transform transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-0.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-primary my-1 transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-primary transform transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-30 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          <a
            href="mailto:gabriela@gbranding.co"
            className="font-satoshi px-4 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-clicked-secondary transition-all text-center"
          >
            Contact
          </a>
          <a
            href="javascript:void(0)"
            onClick={(e) => scrollToElement("call-calendar", e)}
            className="font-satoshi px-4 py-2 rounded-lg bg-primary text-true-white font-medium hover:bg-clicked-primary transition-all text-center cursor-pointer"
          >
            LET&apos;S TALK
          </a>
        </div>
      </div>
    </header>
  );
}
