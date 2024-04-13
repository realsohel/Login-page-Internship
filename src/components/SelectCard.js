import React, { useState } from 'react'

const SelectCard = ({id,title,img,isSelected,setSelected}) => {
    
    return (
        <label htmlFor={id} >
            <div className={`relative h-full border-2 rounded-md ${isSelected?"border-pink-600":" border"}  items-center justify-center `}>
                <img src={img} alt="img" className=' mx-auto my-6'/>
                <p className='p-3 text-xl  text-center font-bold'>
                    {title}
                </p>
                <p className={`${isSelected?"block text-sm text-gray-400 text-center mb-12":"hidden"}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor?
                </p>
                
                <div className='text-center w-full my-2 absolute bottom-0 '>
                    <input type="checkbox"
                        id={id} 
                        value={id}
                        name="select"
                        className='bg-pink-500'
                        checked={isSelected}
                        onChange={(e)=>{setSelected(id)}}
                        />
                </div>
            </div>
        </label>
    )
}

export default SelectCard
