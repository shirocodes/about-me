import React, { useRef, useEffect, useState, useMemo } from "react";

const LightParticlesBackground = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IntersectionObserver to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Generate static positions, delays, and sizes
  const particleLayers = useMemo(() => {
    const layers = [
      { count: isMobile ? 40 : 100, size: 2, opacity: 0.4, speedFactor: 1 },
      { count: isMobile ? 30 : 60, size: 4, opacity: 0.3, speedFactor: 0.7 },
      { count: isMobile ? 20 : 40, size: 6, opacity: 0.2, speedFactor: 0.5 },
    ];

    return layers.map(layer => {
      const particles = Array.from({ length: layer.count }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
      }));
      return { ...layer, particles };
    });
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {particleLayers.map((layer, lIndex) =>
        layer.particles.map((p, i) => (
          <span
            key={`${lIndex}-${i}`}
            className={`particle ${visible ? "animate" : ""}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${layer.size}px`,
              height: `${layer.size}px`,
              background: `rgba(255, 255, 255, ${layer.opacity})`,
              boxShadow: `0 0 ${layer.size * 3}px rgba(0, 200, 255, ${layer.opacity})`, // glow effect
              borderRadius: '50%',
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration * layer.speedFactor}s`,
            }}
          />
        ))
      )}

      <style jsx>{`
        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
          transform: translateY(0);
        }
        .particle.animate {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          opacity: 1;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};

export default LightParticlesBackground;
