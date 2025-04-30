import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '../components/icons/Logo';
import Mail from '../components/icons/Mail';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container px-4 mx-auto flex flex-row justify-between">
                <div className="logo flex-none">
                    <Link href="/">
                        <Logo className="logo-svg" />
                    </Link>
                </div>
                <ul className='grow hidden md:flex justify-center'>
                    <li className='m-4 flex items-center'><Link href="#home">HOME</Link></li>
                    <li className='m-4 flex items-center'><Link href="#about">ABOUT US</Link></li>
                    <li className='m-4 flex items-center'><Link href="#portfolio">PORTFOLIO</Link></li>
                    <li className='m-4 flex items-center'><Link href="#contact">CONTACT</Link></li>
                </ul>
                <div className='navbar-phone flex-none flex items-center'>
                    <a href='mailto:info@taiska.com.tr'>
                      <Mail className="navbar-phone-icon" />
                      <span>info@taiska.com.tr</span>
                    </a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
