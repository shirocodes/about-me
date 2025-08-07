import React from 'react'
import { counterItems } from '../constants/index'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-0'>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item) => (
          
          <div 
            key={item.label} 
            className='bg-zinc-900 backdrop-blur-md rounded-lg px-2 py-2 sm:px-4 sm:py-5 text-center'
          >
            <div className='counter-number text-white opacity-80 text-2xl font-bold mb-2'>
            <CountUp 
              suffix={item.suffix} 
              end={item.value}
              duration={2}
              enableScrollSpy
              scrollSpyDelay={100}
              />
            </div>

            <div className='text-white text-lg opacity-50'>
              {item.label}
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter