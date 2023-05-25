import React from 'react'

const Todo = () => {
    return (
        <div className='w-11/12 my-4 mx-auto shadow-lg'>
            <h1 className='my-6 text-center text-5xl text-cyan-500 font-medium'>Todo App</h1>
            <h3 className='my-3 text-center text-2xl font-semibold'>Track Your Day</h3>

            <form action="/" className='my-5 flex flex-col justify-around items-start'>
                <input type="text" placeholder='Work' className='my-3 border-2 border-black w-11/12 p-3 rounded-md outline-none text-3xl' />
                <input type="text" placeholder='Description' className='my-3 border-2 border-black w-11/12 p-3 rounded-md outline-none text-3xl' />
                <button className='my-3 py-2 px-5 bg-cyan-500 rounded-md text-white font-semibold'>ADD</button>
            </form>
        </div>
    )
}

export default Todo
