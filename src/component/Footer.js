// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    function scrolltop (){
        console.log("object")
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: smooth scrolling behavior
        });
    }
    return (
        <footer className="bg-gray-900 text-gray-300 flex justify-center items-center">
            <div className="container mx-auto  px-4 py-3 ">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 px-4 text-center">
                        <h2 className="text-xl font-bold">Rahul Gupta</h2>
                        <p className="text-sm">I am a passionate and dedicated MERN stack developer with a strong background in creating dynamic and responsive web applications. My expertise lies in utilizing the powerful combination of MongoDB, Express.js, React, and Node.js to build scalable and high-performance web solutions.</p>
                    </div>

                    <div className="w-full md:w-1/3 px-4 text-center mt-6 sm:mt-0 sm:ml-0 " >
                        <div><h2 className="text-xl font-bold ">Quick Links</h2></div>
                        <div className='py-4'>
                            <ul className='flex justify-center items-center gap-8'>
                                <li className=""><Link to="/" className="text-sm hover:text-white"  onClick={scrolltop}>Home</Link></li>
                                <li className=""><Link to="/about" className="text-sm hover:text-white"  onClick={scrolltop}>About</Link></li>
                                <li className=""><Link to="/projects" className="text-sm hover:text-white" onClick={scrolltop}>Portfolio</Link></li>
                                <li className=""><Link to="/skill" className="text-sm hover:text-white"  onClick={scrolltop}>Skills</Link></li>
                                <li className=""><Link to="/contact" className="text-sm hover:text-white" onClick={scrolltop}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4  text-center">
                        <div><h2 className="text-xl font-bold ">Available on </h2></div>
                        <div className='space-x-5 md:space-x-5 py-4'>
                            <a href="https://www.linkedin.com/in/rahul-gupta-86083b208" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin fa-2x hover:cursor-pointer"></i></a>
                            <a href="https://www.instagram.com/guptarahul02/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram fa-2x hover:cursor-pointer"></i></a>
                            <a href="https://github.com/rahul-gupta10?tab=repositories/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github fa-2x hover:cursor-pointer"></i></a>
                            <a href="mailto:rg023677@gmail.com" rel="noopener noreferrer" target="_blank"><i className="fas fa-envelope fa-2x hover:cursor-pointer"></i></a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
