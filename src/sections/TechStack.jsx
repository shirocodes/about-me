import React from 'react'
import Heading from '../components/Heading'
import { techStackIcons } from '../constants'
import Icons from '../components/3dModels/TechLogos/Icons'

// Hook to detect if screen is small
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

const TechStack = () => {
  const isMobile = useIsMobile()

  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-2 px-4'>
        <Heading
          title='My Tech Stack'
          sub='The technologies and skills I bring to the table'
        />

        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className='card-border tech-card overflow-hidden relative group rounded-lg'
            >
              <div className='tech-card-animated-bg' />
              <div className='tech-card-content'>
                <div className='tech-icon-wrapper'>
                  {isMobile ? (
                    <img
                      src={icon.mobileImgUrl} // pre-optimized Cloudinary URL
                      alt={icon.name}
                      className='w-full h-full object-contain'
                      loading='lazy'
                    />
                  ) : (
                    <Icons model={icon} />
                  )}
                </div>
                <div className='padding-x w-full'>
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
