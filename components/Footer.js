import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (  
        <div className="footer flex justify-center items-center py-4">
            <p className='text-center'>Copyright &copy; {currentYear} Taiska <br />Design by <a href="http://www.asitane.net/">Asitane</a></p>
        </div>
    );
}
 
export default Footer;
