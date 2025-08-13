import React from 'react';
import Heading from '../components/Heading';
import { expCards } from '../constants';
import GlowCard from '../components/GlowCard';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  /** 
   * 1. GPU acceleration hinting:
   * - Instead of setting `will-change` globally (which eats GPU memory),
   *   we set it right before animating and remove it afterward.
   * - This avoids keeping too many elements on their own layers all the time.
   */

  // Animate timeline cards in (reduced batch size for smoother mobile performance)
  ScrollTrigger.batch('.timeline-card', {
    start: 'top 80%',
    once: true, // only animate once for performance
    batchMax: 2, // smaller batches = faster frame render
    onEnter: (batch) => {
      gsap.set(batch, { willChange: 'transform, opacity' });
      gsap.from(batch, {
        xPercent: -100,
        opacity: 0,
        duration: isMobile ? 0.45 : 0.8, // slightly shorter for mobile
        ease: 'power2.out',
        stagger: 0.08,
        onComplete: () => gsap.set(batch, { willChange: '' }) // clean up
      });
    }
  });

  /** 
   * 2. Timeline + logo animations:
   * - Desktop gets scrubbed scaling; mobile gets a simple fade to avoid heavy calculations.
   * - Avoids constantly running transform logic on mobile while scrolling.
   */
  if (isMobile) {
    gsap.fromTo(
      '.timeline',
      { opacity: 1 },
      {
        opacity: 1, // no actual change, keeps visual consistent
        scrollTrigger: {
          trigger: '.timeline',
          start: 'top bottom',
          end: 'bottom top',
          scrub: false
        }
      }
    );
  } else {
    gsap.set(['.timeline', '.gradient-line'], { transformOrigin: 'bottom bottom', scaleY: 1 });
    gsap.set('.timeline-logo', { transformOrigin: 'center', yPercent: 0, scale: 1 });

    ScrollTrigger.create({
      trigger: '.timeline-wrapper',
      start: 'top center',
      end: '70% center',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(['.timeline', '.gradient-line'], { scaleY: 1 - progress, overwrite: true });
        gsap.set('.timeline-logo', {
          yPercent: progress * -50,
          scale: 1 - progress * 0.2,
          opacity: 1 - progress,
          overwrite: true
        });
      }
    });
  }

  /** 
   * 3. Experience text + list items:
   * - Uses once:true to avoid re-triggering.
   * - Will-change only applied during animation.
   */
  ScrollTrigger.batch('.expText', {
    start: 'top 60%',
    once: true,
    onEnter: (batch) => {
      const liElements = batch.flatMap((el) =>
        Array.from(el.querySelectorAll('li'))
      );
      const textBlocks = batch.map(el => el.querySelector('div:not(.timeline-logo)'));

      gsap.set(textBlocks, { willChange: 'transform, opacity' });
      gsap.from(textBlocks, {
        opacity: 0,
        xPercent: isMobile ? 0 : 10,
        duration: isMobile ? 0.45 : 0.8,
        ease: 'power2.out',
        stagger: 0.05,
        onComplete: () => gsap.set(textBlocks, { willChange: '' })
      });

      gsap.from(liElements, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power1.out',
        delay: isMobile ? 0.25 : 0.4
      });
    }
  });

  /** 
   * 4. Logo entry animation for mobile:
   * - Runs only if mobile.
   */
  if (isMobile) {
    ScrollTrigger.batch('.timeline-logo', {
      start: 'top 70%',
      once: true,
      onEnter: (batch) => {
        gsap.from(batch, {
          opacity: 0,
          y: -10,
          duration: 0.35,
          ease: 'power2.out',
          stagger: 0.05
        });
      }
    });
  }
}, []);



  return (
    <section
      id="experience"
      className="w-full md:mt-12 mt-10 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <Heading title="Professional Expertise" sub="What I bring to the team" />

        <div className="mt-10 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}></GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-8 md:gap-4 gap-2 relative z-20">
                      <div className="timeline-logo">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-2xl">{card.title}</h1>
                        <p className="my-2 text-white-50">{card.date}</p>
                        <p className="text-[#839cb5] italic">Responsibilities</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((resp) => (
                            <li className="text-lg opacity-90" key={resp}>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
