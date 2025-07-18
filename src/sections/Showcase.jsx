import React from 'react'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/lp.png'

const Showcase = () => {
  return (
    <div id='work' className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* left project side */}
          <div className='first-project-wrapper'>
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
            <div className='project'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src={project1} alt='A CLI-tool for cervical cancer prediction'/>
              </div>
              <h2>Predict cervical cancer risk, take control.</h2>
            </div>
            <div className='project'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img src={project2} alt='An online meeting productivity coach'/>
              </div>
              <h2>Real-time Goal Tracking for Productive Online Meetings</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase