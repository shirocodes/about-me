import {useRef} from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/lp.png'


gsap.registerPlugin(ScrollTrigger)

const Showcase = () => {
  const sectionRef = useRef(null)
  const work1Ref = useRef(null)
  const work2Ref = useRef(null)
  const work3Ref = useRef(null)

  useGSAP(() => {
    const projects = [work1Ref.current, work2Ref.current, work3Ref.current]

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50, opacity: 0
        },
        {
          y:0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100'
          }
        }
      )
    })

    gsap.fromTo(
      sectionRef.current, 
      {opacity: 0},
      {opacity: 1, duration: 1.5}
    )
  }, [])

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* left project side */}
          <div className='first-project-wrapper' ref={work1Ref}>
            <div className='image-wrapper'>
              <img src={project3} alt='cancer predictive tool'/>
            </div>
            <div className='text-content'>
              <h2>Supporting children with autism via a behavior analyst 
                platform with hassle-free booking for families. 
              </h2>
            </div>
          </div>

          {/* Right projects */}
          <div className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={work2Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src={project1} alt='A CLI-tool for cervical cancer prediction'/>
              </div>
              <h2>Predict cervical cancer risk, take control.</h2>
            </div>
            <div className='project' ref={work3Ref}>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src={project2} alt='An online meeting productivity coach'/>
              </div>
              <h2>Real-time Goal Tracking for Productive Online Meetings</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase