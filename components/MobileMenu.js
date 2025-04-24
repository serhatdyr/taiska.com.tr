import Link from 'next/link';
import Phone from './icons/Phone';

const MobileMenu = () => {
    
    return (
        <nav className='navbar-mobile flex md:hidden bg-black fixed bottom-0 right-0 left-0 z-10 w-full'>
            <div className="container mx-auto flex flex-row">
                <ul className='grow flex justify-center'>
                    <li className='m-4 flex items-center'><Link href="#home">HOME</Link></li>
                    <li className='m-4 flex items-center'><Link href="#about">ABOUT US</Link></li>
                    <li className='m-4 flex items-center'><Link href="#portfolio">PORTFOLIO</Link></li>
                    <li className='m-4 flex items-center'><Link href="#contact">CONTACT</Link></li>
                </ul>
            </div>
        </nav>

    );
}

export default MobileMenu;
