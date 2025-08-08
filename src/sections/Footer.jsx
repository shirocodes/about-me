import React from 'react'
import {socialImgs} from '../constants/index'

const Footer = () => {
  return (
    <footer className='backdrop-blur-md bg-black py-6 border-t border-white/10'>
  <div className='footer-container flex flex-col md:flex-row justify-between items-center gap-4 px-5 max-w-7xl mx-auto'>
    <div className='socials flex gap-5'>
      {socialImgs.map((img) => (
        <a 
            className='icon transition-transform hover:scale-110' 
            target='_blank' rel="noopener noreferrer" 
            href={img.url} 
            key={img.url}
        >
          <img 
            src={img.imgPath} 
            loading="lazy" 
            alt={img.name} 
            className='w-6 h-6 rounded-md opacity-40 hover:opacity-100 transition-opacity duration-300'/>
        </a>
      ))}
    </div>

    <p className='text-sm text-white/60 md:text-base text-center md:text-end font-light opacity-50 tracking-wide'>
      © {new Date().getFullYear()} All rights reserved.
    </p>
  </div>
</footer>

  )
}

export default Footer