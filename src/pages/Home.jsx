import { toast } from 'react-toastify'
import axios from 'axios'
import { useEffect, useState } from 'react'

import TaskCard from '../components/Task'

function Home() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await axios.get('http://localhost:3000/tasks')
        setTasks(response.data)
      } catch {
        toast.error('Cannot find tasks')
      }
    }

    fetchTasks()
  }, [])

  return (
    <div>
      <div className='flex items-center justify-between mx-auto mb-6'>
        <h2 className='text-3xl'>Welcome to tasks</h2>
        <a className='text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-800 rounded-md p-2 px-6' href='/tasks/new'>New</a>
      </div>


      {tasks.map((task, index) => (
        <div className={`p-3 my-3 rounded-lg border-md transition-all ${index % 2 === 0 ? "bg-gray-200" : "bg-indigo-500 text-white"}`}  key={index} >
          <div className='flex justify-between'>
            <TaskCard task={task} />

            <div className='h-25 m-1'>
              <a href={`/tasks/${task.id}`}  className="underline font-medium mb-2">Show</a> <br />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
