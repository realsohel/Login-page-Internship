import React from 'react'

import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "./Verify.css"
const Navbar = () => {
    return (
        <div className='navbar flex  p-3 mb-2'>
            <div className='flex w-full'>
                <h1 className='w-full sm:w-auto text-xl font-bold my-auto'>
                    Aeonaxy
                </h1>

                <ul className='hidden sm:table  text-center mx-4 my-auto'>
                    <li><a href="#" className='hover-effect'>About</a></li>
                    <li><a href="#" className='hover-effect'>Portfolio</a></li>
                    <li><a href="#" className='hover-effect'>Blog</a></li>
                    <li><a href="#" className='hover-effect'>Contact</a></li>
                </ul>
            </div>
            
            <div className='hidden md:flex  space-x-4'>
                <div className='hidden sm:flex cursor-pointer bg-gray-100 border border-gray-200 px-1 m-auto  text-gray-500 rounded-md '>
                    <span className='my-auto px-2 py-1'><FaSearch/></span>
                    <span className='px-2 py-1'>Search</span>
                </div>
                <div className='hidden sm:block my-auto cursor-pointer'>
                    <FaShoppingBag color='gray'/>
                </div>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer border border-gray-300">
                    <img
                        className="w-full rounded-full"
                        src="/images/avatar.png"
                        alt=""
                        />
                </figure>
                <div className='px-2'>
                    <button className="button ">
                        Upload
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
