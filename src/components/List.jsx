import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const List = ({ title, desc }) => {
    return (
        <div className='w-11/12 mx-auto md:w-[760px] md:mx-auto lg:mx-auto lg:w-full'>
            <li className='w-auto h-auto mx-auto my-8 p-4 flex justify-around items-center shadow-xl rounded-2xl transition-all duration-700 bg-cyan-400'>
                <input type='checkbox' className='w-5 h-5 checked:rounded-full'/>
                <div className='w-10/12 flex flex-col justify-between items-start'>
                    <h4 className='my-2 text-3xl text-cyan-800 font-semibold md:text-4xl'>{title}</h4>
                    <p className='my-2 block max-w-lg overflow-x-hidden text-2xl md:text-3xl'>{desc}</p>
                </div>
                <button className='h-8 w-8 hover:text-red-500'><AiOutlineDelete size={40} /></button>
            </li>
        </div>
    )
}

export default List
