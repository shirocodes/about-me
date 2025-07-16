import React from 'react'
import { counterItems } from '../constants/index'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
      <div className='mx-auto grid-4-cols'>
        {counterItems.map((item) => (
          
          <div 
            key={item.label} 
            className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-between'
          >
            <div className='counter-number text-white text-5xl font-bold mb-2'>
            <CountUp suffix={item.suffix} end={item.value}/>
            </div>

            <div className='text-white-50 text-lg opacity-80'>
              {item.label}
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter