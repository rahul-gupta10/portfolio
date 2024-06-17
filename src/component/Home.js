import React from "react";
import { ReactTyped } from "react-typed";
import {motion} from 'framer-motion'
function Home() {
       return (
        <div className='w-full h-screen md:h-[90vh] bg-black text-white flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 flex justify-center items-center mt-20 sm:mt-0 sm:ml-0'>
                <motion.img 
                initial={{opacity:0,x:-300,y:-100}}
                animate={{opacity:1,x:0,y:0}}
                transition={{duration:0.5}}
                src="1.png" alt="" className='photo w-3/5' />
            </div>
            <motion.div
            initial={{opacity:0,x:300}}
            animate={{opacity:1,x:0,y:0}}
            transition={{duration:0.5}}
            className='w-full md:w-1/2 flex justify-center items-center'>
                <div className='w-5/6 md:w-full space-y-1 mt-8 sm:mt-0 sm:ml-0 mx-auto text-center md:text-left'>
                    <h3 className='text-xl md:text-3xl font-semibold'>Hi, I am</h3>
                    <h1 className='text-2xl md:text-4xl font-bold font-serif'>Rahul Gupta</h1>
                    <h2 className='text-xl md:text-3xl'>I am  <ReactTyped strings={['Frontend Developer', 'Backend Developer']} backSpeed={40} typeSpeed={50} loop /> </h2>
                    <p className="mt-1 text-sm md:text-base">I am a passionate and dedicated MERN stack developer with a strong background in creating dynamic and responsive web applications. My expertise lies in utilizing the powerful combination of MongoDB, Express.js, React, and Node.js to build scalable and high-performance web solutions.</p><br />
                    <div className='space-x-5 md:space-x-5'>
                        <a href="https://www.linkedin.com/in/rahul-gupta-86083b208" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin fa-2x hover:cursor-pointer"></i></a>
                        <a href="https://www.instagram.com/guptarahul02/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram fa-2x hover:cursor-pointer"></i></a>
                        <a href="https://github.com/rahul-gupta10?tab=repositories/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github fa-2x hover:cursor-pointer"></i></a>
                        <a href="mailto:rg023677@gmail.com" rel="noopener noreferrer" target="_blank"><i className="fas fa-envelope fa-2x hover:cursor-pointer"></i></a>
                    </div><br />
                    <div className='font-semibold w-[130px] bg-orange-500 rounded-xl px-2 py-2  justify-center items-center hidden md:flex'>
                    <a href='cv.pdf' download="cv.pdf" className='text-sm sm:text-base'>Download CV</a>
                    </div>
                </div>

            </motion.div>
        </div>
    )
}

export default Home;
