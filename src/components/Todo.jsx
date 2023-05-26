import React from 'react'
import List from './List'
import { useState } from 'react';

const Todo = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [note, setNote] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault()


        setNote([...note, {
            title,
            desc
        }])
    }

    return (
        <>

            <div className='w-11/12 my-4 mx-auto py-2 shadow-xl rounded-3xl bg-cyan-300 md:w-[760px] md:mx-auto lg:w-[800px] lg:mx-auto'>
                <h1 className='my-6 text-center text-5xl text-black font-medium'>Todo App</h1>
                <h3 className='my-3 text-center text-2xl font-semibold'>Track Your Day</h3>

                <form className='w-11/12 mx-auto my-5 flex flex-col justify-around items-start' onSubmit={submitHandler}>
                    <input type="text" name='title' placeholder='Work' className='w-full my-3 border-2 border-black p-3 rounded-md outline-none text-3xl' onChange={(e) => { setTitle(e.target.value) }} />
                    <input type="text" name='desc' placeholder='Description' className='w-full my-3 border-2 border-black p-3 rounded-md outline-none text-3xl' onChange={(e) => { setDesc(e.target.value) }} />
                    <input type='submit' className='my-6 py-3 px-6 bg-cyan-500 rounded-md text-white text-2xl font-semibold' />
                </form>
            </div>
            <h1 className='my-12 text-center text-black text-4xl font-semibold transition-all duration-1000'>Today's Checklist</h1>

            {
                <ul className=' w-11/12 mx-auto lg:grid lg:grid-cols-2 lg:gap-10 2xl:w-4/5 2xl:mx-auto'>
                    {note.map((item, index) => (
                        <List key={index} title={item.title} desc={item.desc} />
                    ))}
                </ul>
            }
        </>
    )
}

export default Todo
