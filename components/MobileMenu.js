import Link from 'next/link';
import Phone from './icons/Phone';

const MobileMenu = () => {
    return (
        <nav className='navbar-mobile md:hidden bg-black fixed bottom-0 left-0 right-0 z-10 w-full'>
            <ul className='flex justify-around text-white text-xs py-3'>
                <li>
                    <Link href="#home">HOME</Link>
                </li>
                <li>
                    <Link href="#about">ABOUT US</Link>
                </li>
                <li>
                    <Link href="#portfolio">PORTFOLIO</Link>
                </li>
                <li>
                    <Link href="#collabrations">COLLABRATIONS</Link>
                </li>
                <li>
                    <Link href="#contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MobileMenu;
