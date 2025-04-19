import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

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
                        <Image src="/logo.png" width={198} height={78} />
                    </Link>
                </div>
                <ul className='grow flex justify-center'>
                    <li className='m-4 flex items-center'><Link href="#home">HOME</Link></li>
                    <li className='m-4 flex items-center'><Link href="#about">ABOUT US</Link></li>
                    <li className='m-4 flex items-center'><Link href="#portfolio">PORTFOLIO</Link></li>
                    <li className='m-4 flex items-center'><Link href="#contact">CONTACT</Link></li>
                </ul>
                <div className='flex-none flex items-center'>
                    <a href='tel:02122223344'>0212 222 33 44</a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
