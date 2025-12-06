"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import MembershipBenefitsIcon from "@/assets/icons/membership_benefits_button.svg";

export const MembershipBenefitsButton = () => {
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
    <div className="inline-block focus:outline-none hover:opacity-80 transition-all max-w-[100px] sm:max-w-[150px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[600px] animate-pulse-slow">
      <a href="javascript:void(0)" onClick={(e) => scrollToElement("pricing-card", e)} className="cursor-pointer">
        <Image
          src={MembershipBenefitsIcon}
          alt="Membership Benefits"
          width={600}
          height={600}
          className="w-auto h-auto"
        />
      </a>
    </div>
  );
};
