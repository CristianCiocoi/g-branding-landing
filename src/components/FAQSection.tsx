"use client";

import { BookCallButton, CallCalendar } from "@/components/BookCallCard";
import { useState } from "react";
import Logo from "@/assets/icons/logo_white.svg";
import RedefineYourPresence from "@/assets/icons/redefine_your_presence.svg";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "When will I receive my Designs?",
    answer: "Most works are delivered within 48 hours or less, but more complex requests may take a bit longer.",
  },
  {
    question: "Which design softwares do you use?",
    answer:
      "I primarily work with: Adobe Illustrator, Adobe Photoshop, Figma, Adobe After Effects, Adobe Premiere Pro.",
  },
];

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItemComponent({ item, isOpen, onToggle, index }: FAQItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`pb-4 sm:pb-6 md:pb-8 transition-all duration-700 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <h3
        className="font-satoshi font-bold text-2xl sm:text-xl md:text-3xl mb-2 md:mb-4 flex items-center justify-between cursor-pointer gap-4 sm:gap-8"
        onClick={onToggle}
      >
        {item.question}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform transition-transform w-5 h-5 sm:w-6 sm:h-6 ${isOpen ? "" : "rotate-180"}`}
        >
          <path d="M19 9L12 16L5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </h3>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-base sm:text-xl text-white">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [footerRef, footerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 text-white relative">
      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div
            ref={titleRef}
            className={`transition-all duration-700 transform ${
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="font-satoshi text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-24 text-center">
              Frequently asked questions
            </h2>
          </div>

          <div
            ref={contentRef}
            className={`flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 transition-all duration-700 transform ${
              contentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            {/* Left side: FAQ items */}
            <div className="space-y-8 md:space-y-12 flex-1 px-4">
              {FAQ_DATA.map((faq, index) => (
                <FAQItemComponent
                  key={index}
                  item={faq}
                  isOpen={openItems.includes(index)}
                  onToggle={() => toggleItem(index)}
                  index={index}
                />
              ))}
            </div>

            {/* Right side: Book a call */}
            <div
              className="md:w-[250px] lg:w-[400px] hidden md:block animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <BookCallButton />
            </div>
          </div>

          <div
            ref={footerRef}
            className={`mt-12 sm:mt-16 md:mt-20 lg:mt-24 transition-all duration-700 transform ${
              footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between">
              <div className="md:max-w-xl flex flex-col gap-8 px-4">
                <Link href="/" className="flex items-center transition-all duration-300 relative group">
                  <Image src={Logo} alt="GBranding Logo" className="h-auto" />
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Image
                  src={RedefineYourPresence}
                  alt="RedefineYourPresence"
                  className="h-auto w-full h-auto animate-pulse-slow"
                />
              </div>

              {/* Mobile only Book Call Button */}
              <div className="md:hidden w-full mb-6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <BookCallButton />
              </div>

              {/* Calendar inline with the text */}
              <div
                id="call-calendar"
                className="md:max-w-[350px] lg:max-w-[600px] w-full px-4 animate-fade-in-up"
                style={{ animationDelay: "0.7s" }}
              >
                <CallCalendar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
