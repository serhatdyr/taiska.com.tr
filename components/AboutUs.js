import React from "react";
import Image from 'next/image';

const AboutUs = () => {
    return (
            <div className="container mx-auto grid grid-cols-2 gap-4 py-30" id="about">
            <div>
                <Image src="/src/assets/images/aboutus.png" width="743" height="777" />   
            </div>
            <div>
                <h1 className="about-title">ABOUT US</h1>
                <p>Founded under the leadership of interior architect Senay Esin
                        Nur TAY, it is a building and architectural solution company
                        that produces interior architecture and steel structure
                        solutions and completes domestic and international turnkey
                        projects.

                        With its working approach that prioritizes customer
                        satisfaction, it carries out perfect projects for its customers at
                        predictable prices.</p>
                    <h3>our mission</h3>
                    <p>To provide sustainable, high quality and
                        satisfaction-oriented products and services to
                        its customers with its unique experience and

                        strong team over the years.</p>
                    <h3>our vision</h3>
                    <p>Our aim is to be a global company preferred for architectural solutions all over the world by
                        2030.</p>
            </div>
            </div>
    );
}

export default AboutUs;
