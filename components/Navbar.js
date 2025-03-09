import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container mx-auto flex flex-row">
                <div className="logo flex-none">
                    <Link href="/">
                        <Image src="/logo.png" width={198} height={78} />
                    </Link>
                </div>
                <ul className='grow flex justify-center'>
                    <li className='m-4 flex items-center'><Link href="#home">Home</Link></li>
                    <li className='m-4 flex items-center'><Link href="#about">About Us</Link></li>
                    <li className='m-4 flex items-center'><Link href="#portfolio">Portfolio</Link></li>
                    <li className='m-4 flex items-center'><Link href="#contact">Contact</Link></li>
                </ul>
                <div className='flex-none flex items-center'>
                    <a href='tel:02122223344'>0212 222 33 44</a>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
