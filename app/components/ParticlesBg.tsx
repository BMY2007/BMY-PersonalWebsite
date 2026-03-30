"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBg() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <Particles
        options={{
          background: { color: "#000000" },
          particles: {
            number: { value: 100 },
            color: { value: "#ffffff" },
            opacity: { value: 0.7 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
          },
        }}
      />
    </div>
  );
}