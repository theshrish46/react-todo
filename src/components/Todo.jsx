import React from 'react'
import List from './List'

const Todo = () => {
    return (
        <div className='w-11/12 my-4 mx-auto shadow-lg'>
            <h1 className='my-6 text-center text-5xl text-cyan-500 font-medium'>Todo App</h1>
            <h3 className='my-3 text-center text-2xl font-semibold'>Track Your Day</h3>

            <form action="/" className='w-11/12 mx-auto my-5 flex flex-col justify-around items-start'>
                <input type="text" placeholder='Work' className='w-full my-3 border-2 border-black p-3 rounded-md outline-none text-3xl' />
                <input type="text" placeholder='Description' className='w-full my-3 border-2 border-black p-3 rounded-md outline-none text-3xl' />
                <button className='my-3 py-3 px-6 bg-cyan-500 rounded-md text-white text-xl font-semibold'>ADD</button>
            </form>

            <List />
        </div>
    )
}

export default Todo
