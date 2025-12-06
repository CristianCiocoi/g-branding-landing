import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function CompanyDescriptionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [highlightWords, setHighlightWords] = useState(false);

  useEffect(() => {
    if (textInView) {
      const timer = setTimeout(() => {
        setHighlightWords(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [textInView]);

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-6 lg:px-8">
      <div className="container mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-6 lg:px-8">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto border border-primary relative rounded-lg p-4 sm:p-6 md:p-10 lg:p-20 transition-all duration-1000 transform ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div ref={textRef} className="relative z-10">
            <p className="font-satoshi text-sm sm:text-lg md:text-2xl lg:text-3xl text-primary text-center leading-relaxed">
              Founded in 2021,{" "}
              <span
                className={`relative ${
                  highlightWords
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-500 after:opacity-100"
                    : "after:opacity-0"
                }`}
              >
                GBranding
              </span>{" "}
              was created to transform the way businesses build their{" "}
              <span
                className={`relative ${
                  highlightWords
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-500 after:opacity-100 after:delay-200"
                    : "after:opacity-0"
                }`}
              >
                brand identity
              </span>
              . With a focus on{" "}
              <span
                className={`relative ${
                  highlightWords
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-500 after:opacity-100 after:delay-300"
                    : "after:opacity-0"
                }`}
              >
                clean and impactful design
              </span>
              , GBranding operates on a high-quality. To this day, it&apos;s run entirely by{" "}
              <span
                className={`relative ${
                  highlightWords
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-500 after:opacity-100 after:delay-400"
                    : "after:opacity-0"
                }`}
              >
                Gabriela
              </span>
              , ensuring a hands-on, personalized approach. No outsourcing, no extra designers—just{" "}
              <span
                className={`relative ${
                  highlightWords
                    ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary after:transition-all after:duration-500 after:opacity-100 after:delay-500"
                    : "after:opacity-0"
                }`}
              >
                premium branding solutions
              </span>{" "}
              crafted with precision for a select number of clients at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
