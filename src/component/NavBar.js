import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import StylishLogo from './StylishLogo'
import { motion } from 'framer-motion'

function NavBar() {
    const location = useLocation();
    return (
        <div className='flex flex-col sm:flex-row justify-between px-5 sm:px-10 h-[10vh] items-center bg-black text-white'>
            <div className='text-2xl sm:text-3xl font-mono font-extrabold whitespace-nowrap'>
                <Link to='/' className='flex gap-2 sm:gap-4 justify-center items-center mt-1 sm:mt-0 sm:ml-0'><StylishLogo /><h2>Rahul Gupta</h2></Link>
            </div>
            <div className='flex flex-row gap-3 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-5 text-lg sm:text-2xl mt-2 sm:mt-0'>
                <motion.span
                 initial = {{opacity:0,y:100}}
                 animate = {{opacity:1,y:7}}
                 transition={{duration:0.5,delay:0}}
                ><Link to='/' className={`hidden hover:text-orange-300  mt-[8px] sm:mt-0 sm:ml-0 ${location.pathname === "/" ? "text-orange-300" : null}`}>Home</Link></motion.span><motion.span
                 initial = {{opacity:0,y:100}}
                 animate = {{opacity:1,y:0}}
                 transition={{duration:0.5,delay:0}}
                ><Link to='/' className={`hover:text-orange-300  mt-[8px] sm:mt-0 sm:ml-0 ${location.pathname === "/" ? "text-orange-300" : null}`}>Home</Link></motion.span>
                <motion.span
                initial = {{opacity:0,y:100}}
                 animate = {{opacity:1,y:0}}
                 transition={{duration:0.4,delay:0.05}}
                ><Link to='/about' className={`hover:text-orange-300 ${location.pathname === "/about" ? "text-orange-300" : null}`}>About</Link></motion.span>
                <motion.span
                initial = {{opacity:0,y:100}}
                 animate = {{opacity:1,y:0}}
                 transition={{duration:0.4,delay:0.10}}
                ><Link to='/skill' className={`hover:text-orange-300 ${location.pathname === "/skill" ? "text-orange-300" : null}`}>Skills</Link></motion.span>
                <motion.span
                initial = {{opacity:0,y:100}}
                 animate = {{opacity:1,y:0}}
                 transition={{duration:0.4,delay:0.15}}
                ><Link to='/projects' className={`hover:text-orange-300 ${location.pathname === "/projects" ? "text-orange-300" : null}`}>Projects</Link></motion.span>
                <motion.span
                initial = {{opacity:0,y:100}}
                 animate = {{opacity:1,y:0}}
                 transition={{duration:0.4,delay:0.05}}
                ><Link to='/contact' className={`hover:text-orange-300 ${location.pathname === "/contact" ? "text-orange-300" : null}`}>Contact</Link></motion.span>
            </div>
            <div className='bg-orange-500 rounded-xl px-2 py-1 sm:py-2 mt-4 sm:mt-0'>
                <a href='cv.pdf' download="cv.pdf" className='text-sm sm:text-base'>Download CV</a>
            </div>
        </div>
    )
}

export default NavBar
