import { toast } from 'react-toastify'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Form  from '../components/Form'


function Create() {
  const navigate = useNavigate()
  const createTask = async (task) => {

    try {
      const response = await axios.post('http://localhost:3000/tasks', {
        title:       task.title,
        description: task.description
      })

      toast.success('Task Created successfully')

      navigate(`/tasks/${response.data.id}`)
    } catch {
      toast.error('Cannot create task')
    }
  }

  return (
    <>
      <h2 className='text-3xl mb-8'>New task</h2>

      <Form onSubmit={createTask}/>
    </>
  )
}

export default Create
