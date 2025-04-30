import React from "react";
import Image from 'next/image';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-10 md:py-30" id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-1 md:order-2">
                    <h1 className="text-3xl font-bold mb-4 font-bold">ABOUT US</h1>
                    <p className="mb-6 text-justify">
                        Founded under the leadership of interior architect Senay Esin
                        Nur TAY, it is a building and architectural solution company
                        that produces interior architecture and steel structure
                        solutions and completes domestic and international turnkey
                        projects.
                        <br /><br />
                        With its working approach that prioritizes customer
                        satisfaction, it carries out perfect projects for its customers at
                        predictable prices.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">OUR MISSION</h3>
                    <p className="mb-6 text-justify">
                        To provide sustainable, high quality and
                        satisfaction-oriented products and services to
                        its customers with its unique experience and
                        strong team over the years.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">OUR VISION</h3>
                    <p className="text-justify">
                        Our aim is to be a global company preferred for architectural solutions all over the world by
                        2030.
                    </p>
                </div>
                <div className="order-2 md:order-1">
                    <Image 
                        src="/src/assets/images/aboutus.png" 
                        width="743" 
                        height="777" 
                        alt="About Us" 
                        className="w-full h-auto object-contain" 
                    />   
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
