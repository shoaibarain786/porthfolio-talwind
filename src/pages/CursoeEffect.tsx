// components/CursorEffect.tsx
"use client" 


// components/CursorEffect.tsx
import React, { useEffect, useRef, useState } from "react";

function CursorEffect() {
  const [isMobile, setIsMobile] = useState(false); // State to detect mobile view
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const cursorPosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const trailRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(function () {
    // Detect mobile view
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    }

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(function () {
    if (isMobile) return; // Skip mouse event listeners on mobile

    // Smoothly update cursor position
    function updateCursor(event: MouseEvent) {
      cursorPosition.current = { x: event.clientX, y: event.clientY };
    }

    window.addEventListener("mousemove", updateCursor);

    let animationFrame: number;
    function animate() {
      // Smoothly interpolate positions for smoother motion
      trailRef.current = [
        cursorPosition.current,
        ...trailRef.current.slice(0, 9), // Keep only the last 10 positions
      ];
      setTrail([...trailRef.current]);

      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    return function cleanup() {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", updateCursor);
    };
  }, [isMobile]); // Add isMobile as a dependency

  if (isMobile) return null; // Do not render on mobile

  // Render the trail with smoother transitions
  return (
    <>
      {trail.map(function (point, index) {
        const scale = 1 - index * 0.1; // Reduce size for older points
        const opacity = 1 - index * 0.1; // Fade out older points
        return (
          <div
            key={index}
            className="fixed pointer-events-none rounded-full bg-gradient-to-r from-red-700 to-red-700"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${20 * scale}px`,
              height: `${20 * scale}px`,
              opacity,
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
            }}
          ></div>
        );
      })}
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-gradient-to-r from-red-700 to-red-700"
        style={{
          left: `${cursorPosition.current.x}px`,
          top: `${cursorPosition.current.y}px`,
          width: "16px",
          height: "16px",
          transform: "translate(-50%, -50%) scale(1.5)",
          transition: "transform 0.1s ease-out",
        }}
      ></div>
    </>
  );
}

export default CursorEffect;