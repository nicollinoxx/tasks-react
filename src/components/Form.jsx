import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [title, setTitle ] = useState('')
  const [description, setDescription ] = useState('')

  const handleSubmit = (e) => {
     e.preventDefault()

     onSubmit({ title, description })
   };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className='block' htmlFor="title">Title</label>
        <input className='rounded-md border border-indigo-300 p-2 mt-2 w-full'
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className='mb-3'>
        <label className='block' htmlFor="description">Description</label>
        <textarea className='rounded-md border border-indigo-300 p-2 mt-2 w-full'
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className='text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-800 rounded-md p-2 px-6' type="submit" >Save</button>
    </form>
  )
}


export default Form
