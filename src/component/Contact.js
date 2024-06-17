import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'
function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const [submit , setsubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        setsubmit(true);
        e.preventDefault();
        let msg = document.querySelector('.msg');
        msg.innerHTML="";
        emailjs.sendForm('service_5t4sjfu', 'template_3ftjo5e', form.current, {
            publicKey: 'aN_GsZGm04NCBEXgB',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    msg.innerHTML = "Mail sent successfully!"
                    setFormData({
                        user_name: '',
                        user_email: '',
                        message: ''
                    })
                    setTimeout(() => {
                        msg.innerHTML=''
                    }, 2000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    msg.classList.remove('text-green-700')
                    msg.classList.add('text-red-700')
                    msg.innerHTML("Opps failed to send. Please try again.")
                },
            );
            setsubmit(false);
    };

    return (
        <div className='bg-black text-white min-h-screen'>
            <div className="heading flex justify-center items-center py-24 sm:py-5  ">
                <motion.h1
                    initial={{opacity:0,x:-300}}
                    animate={{opacity:1,x:0}}
                    transition={{duration:0.5}}
                 className='text-white text-4xl md:text-5xl underline'>Contact me</motion.h1>
            </div>
            <motion.div 
            initial={{opacity:0,y:-300}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            className="flex flex-col items-center justify-center sm:mt-14 ">
                <form ref={form} className="p-8 rounded-lg shadow-md w-full max-w-md border" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input type="text" id="name" name="user_name" className=" bg-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  focus:shadow-outline focus:border-2 focus:border-blue-400"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                            placeholder='Your Name'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="user_email"
                            className=" bg-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline focus:shadow-outline focus:border-2 focus:border-blue-400"
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                            placeholder='email@gmail.com'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="bg-gray-700 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  focus:shadow-outline focus:border-2 focus:border-blue-400"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder='Message'
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button disabled={submit}
                            type="submit"
                            className="submitbtn bg-blue-600 blue-500 hover:blue-700 text-white font-bold py-2 px-4 rounded  focus:shadow-outline focus:outline-none "
                        >
                            Send
                        </button>
                        <span className='msg mt-5 text-green-700'></span>
                    </div>
                </form>
            </motion.div>

        </div>
    )
}

export default Contact
