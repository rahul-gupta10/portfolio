import { ReactTyped } from "react-typed";
import {motion} from 'framer-motion'
import '../App.css';


function About() {
  
  return (
    <div className='bg-black w-full text-white'>
      <div className="container mx-auto">
        <div className="heading flex justify-center items-center py-24 sm:py-5  ">
          <motion.h1 
          initial={{opacity:0,y:-100}}
          animate={{opacity:1,x:0,y:0}}
          transition={{duration:0.5}}
          className='text-white text-4xl md:text-5xl underline'>About Me</motion.h1>
        </div>
        <div className="image lg:mt-10 flex justify-center items-center">
          <motion.img
          initial={{opacity:0,y:300}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
          src="8.png" alt="about_image" className='w-4/5 sm:w-2/5 shadow-image' />
        </div>
        <hr className='w-3/5 m-auto mt-5' />
        <div className='flex flex-col sm:flex-row justify-center items-center py-10'>
          <div className='w-4/5 sm:w-1/2 flex justify-center items-center mb-10 sm:mb-0'>
            <div className='w-full about-text sm:h-52 flex justify-center items-center sm:w-4/5'>
              <motion.div
              initial={{opacity:0,x:-300}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:0.5}}

              className='w-full'>
                <h3 className='text-2xl sm:text-3xl font-semibold text-center sm:text-left'>Hi, I am</h3>
                <h1 className='text-3xl sm:text-4xl font-bold font-serif text-center sm:text-left'>Rahul Gupta</h1>
                <h2 className='text-2xl sm:text-3xl text-center sm:text-left'>I am <ReactTyped strings={['Frontend Developer', 'Backend Developer','Software Developer']} backSpeed={40} typeSpeed={50} loop /></h2>
              </motion.div>
            </div>
          </div>
          <div className='w-4/5 sm:w-1/2 flex justify-center items-center'>
            <div className='w-full about-text sm:h-52 flex justify-center items-center sm:w-4/5'>
              <motion.div 
              initial={{opacity:0,x:300}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              transition={{duration:0.5}}
              >
                <h1 className='text-2xl sm:text-3xl text-center sm:text-left'>MERN Developer</h1>
                <p className='mt-3 text-sm sm:text-base text-center sm:text-left'>I'm a MERN stack developer driven by a passion for crafting dynamic web solutions. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in delivering seamless user experiences. Through continuous learning and collaboration, I thrive on challenges, striving to innovate and optimize performance. Let's collaborate to create exceptional digital experiences that make a lasting impact.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;
