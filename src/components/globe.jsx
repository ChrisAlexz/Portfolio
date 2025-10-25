"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [1, 0, 0],
  glowColor: [1, 1, 1],
  markers: [
    { location: [32.7357, -97.1081], size: 0.15 },
    { location: [37.5665, 126.9780], size: 0.15 },
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);
  const [globeError, setGlobeError] = useState(false);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    // Check for WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setGlobeError(true);
        return;
      }
    } catch (e) {
      setGlobeError(true);
      return;
    }

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    let globe;
    try {
      globe = createGlobe(canvasRef.current, {
        ...config,
        width: width * 2,
        height: width * 2,
        onRender: (state) => {
          if (!pointerInteracting.current) phi += 0.005;
          state.phi = phi + rs.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      });

      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      }, 0);
    } catch (error) {
      console.error("Globe creation error:", error);
      setGlobeError(true);
    }

    return () => {
      if (globe) globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  if (globeError) {
    return (
      <div className={twMerge("mx-auto aspect-[1/1] w-full max-w-[600px] flex items-center justify-center", className)}>
        <div className="size-[30rem] flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
            <p className="text-sm text-neutral-400">
              Arlington, TX & Seoul, South Korea
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        "mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={twMerge(
          "size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}