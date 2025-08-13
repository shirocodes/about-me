import React, { useRef, useEffect } from 'react';

const GlowCard = ({ card, children, index }) => {
  const cardsRef = useRef([]);
  const isTouch = typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const rectCache = useRef(null);

  useEffect(() => {
    if (!isTouch && cardsRef.current[index]) {
      rectCache.current = cardsRef.current[index].getBoundingClientRect();
    }
  }, [isTouch, index]);

  const handleMouseNav = (index) => (e) => {
    if (isTouch) return;
    const cardEl = cardsRef.current[index];
    if (!cardEl || !rectCache.current) return;

    const mouseX = e.clientX - rectCache.current.left - rectCache.current.width / 3;
    const mouseY = e.clientY - rectCache.current.top - rectCache.current.height / 3;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    cardEl.style.setProperty('--start', angle + 60);
  };

  // Mobile: pulse glow on tap
  const handleTapGlow = () => {
    if (!isTouch) return;
    const cardEl = cardsRef.current[index];
    if (!cardEl) return;
    cardEl.classList.remove('tap-glow'); // reset
    void cardEl.offsetWidth; // trigger reflow for restart
    cardEl.classList.add('tap-glow');
  };

  return (
    <div
      ref={(el) => (cardsRef.current[index] = el)}
      onMouseMove={!isTouch ? handleMouseNav(index) : undefined}
      onClick={isTouch ? handleTapGlow : undefined}
      className="card card-border timeline-card rounded-xl p-10"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            src="/images/star.png"
            key={i}
            alt="star"
            className="size-5"
            decoding={isTouch ? 'sync' : 'async'}
            loading="eager"
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
