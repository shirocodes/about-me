import React from 'react'
import { words } from '../constants'
import Button from '../components/Button'


const Hero = () => {
  return (
    <section className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src='/images/bg.png' />
        </div>

        <div className='hero-layout'>
            {/* left side */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
               <div className='flex flex-col gap-7'>
                <div className='hero-text'>
                    <h1>Shaping
                        <span className='slide'>
                            <span className='wrapper'>
                                {words.map((word) =>(
                                    <span key={word.text} 
                                        className='flex items-center md:gap-3 gap-1 pb-2'
                                    >
                                        <img
                                            src={word.imgPath} alt={word.text}
                                            className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                        />
                                        <span>{word.text}</span>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <h1>into Real Projects</h1>
                    <h1>that delivers.</h1>
                </div>
                <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                        I am Muchiri, a developer intent on delivering 
                        market-aware and user-centric tech solutions
                </p>
                <Button 
                    className='md:w-80 md:h-16 w-60 h-12'
                    id='button'
                    text='See my Work' 
                />
                </div> 
            </header>
        </div>
    </section>
  )
}

export default Hero