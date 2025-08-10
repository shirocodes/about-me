import React, { useRef, useState, useEffect} from 'react'
import Button from '../components/Button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

const Hero = () => {
  const containerRef = useRef(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setIsMobile(window.innerWidth < 768)

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMQChange = (e) => setPrefersReducedMotion(!!e.matches)
    setPrefersReducedMotion(!!mq.matches)

    // modern addEventListener for MediaQueryList, fallback for older
    if (mq.addEventListener) mq.addEventListener('change', onMQChange)
    else mq.addListener(onMQChange)

    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onMQChange)
      else mq.removeListener(onMQChange)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useGSAP(() => {
    if (!imageLoaded) return

    let rafId = null
    let timeoutId = null

    const ctx = gsap.context(() => {
      // Defer animations just slightly so the browser gets a chance to paint
      rafId = requestAnimationFrame(() => {
        timeoutId = setTimeout(() => {
          // Floating image effect — only on non-mobile and when not reduced motion
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
              // ensure transforms (composited) only
            })
          } else {
            // Set to final state for mobile/reduced motion
            gsap.set('.foldable-img', { scale: 1, rotation: 0 })
          }

          // Animate text with transforms only (no opacity/color), so text is painted instantly
          const baseDuration = isMobile ? 0.6 : 0.9
          const staggerBase = isMobile ? 0.03 : 0.05

          const tl = gsap.timeline()
          tl.fromTo(
            '.line-1 .char',
            { y: 24, scale: 0.98 },
            { y: 0, scale: 1, duration: baseDuration, ease: 'power3.out', stagger: staggerBase }
          )
          tl.fromTo(
            '.line-2 .char',
            { y: 30, scale: 0.985 },
            { y: 0, scale: 1, duration: baseDuration, ease: 'back.out(1.4)', stagger: staggerBase },
            '+=0.08'
          )
          tl.fromTo(
            '.line-3 .char',
            { y: 36, scale: 0.99 },
            { y: 0, scale: 1, duration: baseDuration + 0.1, ease: 'elastic.out(1, 0.4)', stagger: staggerBase },
            '+=0.08'
          )
        }, 80) // short delay after RAF
      })
    }, containerRef)

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
      
        <div 
          className="image-wrapper perspective absolute inset-0 z-10">      
          <img
            src="/images/backimage-1200.webp"
            srcSet="/images/backimage-480.webp 480w, /images/backimage-768.webp 768w, /images/backimage-1200.webp 1200w"
            sizes="(max-width: 768px) 100vw, 1200px"
            alt="Hero"
            className={`foldable-img w-full h-full object-cover transition-[filter,transform] duration-700 ease-out`}
            style={{
              filter: imageLoaded ? 'blur(0px)' : 'blur(10px)',
              transform: imageLoaded ? 'scale(1)' : 'scale(1.05)',
              transformOrigin: 'center center',
              willChange: 'transform, opacity',
            }}
            loading="eager"
            fetchPriority="high"
            onLoad={() => setImageLoaded(true)} // Trigger when fully loaded
          />
        </div>

        <div className="absolute top-[50%] sm:top-[30%] left-4 sm:left-10 z-30 w-[90%] max-w-[90%] sm:max-w-2xl space-y-6 px-2">
          {/* Lines */}
          <div className="headline text-white font-bold leading-snug sm:leading-tight">
            <div className="line line-1 text-lg sm:text-4xl md:text-5xl text-left">
              {'A Software Developer'.split(' ').map((word, i) => (
                <span key={i} className="char inline-block mr-1" style={{ willChange: 'transform' }}>
                  {word}
                </span>
              ))}
            </div>
            <div className="line line-2 text-base sm:text-3xl md:text-4xl mt-6 text-left">
              {'Building Brand Dreams'.split(' ').map((word, i) => (
                <span key={i + 100} className="char inline-block mr-1" style={{ willChange: 'transform' }}>
                  {word}
                </span>
              ))}
            </div>

            <div className="line line-3 text-base sm:text-2xl md:text-3xl mt-4 text-left sm:text-center trail-shadow-3">
              {'From Zero To Bold.'.split(' ').map((word, i) => {
                const isBold = word.trim() === 'Zero' || word.trim() === 'Bold.';
                  return (
                    <span
                      key={i + 200}
                      className={`char inline-block mr-1 whitespace-nowrap ${isBold ? 'font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent text-xl bg-clip-text' : ''}`}
                      style={{ willChange: 'transform' }}
                    >
                      {word}
                    </span>
                  );
            })}
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
