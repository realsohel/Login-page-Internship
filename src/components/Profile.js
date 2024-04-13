import React, { useState } from 'react'
import { PiCameraBold } from "react-icons/pi";
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { useNavigate } from "react-router-dom";
const Profile = () => {

    const [location,setLocation] = useState("")
    const [previewUrl, setPreviewUrl] = useState("");
    const [img,setImg] = useState(null)

    const navigate = useNavigate();
    
    const handleFileInputChange = async event => {
        const file = event.target.files[0];
        const data = await uploadImageToCloudinary(file);
    
        setPreviewUrl(data.url);
        setImg(data.url);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(location)
        setLocation("");
        navigate("/select")
    }

    const onChange = (e)=>{
        setLocation({...location , [e.target.name]:e.target.value});
    }
    return (
        <div>
            <div className='text-2xl md:text-3xl text-pink-500 mx-auto  text-center sm:text-start md:mx-16 py-2 font-bold cursor-pointer'>Aeonaxy
            </div>
            <div className='m-8 sm:m-auto sm:w-1/2 '>
                <h1 className='text-3xl font-bold'>Welcome! Let's create your profile</h1>
                <h3 className='my-4 font-medium text-gray-400'>Let others get to know you better! You can do these later</h3>

                <h2 className='text-xl font-bold my-8'>Add an avatar</h2>
                <div className='flex space-x-8'>
                    <div className={` ${img?" bg-gray-400 border-2 rounded-full":"border-4 border-gray-300 border-dotted p-16"}  rounded-full   `}>
                        <div className='m-auto'>
                            {
                                img ? (
                                    <img
                                        src={previewUrl}
                                        alt="Preview"
                                        className="rounded-full w-28 h-28 sm:w-36 sm:h-36"
                                        />
                                ):(<PiCameraBold size={30}/>)
                            }
                            
                        </div>
                    </div>

                    <form className="max-w-lg mx-auto my-auto">
                        <input className="block w-[100%] sm:w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 "  
                            type="file"
                            accept=".jpg,.png"
                            onChange={handleFileInputChange}
                            />
                        <div className="my-3 text-sm text-gray-500 dark:text-gray-400" id="user_avatar_help">
                            {">"} Or choose one of our defaults.
                        </div>
                    </form>
                    <div>

                    </div>
                </div>

                <form>
                    <div className='text-xl font-bold my-12'>Add your location</div>
                    <div>
                        <input type="text" placeholder='Enter a location' 
                            className='outline-none p-2  border-b-2 w-full '
                            name='location'
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className='my-4'>
                        <button className='button w-1/4'
                            disabled={!location}
                            onClick={handleSubmit}
                        >  
                            Next
                        </button>
                    </div>
                    
                </form>
            </div>
        
        </div>
    )
}

export default Profile
