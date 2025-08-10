import React, {useEffect, useRef}from 'react'
import Heading from '../components/Heading'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {

    useGSAP(() => {
    // 1Batch animation for .timeline-card to reduce number of ScrollTrigger instances
    ScrollTrigger.batch(".timeline-card", {
        start: "top 80%",
        onEnter: (batch) => {
        gsap.from(batch, {
            xPercent: -100,
            opacity: 0,
            transformOrigin: "left left",
            duration: 0.8, // slightly shorter for mobile snappiness
            ease: "power2.inOut",
            stagger: 0.1 // small delay between cards for smoothness
        });
        }
    });

    // Timeline scaling optimized — using gsap.set instead of gsap.to inside onUpdate
    gsap.set(".timeline", { transformOrigin: "bottom bottom" }); // set once

    ScrollTrigger.create({
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
        // Directly set the scale without creating new tweens each scroll tick
        gsap.set(".timeline", { scaleY: 1 - self.progress });
        }
    });

    // Batch animation for .expText as well
    ScrollTrigger.batch(".expText", {
        start: "top 60%",
        onEnter: (batch) => {
        gsap.from(batch, {
            xPercent: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            stagger: 0.1
        });
        }
    });
    // Performance hint: prepare GPU layers for smoother transforms
    gsap.set([".timeline-card", ".expText", ".timeline"], { willChange: "transform, opacity" });
    }, []);

  return (
    <section 
        id='experience' 
        className='w-full md:mt-12 mt-10 section-padding xl:px-0'
    >
        <div className='w-full h-full md:px-20 px-5'>
            <Heading 
                title='Professional Expertise' sub='What I bring to the team' 
            />

            <div className='mt-10 relative'>
                <div className='relative z-50 xl:space-y-32 space-y-10'>
                    {expCards.map((card, index) => (
                        <div key={card.title} className='exp-card-wrapper'>
                            <div className='xl:w-2/6'>
                                <GlowCard card={card} index={index}>
                                    {/* <div>
                                        {card.title}
                                    </div> */}
                                </GlowCard>
                            </div> 

                            <div className='xl:w-4/6'>
                                <div className='flex items-start'>
                                    <div className='timeline-wrapper'>
                                        <div className='timeline'/>
                                        <div className='gradient-line w-1 h-full'/>
                                    </div>

                                    <div className='expText flex xl:gap-8 md:gap-4 gap-2 relative z-20'>
                                        <div className='timeline-logo'>
                                            <img src={card.logoPath} alt='logo' loading="lazy" decoding="async"/>
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-2xl'>{card.title}</h1>
                                            <p className='my-2 text-white-50'>{card.date}</p>
                                            <p className='text-[#839cb5] italic'> Responsibilities</p>
                                            <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                                {card.responsibilities.map((resp) => (
                                                    <li className='text-lg opacity-90' key={resp}>
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
  )
}

export default Experience