import Image from "next/image";
import Deliver from "@/assets/icons/deliver.svg";
import AskCasetta from "@/assets/icons/ask_caseta.svg";
import DeliverCasetta from "@/assets/icons/deliver_caseta.svg";
import Tag from "./Tag";
import CasettaWithEyes from "./CasettaWithEyes";
import { DESIGN_TAGS } from "@/constants/tags";
import { useInView } from "react-intersection-observer";

export default function GoodDesignSection() {
  // Create a longer array of tags for continuous scrolling by duplicating DESIGN_TAGS
  const scrollTags = [...DESIGN_TAGS, ...DESIGN_TAGS];

  // Set up intersection observers for animation triggers
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [item2Ref, item2InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 200,
  });

  const [item3Ref, item3InView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 300,
  });

  return (
    <section className="py-8 sm:py-10 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="px-4 md:px-10 lg:px-8 container mx-auto text-center mb-8 md:mb-16 relative z-10">
        <div
          ref={titleRef}
          className={`transition-all duration-1000 ${titleInView ? "opacity-100" : "opacity-0"} relative`}
        >
          <h2 className="font-satoshi text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-2 md:mb-4 relative">
            Good design,
          </h2>
          <p className="font-satoshi text-xl sm:text-2xl md:text-4xl lg:text-6xl text-primary mb-8 md:mb-16">
            as it was meant to be.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-16 md:gap-32">
          <div
            ref={item2Ref}
            className={`relative flex flex-col items-center transition-all duration-700 transform hover:scale-[1.03] ${
              item2InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative mb-6 overflow-hidden w-full max-w-full md:max-w-none mx-auto rounded-[20px] transition-all duration-300">
              <Image
                src={AskCasetta}
                alt="Ask"
                width={400}
                height={400}
                className="w-full h-auto transition-transform duration-500"
              />
              <div className="absolute top-16 sm:top-10 md:top-14 lg:top-24 xl:top-32 left-0 right-0 w-full overflow-hidden">
                <div className="flex flex-col gap-2 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-4 z-10">
                  {[...Array(3)].map((_, rowIndex) => (
                    <div key={rowIndex} className="overflow-hidden">
                      <div
                        className={`flex whitespace-nowrap ${
                          rowIndex % 2 === 0 ? "animate-scrollLeft" : "animate-scrollRight"
                        }`}
                        style={{
                          animationDuration: `${20 + rowIndex * 5}s`,
                          animationDelay: `${rowIndex * 0.5}s`,
                        }}
                      >
                        {scrollTags.map((tag, index) => (
                          <Tag key={`${rowIndex}-${index}`} text={tag} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 h-auto w-[20%] right-[-5%] sm:right-[-5%] md:right-[-5%] lg:right-[-5%] xl:right-[-5%]">
              <CasettaWithEyes />
            </div>
          </div>

          <div
            ref={item3Ref}
            className={`relative flex flex-col items-center transition-all duration-700 transform hover:scale-[1.03] ${
              item3InView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="relative mb-6 w-full max-w-full md:max-w-none mx-auto rounded-[20px] transition-all duration-300">
              <Image
                src={DeliverCasetta}
                alt="Deliver"
                width={400}
                height={400}
                className="w-full h-auto transition-transform duration-500"
              />
              <Image
                src={Deliver}
                alt="Deliver"
                width={400}
                height={400}
                className="absolute top-[25%] left-[15%] -translate-x-1/2 -translate-y-1/4 w-[70%] h-auto animate-bounce"
                style={{ animationDuration: "4s" }}
              />
            </div>
            <div className="absolute bottom-0 h-auto w-[20%] right-[-5%] sm:right-[-5%] md:right-[-5%] lg:right-[-5%] xl:right-[-5%]">
              <CasettaWithEyes />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
