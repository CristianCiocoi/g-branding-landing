import React from "react";

interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <span className="px-3 bg-[#D9D9D980] rounded-full text-base sm:text-base md:text-base lg:text-base xl:text-2xl text-white self-start whitespace-nowrap overflow-visible mx-1">
      {text}
    </span>
  );
}
