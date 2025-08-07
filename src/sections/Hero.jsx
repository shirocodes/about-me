import React, { useRef} from 'react'
import Button from '../components/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const Hero = () => {
  const containerRef = useRef(null); // ref for cleanup and potential scroll-based triggers

  useGSAP(() => {
    // Setup scoped GSAP animations
    const ctx = gsap.context(() => {
        
      // Subtle image fold animation loop
      gsap.to('.foldable-img', {
        y: () => gsap.utils.random(-18, 18),
        rotation: () => gsap.utils.random(-2.5, 2.5),
        scaleX: () => gsap.utils.random(0.96, 1.04),
        scaleY: () => gsap.utils.random(0.98, 1.02),
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        });

      const tl = gsap.timeline();

      // Line 1 Animation (smooth in)
      tl.fromTo(
        '.line-1 .char',
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          stagger: { each: 0.05, from: 'start' }
        },
        0
      );

      // Line 2 Animation (bounce in with skew)
      tl.fromTo(
        '.line-2 .char',
        { opacity: 0, y: 30, skewX: 10, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          skewX: 0,
          scale: 1.1,
          duration: 1.2,
          ease: 'back.out(1.5)',
          stagger: { each: 0.06, from: 'start' }
        },
        '+=0.3'
      );

      // Line 3 Animation (elastic and bold)
      tl.fromTo(
        '.line-3 .char',
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1.2,
          duration: 1.3,
          ease: 'elastic.out(1, 0.4)',
          stagger: { each: 0.07, from: 'start' }
        },
        '+=0.3'
      );

      // Subtle flicker/glitch
      gsap.fromTo(
        '.char',
        {
          y: () => gsap.utils.random(-1, 1),
          x: () => gsap.utils.random(-1, 1),
          color: '#ff00cc'
        },
        {
          color: '',
          x: 0,
          y: 0,
          duration: 0.2,
          ease: 'expo.out',
          delay: 0.5,
          stagger: {
            each: 0.06,
            from: 'start',
          },
        }
      );

    }, containerRef); // <- context limited to this container

    // Cleanup to avoid memory leaks
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
      id='hero'
      className='relative h-screen w-screen overflow-hidden'
      ref={containerRef}
    >
      {/* Background Image */}
      <div className="image-wrapper perspective absolute inset-0 z-10">
        <img
          src="/images/backimage.png"
          alt="Hero"
          className="foldable-img w-full h-full object-cover"
          loading="lazy" // Improves performance
          fetchPriority="low" // Optional: hints to deprioritize loading
        />
      </div>

      {/* Animated Headline and CTA */}
      <div className="absolute top-[50%] sm:top-[30%] left-4 sm:left-10 z-30 w-[90%] max-w-[90%] sm:max-w-2xl space-y-6 px-2">
        <div className="headline text-white font-bold leading-snug sm:leading-tight">
          
          {/* Line 1 */}
          <div className="line line-1 text-lg sm:text-4xl md:text-5xl text-left trail-shadow-1">
            {'A Software Developer'.split(' ').map((word, i) => (
              <span key={i} className="char inline-block opacity-0 mr-1 whitespace-nowrap">
                {word}
              </span>
            ))}
          </div>

          {/* Line 2 */}
          <div className="line line-2 text-base sm:text-3xl md:text-4xl mt-6 text-left trail-shadow-2">
            {'Building Brand Dreams'.split(' ').map((word, i) => (
              <span key={i + 100} className="char inline-block opacity-0 mr-1 whitespace-nowrap">
                {word}
              </span>
            ))}
          </div>

          {/* Line 3 */}
          <div className="line line-3 text-base sm:text-2xl md:text-3xl mt-4 text-left sm:text-center trail-shadow-3">
            {'From Zero To Bold.'.split(' ').map((word, i) => {
              const isBold = word.trim() === 'Zero' || word.trim() === 'Bold.';
              return (
                <span
                  key={i + 200}
                  className={`char inline-block opacity-0 mr-1 whitespace-nowrap ${
                    isBold
                      ? 'font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent text-xl bg-clip-text'
                      : ''
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 ">
            <Button id="button" text="See my Work" />
        </div>
      </div>
    </section>
    <div className="absolute bottom-0 w-full h-32 z-20 bg-gradient-to-t from-zinc-900 to-transparent"></div>

    </>
    
  )
}

export default Hero
