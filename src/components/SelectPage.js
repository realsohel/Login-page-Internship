import React, { useState } from 'react'
import Select from '../utils/select'
import SelectCard from './SelectCard'
import { useNavigate } from "react-router-dom";

const SelectPage = () => {
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        navigate("/verify")
    }
    
    return (
        <div>
            <div className='text-2xl md:text-3xl text-pink-500 mx-auto  text-center sm:text-start md:mx-16 py-2 font-bold cursor-pointer'>
                Aeonaxy
            </div>

            <div className='m-2  '>
                <h1 className='text-3xl font-bold text-center'>
                    What brings you to Aeonaxy?
                </h1>
                <h3 className='my-4 font-medium text-gray-400 text-center'>
                    Select the options that best describe you. Don't worry, you can explore other options later.
                </h3>
            </div>

            <div className="grid  md:grid-cols-2 lg:grid-cols-3 mx-20 my-8 gap-8 ">
                {
                    Select.map((e)=>{
                        return <SelectCard id={e.id} key={e.id} title={e.title} img={e.img} isSelected={selected==e.id}
                            setSelected={setSelected}
                            />
                    })
                }
            </div>

            <div className='my-4  text-center items-center'>
                    <p className='my-4 '>
                        <button className='button w-1/4' 
                        disabled={selected===0}
                            onClick={handleSubmit}
                        >
                            Finish
                        </button>
                    </p>
            </div>
        </div>
    )   
}

export default SelectPage
