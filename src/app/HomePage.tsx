"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GoodDesignSection from "@/components/GoodDesignSection";
import CompanyDescriptionSection from "@/components/CompanyDescriptionSection";
import DesignToolsSection from "@/components/DesignToolsSection";
import FAQSection from "@/components/FAQSection";
import Image from "next/image";
import Logo from "@/assets/icons/logo.svg";
import Script from "next/script";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [splashVisible, setSplashVisible] = useState(true);
  const [splashFading, setSplashFading] = useState(false);

  // Structured data for rich results in search engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GBranding - Premium Branding on Subscription",
    description: "Unlimited branding designs for a flat monthly fee. Pause or cancel anytime.",
    url: "https://gbranding.co",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gbranding.co/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    offers: {
      "@type": "Offer",
      price: "495.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  // Additional structured data for Local Business
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "GBranding",
    description: "Premium branding design services on subscription",
    url: "https://gbranding.co",
    logo: "https://gbranding.co/logo.png",
    sameAs: [
      "https://www.facebook.com/gbranding",
      "https://www.instagram.com/gbranding",
      "https://twitter.com/gbranding",
      "https://www.linkedin.com/company/gbranding",
    ],
    priceRange: "$$$",
    openingHours: "Mo-Fr 09:00-17:00",
    telephone: "+40741401544",
    email: "gabriela@gbranding.co",
  };

  // FAQPage structured data
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is GBranding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GBranding is a premium branding design service that works on a subscription model, providing unlimited design requests for a flat monthly fee.",
        },
      },
      {
        "@type": "Question",
        name: "How much does GBranding cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GBranding offers subscription plans starting at $495 per month with no hidden fees. You can pause or cancel anytime.",
        },
      },
      {
        "@type": "Question",
        name: "What services are included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our service includes logo design, brand identity, brand guidelines, marketing materials, social media graphics, and more.",
        },
      },
    ],
  };

  useEffect(() => {
    // Make all images non-draggable
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.setAttribute("draggable", "false");
      img.classList.add("no-drag");
    });

    // Initialize smooth scroll behavior
    setMounted(true);

    // Add smooth scrolling to all internal links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href.startsWith(window.location.origin) && link.href.includes("#")) {
        e.preventDefault();
        const id = link.href.split("#")[1];
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    // Simulate content loading with a minimum display time for the splash screen
    const timer = setTimeout(() => {
      setSplashFading(true);

      // After fade out animation, hide the splash screen
      const hideTimer = setTimeout(() => {
        setSplashVisible(false);
      }, 500); // Matches the transition duration

      return () => clearTimeout(hideTimer);
    }, 1500);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Add structured data for website */}
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Add structured data for local business */}
      <Script
        id="structured-data-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Add structured data for FAQs */}
      <Script
        id="structured-data-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Main content (always rendered) */}
      <main
        className={`min-h-screen bg-white flex flex-col w-full overflow-hidden scroll-smooth relative transition-opacity duration-500 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        aria-live="polite"
      >
        <Header />
        <div className="flex-grow perspective-1000">
          <HeroSection />
          <div id="about" className="scroll-mt-16">
            <GoodDesignSection />
          </div>
          <div id="company" className="scroll-mt-16">
            <CompanyDescriptionSection />
          </div>
          <div className="relative bg-black w-full">
            <div id="tools" className="scroll-mt-16">
              <DesignToolsSection />
            </div>

            <div id="faq" className="scroll-mt-16">
              <FAQSection />
            </div>
          </div>
        </div>
      </main>

      {/* Splash screen overlay (conditionally rendered on top) */}
      {splashVisible && (
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-500 ${
            splashFading ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated circles in background */}
            <div className="absolute -z-10">
              <svg width="300" height="300" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="50" fill="none" stroke="#f0f0f0" strokeWidth="1" />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="#f5f5f5"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  style={{
                    transformOrigin: "center",
                    animation: "rotateCircle 8s linear infinite",
                  }}
                />
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="#f8f8f8"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  style={{
                    transformOrigin: "center",
                    animation: "rotateCircleReverse 12s linear infinite",
                  }}
                />
              </svg>
            </div>

            <Image
              src={Logo}
              alt="GBranding Logo"
              width={180}
              height={36}
              className="mb-8 animate-pulse-slow"
              priority
            />
            <div className="h-[2px] w-48 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{
                  width: "100%",
                  animation: "progressBar 1.5s ease-in-out",
                }}
              ></div>
            </div>
            <p className="mt-4 text-sm text-gray-400 font-light tracking-wide">Creating magic...</p>
          </div>

          <style jsx global>{`
            @keyframes progressBar {
              0% {
                width: 0%;
              }
              20% {
                width: 20%;
              }
              50% {
                width: 60%;
              }
              100% {
                width: 100%;
              }
            }

            @keyframes rotateCircle {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes rotateCircleReverse {
              from {
                transform: rotate(360deg);
              }
              to {
                transform: rotate(0deg);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
