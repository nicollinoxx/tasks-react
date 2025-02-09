import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

import Task from '../components/Task'

function Show() {
  const { id } = useParams()
  const [task, setTask] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await axios.get(`http://localhost:3000/tasks/${id}`)
        setTask(response.data)
      } catch (error) {
        toast.error('Cannot find task')
      }
    }

    fetchTask()
  }, [id])

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`)

      toast.success('Task destroyed task successfully')

      navigate('/')
    } catch {
      toast.error('Cannot destroy task')
    }
  }

  return (
    <div>
      <div className='flex items-center justify-between mx-auto mb-3'>
        <h2 className='text-3xl'>Task</h2>
        <div>
          <a className='text-white bg-gray-600 hover:bg-gray-500 active:bg-gray-800 rounded-md p-2 px-6' href={`/tasks/${id}/edit`}>Edit</a>
        </div>
      </div>

      <hr />

      <div className='mt-3'>
        <Task task={task}/>
      </div>

      <button onClick={deleteTask} className='text-white bg-red-600 hover:bg-red-500 active:bg-red-800 rounded-md p-2 px-6 mt-4'>
        Delete
      </button>
    </div>
  )
}

export default Show
