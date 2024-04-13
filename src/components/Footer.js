import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
const Footer = () => {
    return (
        <div className='bg-gray-50 border border-t-1 w-full'>
            <div className='block md:flex m-6'>
                <div className='w-full p-2 '>
                    <h4 className='font-bold text-pink-500 '>
                            Aeonaxy
                    </h4>
                    <p className='my-2 text-sm'>
                        Exploring every possible use case of technology to create amazing products for our society!
                    </p>
                    <div className='flex space-x-3 text-gray-600 hover:text-gray-700 my-3'>
                        <a href="https://twitter.com/real_sohel_"  rel="noreferrer"  target='_blank'>
                            <FaTwitter/>
                        </a>
                        <a href="https://www.linkedin.com/in/mohd-sohel-salmani-957603226/" rel="noreferrer"  target='_blank'>
                            <FaLinkedin/>
                        </a>
                        <a href="https://github.com/realsohel/" rel="noreferrer"  target='_blank'>
                            <FaGithub/>
                        </a>
                        <a href="https://www.instagram.com/sohail.salmani.400054/" rel="noreferrer"  target='_blank'>
                            <GrInstagram/>
                        </a>
                    </div>
                </div>

                <div className=' w-full p-2 '>
                    <h5 className='font-bold mb-2 '>
                        For designers:
                    </h5>
                    <div className=' mx-auto cursor-pointer flex flex-col  space-y-2 text-sm text-gray-400'>
                        <p>Go pro!</p>
                        <p>Explore design work</p>
                        <p>Design blog</p>
                        <p>Overtime podcast</p>
                        <p>Playoffs</p>
                        <p>Refer a friend</p>
                    </div>
                </div>
                <div className='w-full p-2 '>
                    <h5 className='font-bold mb-2'>
                        Hire designers:
                    </h5>
                    <div className='cursor-pointer flex flex-col  space-y-2 text-sm text-gray-400'>
                        <p>Post a job opening</p>
                        <p>Post a freelance project</p>
                        <p>Search for designers</p>
                        <p>Advestise with us</p>
                    </div>
                </div>
                <div className='w-full p-2 '>
                    <h5 className='font-bold mb-2'>
                        Directories:
                    </h5>
                    <div className='cursor-pointer flex flex-col  space-y-2 text-sm text-gray-400'>
                        <p>Design jobs</p>
                        <p>Designers for hire</p>
                        <p>Freelance designers for hire</p>
                        <p>Tags</p>
                        <p>Places</p>
                        <p>Font spring</p>
                        <p>Font squirrel</p>
                    </div>
                </div>
                <div className='w-full p-2 '>
                    <h5 className='font-bold mb-2'>
                        Design Resources:
                    </h5>
                    <div className='cursor-pointer flex flex-col  space-y-2 text-sm text-gray-400'>
                        <p>Freelancing</p>
                        <p>Design hiring</p>
                        <p>Design portfolio</p>
                        <p>Design Education</p>
                        <p>Creative Process</p>
                        <p>Design Industry trends</p>
                    </div>
                </div>
            </div>

            <div className='m-6 text-sm text-gray-500'>
                <hr />
                <p>Copyright © 2024 aeonaxy</p>
            </div>
        </div>
    )
}

export default Footer
