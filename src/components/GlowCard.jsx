import React, { useRef, useEffect } from 'react';

const GlowCard = ({ card, children, index }) => {
  const cardsRef = useRef([]);
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  // Cache card size and position for smoother performance
  const rectCache = useRef(null);

  useEffect(() => {
    if (!isTouch && cardsRef.current[index]) {
      rectCache.current = cardsRef.current[index].getBoundingClientRect();
    }
  }, [isTouch, index]);

  const handleMouseNav = (index) => (e) => {
    if (isTouch) return; // Skip logic on mobile

    const card = cardsRef.current[index];
    if (!card || !rectCache.current) return;

    // Calculate relative mouse position from cached rect
    const mouseX = e.clientX - rectCache.current.left - rectCache.current.width / 3;
    const mouseY = e.clientY - rectCache.current.top - rectCache.current.height / 3;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty('--start', angle + 60);
  };

  return (
    <div
      ref={(el) => (cardsRef.current[index] = el)}
      onMouseMove={!isTouch ? handleMouseNav(index) : undefined} // disable on touch devices
      className="card card-border timeline-card rounded-xl p-10"
      style={{ transform: 'translateZ(0)' }} // Force GPU compositing for smoother GSAP transforms
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            src="/images/star.png"
            key={i}
            alt="star"
            className="size-5"
            decoding="async"
            loading="eager" // Preload stars for no delay during animations
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="text-white-50 text-base">{card.summary}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
