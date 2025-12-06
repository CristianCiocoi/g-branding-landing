import Image from "next/image";
import { useCallback } from "react";
import FolderFaceShadow from "@/assets/icons/folder_face_shadow.svg";
import BookCallCasetta from "@/assets/icons/boock_a_15_min_intro_call_caseta.svg";
import PreferToEmail from "@/assets/icons/prefer_to_email.svg";

export function BookCallButton() {
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
    <div
      className="relative w-full aspect-square bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${BookCallCasetta.src})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="relative w-full aspect-square px-8 py-4 sm:px-24 sm:py-8 md:py-4 md:px-4 md:py-4 lg:py-8 lg:px-16 flex flex-col items-start justify-between">
        {/* Blue Folder SVG */}
        <div className="absolute top-[100px] -right-[150px] sm:top-[200px] sm:-right-[40px] md:top-[70px] md:-right-[150px] lg:top-[70px] lg:-right-[70px] xl:top-[70px] xl:-right-[70px] w-[250px]">
          <Image
            src={FolderFaceShadow}
            alt="Book a Call"
            width={160}
            height={160}
            className="w-36 sm:w-60 md:w-32 lg:w-60 xl:w-64"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-white flex flex-col items-start justify-end h-full w-full gap-16 sm:gap-16 md:gap-4 lg:gap-8 xl:gap-16">
          <a
            href="javascript:void(0)"
            onClick={(e) => scrollToElement("call-calendar", e)}
            className="bg-white text-primary rounded-md px-4 py-2 font-satoshi text-xl font-medium text-center inline-block hover:bg-opacity-90 hover:shadow-md transition-all duration-300 ml-2"
          >
            Book a call
          </a>

          {/* Schedule now link */}
          <div className="items-center justify-center w-full px-4 sm:px-4 md:px-4 lg:px-0 xl:px-0">
            <a
              href="mailto:gabriela@gbranding.co?subject=GBranding inquiry&body=Hello,%0A%0AI'm interested in learning more about your services.%0A%0APlease contact me at your earliest convenience.%0A%0AThank you!"
              className="cursor-pointer"
            >
              <Image
                src={PreferToEmail}
                alt="Prefer to email"
                className="h-auto w-full sm:w-full md:w-full lg:w-full xl:w-full"
                width={700}
                height={700}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CallCalendar() {
  return (
    <div className="flex flex-col">
      {/* Contact Section */}
      <div className="bg-[#121212] rounded-[16px] p-6 sm:p-8 text-white">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-medium text-white">Let&apos;s Connect</h3>
          <p className="text-gray-400 text-base max-w-md mx-auto">
            Ready to discuss your branding project? Reach out and let&apos;s schedule a call to explore how we can help
            elevate your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="mailto:gabriela@gbranding.co?subject=Schedule a Call&body=Hello,%0A%0AI'd like to schedule a call to discuss my branding project.%0A%0APlease let me know your availability.%0A%0AThank you!"
              className="bg-[#0202FC] text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors text-base"
            >
              Schedule via Email
            </a>
          </div>

          <p className="text-gray-500 text-sm pt-4">We typically respond within 24 hours</p>
        </div>
      </div>
    </div>
  );
}
