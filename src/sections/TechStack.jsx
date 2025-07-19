import React from 'react'
import Heading from '../components/Heading'
import { techStackIcons } from '../constants'
import Icons from '../components/3dModels/TechLogos/Icons'

const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-5 px-6'>
            <Heading
                title='My Tech Stack'
                sub='The technologies and skills I Bring to the table'
            />

            <div className='tech-grid'>
                {techStackIcons.map((icon) => (
                    <div key={icon.name} 
                        className='card-border tech-card overflow-hidden relative group xl: rounded-fullrounded-lg'
                    >
                        <div className='tech-card-animated-bg'/>
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>
                                <Icons model={icon}/>
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