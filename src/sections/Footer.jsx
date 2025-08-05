import React from 'react'
import {socialImgs} from '../constants/index'

const Footer = () => {
  return (
    <footer className='footer '>
        <div className='footer-container '>
            <div className='socials'>
                {socialImgs.map((img) => (
                    <a className='icon' target='_blank' rel="noopener noreferrer" href={img.url} key={img.url}>
                        <img src={img.imgPath} loading="lazy" alt={img.name}/>
                    </a>
                ))}
            </div>

            <div className='flex flex-col justify-center'>
                <p className='text-center md:text-end'>
                    © {new Date().getFullYear()} Shiro Muchiri
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer