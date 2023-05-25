import React from 'react'
import List from './List'
import { useState } from 'react';

const Todo = () => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [note, setNote] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('clicked');
        console.log(e.target);
    }

    return (
        <div className='w-11/12 my-4 mx-auto shadow-lg'>
            <h1 className='my-6 text-center text-5xl text-cyan-500 font-medium'>Todo App</h1>
            <h3 className='my-3 text-center text-2xl font-semibold'>Track Your Day</h3>

            <form action="/" className='w-11/12 mx-auto my-5 flex flex-col justify-around items-start' onSubmit={submitHandler}>
                <input type="text" name='title' placeholder='Work' className='w-full my-3 border-2 border-black p-3 rounded-md outline-none text-3xl'/>
                <input type="text" name='desc' placeholder='Description' className='w-full my-3 border-2 border-black p-3 rounded-md outline-none text-3xl'/>
                <input type='submit' className='my-3 py-3 px-6 bg-cyan-500 rounded-md text-white text-xl font-semibold'/>
            </form>

            {
                note.map(() => {
                    return(
                        <List note={note}/>
                    )
                })
            }
        </div>
    )
}

export default Todo
