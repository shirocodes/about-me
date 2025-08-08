import React from 'react'
import Heading from '../components/Heading'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {

    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start:'top 80%'
                }
            })
        })  
        
        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                gsap.to('.timeline', {
                    scaleY: 1 - self.progress,
                })
            }
            },     
        })

        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start:'top 60%'
                }
            })
        }) 
    }, [])

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
                                            <img src={card.logoPath} alt='logo'/>
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