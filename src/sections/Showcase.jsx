import {useRef, useEffect} from 'react'

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
                <img
                  src="https://res.cloudinary.com/da3jrfrrc/image/upload/w_800,q_auto,f_auto/v1755002355/lp_w76a5k.png"
                  srcSet="
                    https://res.cloudinary.com/da3jrfrrc/image/upload/w_480,q_auto,f_auto/v1755002355/lp_w76a5k.png 480w,
                    https://res.cloudinary.com/da3jrfrrc/image/upload/w_768,q_auto,f_auto/v1755002355/lp_w76a5k.png 768w,
                    https://res.cloudinary.com/da3jrfrrc/image/upload/w_1200,q_auto,f_auto/v1755002355/lp_w76a5k.png 1200w
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  alt="Behavioral analyst booking app"
                />
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
                <img
                  src="https://res.cloudinary.com/da3jrfrrc/image/upload/w_800,q_auto,f_auto/v1755002353/project1_rzucdp.jpg"
                  srcSet="
                    https://res.cloudinary.com/da3jrfrrc/image/upload/w_480,q_auto,f_auto/v1755002353/project1_rzucdp.jpg 480w,
                    https://res.cloudinary.com/da3jrfrrc/image/upload/w_768,q_auto,f_auto/v1755002353/project1_rzucdp.jpg 768w,
                    https://res.cloudinary.com/da3jrfrrc/image/upload/w_1200,q_auto,f_auto/v1755002353/project1_rzucdp.jpg 1200w
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  alt="A CLI-tool for cervical cancer prediction"
                />
              </div>
              <h2 className='opacity-80'>Predict cervical cancer risk, take control.</h2>
            </div>
            <div className='project'>
              <div className='image-wrapper bg-[#ffefdb]'>
                <img
                  src="https://res.cloudinary.com/da3jrfrrc/image/upload/w_800,q_auto,f_auto/v1755002352/project2_ot80hx.jpg"
                  srcSet="
                    https://res.cloudinary.com/da3jrfrrc/image/upload/w_480,q_auto,f_auto/v1755002352/project2_ot80hx.jpg 480w,
                    https://res.cloudinary.com/da3jrfrrc/image/upload/w_768,q_auto,f_auto/v1755002352/project2_ot80hx.jpg 768w,
                    https://res.cloudinary.com/da3jrfrrc/image/upload/w_1200,q_auto,f_auto/v1755002352/project2_ot80hx.jpg 1200w
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  alt="An online meeting productivity coach"
                />
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