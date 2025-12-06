import Image from "next/image";
import BookACallScheduleNowIcon from "@/assets/icons/book_a_call_sc_now.svg";
import BookA15MinIntroCallCasetta from "@/assets/icons/join_gbranding.svg";
import { useCallback } from "react";

export default function JoinCard() {
  const scrollToElement = useCallback((elementId: string, e: React.MouseEvent) => {
    e.preventDefault();

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
    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
      {/* Background Image */}
      <Image
        src={BookA15MinIntroCallCasetta}
        alt="Join GBranding"
        fill
        className="!w-full !h-full"
        style={{ objectFit: "fill" }}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 576px"
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full px-8 md:px-16 lg:px-24 xl:px-24 pb-4 pt-20 sm:py-6 sm:px-16 md:pt-12 lg:pt-20 lg:pb-8 flex flex-col items-start justify-end gap-6 sm:gap-8 md:gap-4 lg:gap-8 xl:gap-8">
        {/* Schedule now link */}
        <div className="items-center justify-center w-full px-4 sm:px-4 md:px-4 lg:px-0 xl:px-0">
          <a href="javascript:void(0)" onClick={(e) => scrollToElement("call-calendar", e)} className="cursor-pointer">
            <Image
              src={BookACallScheduleNowIcon}
              alt="Book a 15-min intro call - Schedule now"
              className="h-auto w-full"
              width={700}
              height={700}
              priority
              unoptimized
            />
          </a>
        </div>
      </div>
    </div>
  );
}
