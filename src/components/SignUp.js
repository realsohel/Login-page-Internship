import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [values, setValues] = useState(
        {
            name: "", username:"", email: "",   password:"" 
        });
    
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(values)
        setValues({name: "", username:"", email: "",   password:"" });
        navigate("/profile")
    }

    const onChange = (e)=>{
        setValues({...values , [e.target.name]:e.target.value});
    }

    return (
        <div className='flex bg-white'>
            <div className=" ml-8 hidden md:block bg-white   w-[50%]">
                <h2 className=' my-20 text-2xl font-bold text-yellow-600' >
                    Discover the world's top <br/> Designers & Creatives.
                </h2>
                <img src="/images/computer.jpg" alt="" 
                className='w-3/4 '/>
                <p className='text-yellow-600 my-6 text-xs'>Art by <span className='underline'>Mohd Sohel Salmani</span></p>
            </div>

            <div className="md:bg-gray-100  w-full ">
                <p className='float-right m-6 text-xs flex space-x-1'>
                    <span>Already a member ?</span>
                    <span className='text-blue-500 hover:text-blue-600 hover:underline cursor-pointer'>Sign In</span>
                </p>
                
                <div className='mt-6 md:ml-36 mx-12 bg-gray-100 sm:bg-none p-8 rounded-md md:rounded-none'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>Sign Up to Aeonaxy</h1>
                    <form action=""className='my-8'>
                        <div className='sm:flex sm:space-x-4 my-8'>
                            <div>
                                <h4 className='font-semibold my-2'>Name</h4>
                                <input type="text" placeholder='Name' 
                                    className='outline-none p-2 rounded-md bg-gray-200' required
                                    value={values.name}
                                    name='name'
                                    onChange={onChange}
                                />
                            </div>
                            <div>
                                <h4 className='font-semibold my-2'>Username</h4>
                                <input type="text" placeholder='Username' 
                                    className='outline-none p-2 rounded-md bg-gray-200' required
                                    value={values.username}
                                    name='username'
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                        <div className='my-4'>
                            <h4 className='font-semibold my-2'>Email</h4>
                            <input type="email" placeholder='abc@xyz.com' 
                                className='w-3/4 outline-none p-2 rounded-md bg-gray-200' required
                                value={values.email}
                                name='email'
                                onChange={onChange}
                            />
                        </div>

                        <div className='my-4'>
                            <h4 className='font-semibold my-2'>Password</h4>
                            <input type="password" placeholder='6+ characters' 
                                className='w-3/4 outline-none p-2 rounded-md bg-gray-200' required
                                value={values.password}
                                name='password'
                                onChange={onChange}
                            />
                        </div>

                        <div className='my-4  flex'>
                            <input type="checkbox"
                                className='mx-2  bg-gray-200' required
                            />
                            <span className='sm:3/4 text-xs text-gray-500'>
                                Creating an account means you're okay with our 
                                <span className='text-blue-700'> Terms ofService, Privacy Policy, </span>and our default
                                <span className='text-blue-700'> Notification Settings.</span></span>
                        </div>

                        <div className='my-6'>
                            <button className='button' 
                                disabled={( !values.name) || (!values.username) || ( !values.email) || (!values.password)}
                                onClick={handleSubmit}
                                >
                                Create Account
                            </button>
                            <p className='my-3 sm:w-1/2 text-xs text-gray-500'>
                                This site is protected by reCAPTCHA and the Google 
                                <span className='text-blue-700'> Privacy Policy</span> and 
                                <span className='text-blue-700'>Terms of Servic</span>e apply.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    )
}

export default SignUp
