import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (  
        <div className="footer flex justify-center items-center py-4">
            <p>Copyright &copy; {currentYear} Taiska</p>
            
        </div>
    );
}
 
export default Footer;
