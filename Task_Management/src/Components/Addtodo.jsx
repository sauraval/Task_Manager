import React, { useState } from 'react'
import axios from 'axios'

function Add() {
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4001/add", {name:name, description: description})
        .then(res => {location.reload()})
        .catch(err => console.log(err))
    }

  return (
    <div>
         <section onSubmit={handleSubmit} className='bg-zinc-700 p-8 rounded-md w-full'>
            <form action="" className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
                <div className='flex flex-col gap-2 m-2'>
                    <label htmlFor="name" className='text-black' style={{fontWeight:'bold'}}>Name</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className='w-full rounded-xl px-4 py-2 ms-3' style={{borderColor:'red'}} />
                </div>
                <div className='flex flex-col gap-2 m-2'>
                    <label htmlFor="name" className='text-black ' style={{fontWeight:'bold'}}>Description</label>
                    <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} className='w-full rounded-xl px-4 py-2 ms-3' style={{borderColor:'red'}} />
                </div>
                <div className='flex justify-center md:justify-end items-center m-2'>
                    <button type='submit' className='bg-amber-500 rounded-full text-black px-4 py-2' style={{fontWeight:'bold'}}>Add Task</button>
                </div>
            </form>
        </section>
    </div>
  )
}

export default Add