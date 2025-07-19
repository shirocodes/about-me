import React, {useRef} from 'react'

const GlowCard = ({card, children, index}) => {

    const cardsRef = useRef([])

    const handleMouseNav = (index) => (e) => {
        const card = cardsRef.current[index]
        if(!card) return

        // capture mouse postion relative to the card
        const rect = card.getBoundingClientRect()
        const mouseX = e.clientX - rect.left - rect.width/3
        const mouseY = e.clientY - rect.top - rect.height/3

        let angle = Math.atan2(mouseY, mouseX) * (180/Math.PI)

        angle = (angle + 360) % 360

        card.style.setProperty('--start', angle + 60)
    }

  return (
    <div 
        ref={(elnmt) => (cardsRef.current[index] = elnmt)} 
        onMouseMove={handleMouseNav(index)}
        className='card card-border timeline-card rounded-xl p-10'
    >
        <div className='glow' />
        <div className='flex items-center gap-1 mb-4'>
            {Array.from({length: 5}, (_, i) => (
                <img src='/images/star.png' key={i} alt='star' className='size-5'/>
            ))}
        </div>
        <div className='mb-4'>
            <p className='text-white-50 text-lg'>{card.summary}</p>
        </div>
        {children}
    </div>
  )
}

export default GlowCard