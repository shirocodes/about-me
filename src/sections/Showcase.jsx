import {useRef, useEffect} from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/lp.png'

gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
  const sectionRef = useRef(null)
  
  useEffect(() => {
    // Fade in section (CSS friendly)
    sectionRef.current?.classList.add('section-visible')

    // IntersectionObserver for .project reveals
    const els = document.querySelectorAll('.project')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view')
          io.unobserve(e.target)
        }
      })
    }, { rootMargin: '0px 0px -100px 0px', threshold: 0.12 })

    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* left project side */}
          <div className='first-project-wrapper'>
            <div className='project'>
              <div className='image-wrapper'>
                <img src={project3} loading="lazy" alt='cancer predictive tool'/>
              </div>
              <div className='text-content opacity-80'>
                <h2>Supporting children with autism via a behavior analyst 
                  platform with hassle-free booking for families. 
                </h2>
              </div>
            </div>
          </div>

          {/* Right projects */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src={project1} loading="lazy" alt='A CLI-tool for cervical cancer prediction'/>
              </div>
              <h2 className='opacity-80'>Predict cervical cancer risk, take control.</h2>
            </div>
            <div className='project'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src={project2} loading="lazy" alt='An online meeting productivity coach'/>
              </div>
              <h2 className='opacity-80'>Real-time Goal Tracking for Productive Online Meetings</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase