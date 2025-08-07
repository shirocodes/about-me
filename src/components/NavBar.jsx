import {useState, useEffect} from 'react'
import MyLogo from '../sections/LogoDisplay'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(true)
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = () => {
        setIsMenuOpen(false); // Close menu on link click
    };

  return (
    <header 
        className={`navbar ${scrolled ? 'scrolled': 'not-scrolled'}`}
    >
        <div className='inner'>
            <a className='logo' href='#hero'>
                <MyLogo />
            </a>
            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link, name}) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline'></span>

                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Toggle Button */}
            <button
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation"
                >
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <>
                    <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>

                    <div className="mobile-menu">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                        <li key={name}>
                            <a href={link} onClick={handleNavClick}>
                            {name}
                            </a>
                        </li>
                        ))}
                        <li>
                        <a href="#contact" onClick={handleNavClick}>
                            Let's Talk
                        </a>
                        </li>
                    </ul>
                    </div>
                </>
            )}

            <div className="contact-btn-desktop">
                <a href='#contact' className='contact-btn group'>
                    <div className='inner'>
                    <span>Let's Talk</span>
                    </div>
                </a>
            </div>

        </div>
    </header>
  )
}

export default NavBar