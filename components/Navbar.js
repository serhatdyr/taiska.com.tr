import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '../components/icons/Logo';
import Phone from '../components/icons/Phone';

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
            <div className="container mx-auto flex flex-row">
                <div className="logo flex-none">
                    <Link href="/">
                        <Logo className="logo-svg" />
                    </Link>
                </div>
                <ul className='grow flex justify-center'>
                    <li className='m-4 flex items-center'><Link href="#home">HOME</Link></li>
                    <li className='m-4 flex items-center'><Link href="#about">ABOUT US</Link></li>
                    <li className='m-4 flex items-center'><Link href="#portfolio">PORTFOLIO</Link></li>
                    <li className='m-4 flex items-center'><Link href="#contact">CONTACT</Link></li>
                </ul>
                <div className='navbar-phone flex-none flex items-center'>
                    <a href='tel:02122223344'>
                      <Phone className="navbar-phone-icon" />
                      <span>0212 222 33 44</span>
                    </a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
