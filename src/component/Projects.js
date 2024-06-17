import React from 'react'
import { motion} from 'framer-motion'

function Projects() { 
    const FramerMotion ={
        
        animate:{scale: 1, opacity: 1, x: 0 },

    }
    const project = [
        {
            name: 'EnoteBook',
            img: 'EnoteBook.png',
            desc: 'EnoteBook is an online platform offering interactive digital textbooks, personalized learning paths, collaborative tools, and performance analytics, enhancing engagement, accessibility, and efficiency for both students and educators.'
        },
        {
            name: 'Expense-Tracker',
            img: 'expense-tracker.png',
            desc: 'Expense-Tracker is a digital tool for managing personal finances,expense categorization, real-time tracking, and detailed analytics, helping users monitor spending and achieve financial goals.'
        },
        {
            name: 'News App',
            img: 'newsapp.png',
            desc: 'News App is a platform providing real-time news updates, personalized content, diverse sources, and multimedia integration, ensuring users stay informed with relevant, up-to-date information tailored to their interests.'
        },
        {
            name: 'Voting App',
            img: 'voting.png',
            desc: 'Voting App is a digital platform enabling secure, anonymous voting, real-time result tracking, user authentication, and accessibility features, ensuring a streamlined and trustworthy voting process for organizations and communities.'
        }, {
            name: 'TextUtils',
            img: 'textutils.png',
            desc: 'TextUtils is a versatile online tool offering text manipulation features like formatting, case conversion, character count, and find-and-replace, enhancing productivity and efficiency for writers, editors, and developers.'
        }
    ]

    // Function to handle image click
    function handleImageClick(event) {
        const img = event.target;
        img.classList.toggle('fullscreen');
        // Add event listener for keydown to close fullscreen image on Esc key press
        document.addEventListener('keydown', handleKeyDown);
        // Add event listener for scroll to close fullscreen image when scrolling
        window.addEventListener('scroll', handleCloseFullscreenOnScroll);
    }

    // Function to handle keydown event
    function handleKeyDown(event) {
        // Check if the pressed key is Esc (key code 27)
        if (event.keyCode === 27) {
            closeFullscreen();
        }
    }

    // Function to handle scroll event
    function handleCloseFullscreenOnScroll(event) {
        // Check if the fullscreen image is displayed
        const fullscreenImg = document.querySelector('.fullscreen');
        if (fullscreenImg) {
            // Close fullscreen image
            closeFullscreen();
        }
    }

    // Function to close fullscreen image
    function closeFullscreen() {
        const fullscreenImg = document.querySelector('.fullscreen');
        if (fullscreenImg) {
            fullscreenImg.classList.remove('fullscreen');
            // Remove event listeners
            document.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('scroll', handleCloseFullscreenOnScroll);
        }
    }



    return (
        <div className='bg-black w-full h-full text-white bluring'>
            <div className='md:w-4/5 md:m-auto'>
                <div className="bg-black heading flex justify-center items-center py-3">
                    <h1 className='text-white text-3xl md:text-5xl mt-24 sm:mt-0 sm:ml-0 sm:py-3 relative'>
                        Featured Project
                    </h1>
                </div>
                <div className="flex flex-wrap sm:mt-10 sm:ml-0 sm:pb-10 sm:mb-0">
                    {
                        project.map((ele, index) => {
                            return (
                                <motion.div key={index} 
                                variants={FramerMotion}               
                                initial={{ scale: 0.5, opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
                                whileInView="animate"
                                viewport={{once:true}}
                                transition={{duration: 0.5 }}
                                    className="w-full md:w-1/2 p-4 md:m-auto ">
                                    <div className="rounded overflow-hidden shadow-lg project-div">
                                        <img src={ele.img} alt={ele.name} className="w-full font-bold h-60 cursor-pointer" onClick={handleImageClick} />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{ele.name}</div>
                                            <p className="text-base mb-4 text-white ">{ele.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects
