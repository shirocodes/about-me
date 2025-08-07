import React from 'react'

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault()
        const target = document.getElementById('counter')
        if (target && id) {
          const offset = window.innerHeight * 0.15
          const top = target.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }}
      className={`relative z-20 cursor-pointer ${className ?? ''}`}
    >
      <div className="group relative flex items-center justify-center overflow-hidden rounded-full bg-neutral-800 px-4 py-3 sm:px-6 sm:py-3 md:py-4 transition-all duration-500 hover:bg-white/30 w-1/2">
        {/* Expanding circle background */}
        <div className="absolute top-1/2 right-0 h-full w-full -translate-y-1/2 rounded-full bg-white/50 transition-all duration-500 group-hover:w-10 group-hover:right-5"></div>

        {/* Button text */}
        <p className="z-10 text-sm sm:text-base md:text-lg uppercase text-white transition-all duration-500  group-hover:-translate-x-5 xl:translate-x-0">
          {text}
        </p>

        {/* Arrow container */}
        <div className="z-10 ml-3 flex size-10 items-center justify-center rounded-full transition-all duration-500 group-hover:bg-white sm:absolute sm:right-10 sm:top-1/2 sm:-translate-y-1/2">
          <img
            src="/images/arrow-down.svg"
            alt="arrow down"
            className="size-5 transition-all duration-500 animate-bounce group-hover:translate-y-0"
          />
        </div>
      </div>
    </a>
  )
}

export default Button
