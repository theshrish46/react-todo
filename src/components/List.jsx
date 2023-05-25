import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const List = () => {
    return (
        <div>
            <h1 className='my-6 text-center text-cyan-500 text-3xl font-semibold'>Today's Checklist</h1>
            <ul>
                <li className='w-11/12 mx-auto flex justify-around items-center border-2 shadow-sm transition-all duration-700'>
                    <div className='flex flex-col justify-center items-start'>
                        <h4 className='my-2 text-2xl text-cyan-800 font-semibold'>Coding</h4>
                        <p className='my-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa recusandae</p>
                    </div>
                    <button className='h-10 w-20'><AiOutlineDelete size={30}/></button>
                </li>
            </ul>
        </div>
    )
}

export default List
