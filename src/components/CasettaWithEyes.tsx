import Image from "next/image";
import CasettaGbranding from "@/assets/icons/caset_gbranding.svg";
import { useState, useEffect, useRef } from "react";

export default function CasettaWithEyes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });
  const [hoverState, setHoverState] = useState({ left: false, right: false });

  // Create refs for the eyes
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftEyeContainerRef = useRef<HTMLDivElement>(null);
  const rightEyeContainerRef = useRef<HTMLDivElement>(null);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate eye positions based on mouse position
  useEffect(() => {
    // Don't recalculate if refs aren't ready yet
    if (!leftEyeRef.current || !rightEyeRef.current || !containerRef.current) return;

    const calculateEyePosition = (eyeRef: React.RefObject<HTMLDivElement | null>, isHovered: boolean) => {
      if (!eyeRef.current || !containerRef.current) return { x: 0, y: 0 };

      // If this eye is being hovered, don't move it
      if (isHovered) return { x: 0, y: 0 };

      const eyeRect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      // Calculate direction vector from eye to mouse
      const dirX = mousePosition.x - eyeCenterX;
      const dirY = mousePosition.y - eyeCenterY;

      // Normalize and scale the movement (max 30% of eye size)
      const maxMove = eyeRect.width * 0.3;
      const distance = Math.sqrt(dirX * dirX + dirY * dirY);
      const normalizedX = distance > 0 ? (dirX / distance) * maxMove : 0;
      const normalizedY = distance > 0 ? (dirY / distance) * maxMove : 0;

      return { x: normalizedX, y: normalizedY };
    };

    const leftPosition = calculateEyePosition(leftEyeRef, hoverState.left);
    const rightPosition = calculateEyePosition(rightEyeRef, hoverState.right);

    setEyePosition({
      left: leftPosition,
      right: rightPosition,
    });
  }, [mousePosition, hoverState]); // Add hoverState to dependencies

  return (
    <div className="relative" ref={containerRef}>
      <Image src={CasettaGbranding} alt="CasettaGbranding" className="w-full h-auto" />
      <div className="absolute top-[50%] left-[30%] right-0 bottom-0 z-10">
        {/* Eyes */}
        <div className="flex items-center justify-center gap-2">
          {/* Left eye */}
          <div
            ref={leftEyeContainerRef}
            className="w-[25%] h-[25%] aspect-square rounded-[2px] bg-white relative overflow-hidden"
            onMouseEnter={() => setHoverState((prev) => ({ ...prev, left: true }))}
            onMouseLeave={() => setHoverState((prev) => ({ ...prev, left: false }))}
          >
            <div
              ref={leftEyeRef}
              className="absolute w-[40%] h-[40%] aspect-square bg-black rounded-[2px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(calc(-50% + ${eyePosition.left.x}px), calc(-50% + ${eyePosition.left.y}px))`,
              }}
            ></div>
          </div>
          {/* Right eye */}
          <div
            ref={rightEyeContainerRef}
            className="w-[25%] h-[25%] aspect-square rounded-[2px] bg-white relative overflow-hidden"
            onMouseEnter={() => setHoverState((prev) => ({ ...prev, right: true }))}
            onMouseLeave={() => setHoverState((prev) => ({ ...prev, right: false }))}
          >
            <div
              ref={rightEyeRef}
              className="absolute w-[40%] h-[40%] aspect-square bg-black rounded-[2px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                transform: `translate(calc(-50% + ${eyePosition.right.x}px), calc(-50% + ${eyePosition.right.y}px))`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
