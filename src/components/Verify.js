import React from 'react'
import Navbar from './Navbar';
import { FaEnvelope } from "react-icons/fa";
import Footer from './Footer';

const Verify = () => {
    return (
        <div className='w-full'>
            <div>
                <Navbar/>
            </div>
            <hr />

            <div className='sm:m-auto  md:w-1/2 items-center justify-center mt-8 mb-24'>
                    <h1 className='text-xl md:text-3xl font-bold flex text-center justify-center items-center md:mt-8'>
                        Please Verify your email...
                    </h1>
                    <div className=' p-2 text-gray-400   items-center justify-center my-4'>
                        <div className=' text-center align-middle flex  items-center justify-center   '>
                            <FaEnvelope size={100} />
                        </div>
                        <div className='text-center my-8'>
                            <p>Please verify your email address. We've sent a confirmation email to:</p>
                            <p className='my-2 font-bold text-black'>salmanisohail26@gmail.com</p>
                            <p className='my-2'>Click the confirmation link in that email to begin using Aeonaxy.</p>
                            <p className='my-4'>
                                Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can  {" "}
                                <a href='https://www.youtube.com' target='_blank' rel="noreferrer" className='font-bold text-pink-500 '>
                                    resend the confirmation email.
                                </a>
                            </p>
                            <p>
                                Wrong email address? {" "}
                                <a href='https://www.youtube.com' target='_blank' rel="noreferrer" className='font-bold text-pink-500 '>
                                    Change it.
                                </a>
                            </p>
                        </div>
                    </div>
            </div>  
            
            <div className='w-full'>
                <Footer/>
            </div>
            
        </div>
    )
}

export default Verify
