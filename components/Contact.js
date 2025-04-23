import React from "react";
import Iframe from 'react-iframe';

import Phone from '../components/icons/Phone';
import Mail from '../components/icons/Mail';

const Contact = () => {
    return (
        <div className="py-10 md:py-30" id="contact">
            <div className="container mx-auto px-4"> 
                <h1 className="text-center font-bold text-3xl mb-8">CONTACT</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                    <div>
                        <p>ATATURK MAH. ERTUGRUL GAZI SK. METROPOL İSTANBUL C1 BLOK NO: 2 B, NO: 376<br /> ATASEHIR / ISTANBUL</p>
                        <p className="flex items-center gap-2 mt-2">
                            <Mail className="icon" /> 
                            <a href="mailto:senay@taiska.com.tr">senay@taiska.com.tr</a>
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            <Phone className="icon" /> 
                            <a href="tel:+905324601104">+9 0532 460 11 04</a>
                        </p>
                        <div className="mt-4 aspect-video">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96205.37898908994!2d28.945770809236336!3d41.103559216325266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf5516ef0a05%3A0x157b6a54b6638981!2zTWV0cm9wb2wgxLBzdGFuYnVsIEFsxLHFn3ZlcmnFnyBNZXJrZXpp!5e0!3m2!1str!2str!4v1743102147139!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                className="w-full h-full"
                                display="initial"
                                frameBorder="0"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                loading="lazy"
                                position="relative"
                            />
                        </div>
                    </div>
                    <div>
                        <p>BULEVAR KIRO GLIGOROV . 5 СКОПЈЕ-Г. БАБА<br />SKOPJE / NORTH MAKEDONIA</p>
                        <p className="flex items-center gap-2 mt-2">
                            <Mail className="icon" /> 
                            <a href="mailto:senay@taiska.com.tr">senay@taiska.com.tr</a>
                        </p>
                        <p className="flex items-center gap-2 mt-2">
                            <Phone className="icon" /> 
                            <a href="tel:+905324601104">+9 0532 460 11 04</a>
                        </p>
                        <div className="mt-4 aspect-video">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.338970548013!2d21.469486989874202!3d41.99300028403983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13541587e687e96d%3A0x1371a19221c75020!2sKiro%20Gligorov%205%2C%20Skopje%201000%2C%20Kuzey%20Makedonya!5e0!3m2!1str!2str!4v1743102220468!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                className="w-full h-full"
                                display="initial"
                                frameBorder="0"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                loading="lazy"
                                position="relative"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
