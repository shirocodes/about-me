import React, { useRef, useState, useEffect} from 'react'
import Button from '../components/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  const containerRef = useRef(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // useEffect(() => {
  //   if (typeof window === 'undefined') return

  //   // Use media queries so updates only happen when the condition flips
  //   const mqMobile = window.matchMedia('(max-width: 767px)')
  //   const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')

  //   const apply = () => {
  //     setIsMobile(prev => prev !== mqMobile.matches ? mqMobile.matches : prev)
  //     setPrefersReducedMotion(prev => prev !== mqReduce.matches ? mqReduce.matches : prev)
  //   }

  //   apply()

  //   const onMobileChange = () => setIsMobile(mqMobile.matches)
  //   const onReduceChange = () => setPrefersReducedMotion(mqReduce.matches)

  //   mqMobile.addEventListener?.('change', onMobileChange) ?? mqMobile.addListener(onMobileChange)
  //   mqReduce.addEventListener?.('change', onReduceChange) ?? mqReduce.addListener(onReduceChange)

  //   return () => {
  //     mqMobile.removeEventListener?.('change', onMobileChange) ?? mqMobile.removeListener(onMobileChange)
  //     mqReduce.removeEventListener?.('change', onReduceChange) ?? mqReduce.removeListener(onReduceChange)
  //   }
  // }, [])
  useEffect(() => {
  if (typeof window === 'undefined') return

  // Media queries for responsive & accessibility settings
  const mqMobile = window.matchMedia('(max-width: 767px)')
  const mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)')

  const updateMatches = () => {
    setIsMobile(mqMobile.matches)
    setPrefersReducedMotion(mqReduce.matches)
  }

  // Initial state check
  updateMatches()

  // Add listeners for changes
  mqMobile.addEventListener?.('change', updateMatches) ?? mqMobile.addListener(updateMatches)
  mqReduce.addEventListener?.('change', updateMatches) ?? mqReduce.addListener(updateMatches)

  // Cleanup listeners on unmount
  return () => {
    mqMobile.removeEventListener?.('change', updateMatches) ?? mqMobile.removeListener(updateMatches)
    mqReduce.removeEventListener?.('change', updateMatches) ?? mqReduce.removeListener(updateMatches)
  }
  }, [])

  useGSAP(() => {
    if (!imageLoaded) return

    let rafId, timeoutId

    const ctx = gsap.context(() => {
      // Defer animations slightly so browser can render first frame
      rafId = requestAnimationFrame(() => {
        timeoutId = setTimeout(() => {
          
        // === FLOATING IMAGE ANIMATION ===
        // - Disabled for mobile to reduce CPU load.
        //- Uses GPU-friendly transforms (y, rotation, scale).
        //- Uses smaller random ranges for less jank
          if (!isMobile && !prefersReducedMotion) {
            gsap.to('.foldable-img', {
              y: () => gsap.utils.random(-10, 10),
              rotation: () => gsap.utils.random(-0.6, 0.6),
              scaleX: () => gsap.utils.random(0.995, 1.01),
              scaleY: () => gsap.utils.random(0.995, 1.01),
              duration: 3,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              force3D: true // GPU acceleration
            })
          } else {
            gsap.set('.foldable-img', { scale: 1, rotation: 0 })
          }

        /** * TEXT REVEAL ANIMATION
         * - Adjusted durations & stagger for mobile.
         * - Avoids heavy easing on smaller devices.
         * - Groups animations into a single timeline
         *   to reduce multiple layout recalculations.*/
          const baseDuration = isMobile ? 0.6 : 0.9
          const staggerBase = isMobile ? 0.03 : 0.05

          const tl = gsap.timeline();
        // Line 1
        tl.fromTo(
          '.line-1 .char',
          { y: 20, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: baseDuration, ease: 'power3.out', stagger: staggerBase }
        );
        // Line 2
        tl.fromTo(
          '.line-2 .char',
          { y: 24, opacity: 0, scale: 0.985 },
          { y: 0, opacity: 1, scale: 1, duration: baseDuration, ease: isMobile ? 'power2.out' : 'back.out(1.4)', stagger: staggerBase },
          '+=0.05' // shorter gap for quicker delivery
        );
        // Line 3
        tl.fromTo(
          '.line-3 .char',
          { y: 28, opacity: 0, scale: 0.99 },
          { y: 0, opacity: 1, scale: 1, duration: baseDuration + 0.05, ease: isMobile ? 'power2.out' : 'elastic.out(1, 0.4)', stagger: staggerBase },
          '+=0.05'
        )
          
        }, 60) // small delay after RAF to ensure DOM is ready
      })
    }, containerRef)

    // Cleanup on unmount
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (timeoutId) clearTimeout(timeoutId)
      ctx.revert()
    }
  }, [imageLoaded, isMobile, prefersReducedMotion])

  return (
    <>
      <section
        id="hero"
        className="relative h-screen w-screen overflow-hidden"
        ref={containerRef}
      >
      
        <div className="image-wrapper perspective absolute inset-0 z-10">
          {/*  placeholder (very small, blurred server-side) */}
          <img
            src="https://res.cloudinary.com/da3jrfrrc/image/upload/f_auto,q_auto:eco,w_60,e_blur:300/v1755168578/heroimg1_ohx6ya.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ transform: 'translateZ(0)' }}
          />

          {/* Real image */}
          <img
            src="https://res.cloudinary.com/da3jrfrrc/image/upload/f_auto,q_auto,w_1440/v1755168578/heroimg1_ohx6ya.webp"
            srcSet={`
              https://res.cloudinary.com/da3jrfrrc/image/upload/f_auto,q_auto,w_480/v1755168578/heroimg1_ohx6ya.webp 480w,
              https://res.cloudinary.com/da3jrfrrc/image/upload/f_auto,q_auto,w_768/v1755168578/heroimg1_ohx6ya.webp 768w,
              https://res.cloudinary.com/da3jrfrrc/image/upload/f_auto,q_auto,w_1440/v1755168578/heroimg1_ohx6ya.webp 1440w,
              https://res.cloudinary.com/da3jrfrrc/image/upload/f_auto,q_auto,w_2560/v1755168578/heroimg1_ohx6ya.webp 2560w
            `}
            sizes="100vw"
            alt="Hero"
            className="foldable-img absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
            style={{
              // remove runtime blur filter; rely on LQIP layer below
              transform: imageLoaded ? 'scale(1)' : 'scale(1.03)',
              transformOrigin: 'center',
              willChange: 'transform'
            }}
            decoding="async"
            loading="eager"
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="absolute top-[50%] sm:top-[30%] left-4 sm:left-10 z-30 w-[90%] max-w-[90%] sm:max-w-2xl space-y-6 px-2">
          {/* Headline Section */}
          <div className="headline text-white font-bold leading-snug sm:leading-tight">
            
            {/* Line 1 — "A Software Developer" */}
            <div className="line line-1 text-lg sm:text-4xl md:text-5xl text-left">
              {
                // Split the sentence into words for individual animation
                'A Software Developer'.split(' ').map((word, i) => (
                  <span
                    key={i}
                    className="char inline-block mr-1"
                    style={{ willChange: 'transform' }} // Hint browser to prepare animations for smoother performance
                  >
                    {word}
                  </span>
                ))
              }
            </div>

            {/* Line 2 — "Building Brand Dreams" */}
            <div className="line line-2 text-base sm:text-3xl md:text-4xl mt-6 text-left">
              {
                'Building Brand Dreams'.split(' ').map((word, i) => (
                  <span
                    key={i + 100}
                    className="char inline-block mr-1"
                    style={{ willChange: 'transform' }} // Again, optimize animation readiness
                  >
                    {word}
                  </span>
                ))
              }
            </div>

            {/* Line 3 — "From Zero To Bold." */}
            <div className="line line-3 text-base sm:text-2xl md:text-3xl mt-4 text-left sm:text-center trail-shadow-3">
              {
                'From Zero To Bold.'.split(' ').map((word, i) => {
                  
                  // Bold styling only for the words "Zero" and "Bold."
                  const isBold = word.trim() === 'Zero' || word.trim() === 'Bold.';

                  return (
                    <span
                      key={i + 200}
                      className={`char inline-block mr-1 whitespace-nowrap 
                        ${isBold 
                          ? 'font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent text-xl bg-clip-text' 
                          : ''}`
                      }
                      style={{ willChange: 'transform' }} // Keeps GPU layer ready for animations
                    >
                      {word}
                    </span>
                  );
                })
              }
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <Button id="button" text="See my Work" />
          </div>
        </div>
      </section>
      {/* <div className="absolute bottom-0 w-full h-6 sm:h-32 z-20 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div> */}
    </>
  )
}

export default Hero
