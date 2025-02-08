import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Task from '../components/Task'

function Show() {
  const { id } = useParams()
  const [task, setTask] = useState('')

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get(`http://localhost:3000/tasks/${id}`)
        setTask(response.data)
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error)
      }
    }

    fetchTasks()
  })

  return (
    <div>
      <div className='flex items-center justify-between mx-auto mb-3'>
        <h2 className='text-3xl'>Task</h2>
        <a className='text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-800 rounded-md p-2 px-6' href={`/edit/${id}`}>Edit</a>
      </div>

      <hr />

      <div className='mt-3'>
        <Task task={task}/>
      </div>
    </div>
  )
}

export default Show
