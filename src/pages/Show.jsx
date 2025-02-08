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
        <div>
          <a className='text-white bg-gray-600 hover:bg-gray-500 active:bg-gray-800 rounded-md p-2 px-6' href={`/tasks/${id}/edit`}>Edit</a>
          <a className='text-white bg-red-600 hover:bg-red-500 active:bg-red-800 rounded-md p-2 px-6 ms-3' href={`/tasks/${id}/edit`}>Destroy</a>
        </div>
      </div>

      <hr />

      <div className='mt-3'>
        <Task task={task}/>
      </div>
    </div>
  )
}

export default Show
