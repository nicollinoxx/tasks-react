import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Form  from '../components/Form'


const Create = () => {
  const navigate = useNavigate()
  const createTask = async (task) => {

    try {
      const response = await axios.post('http://localhost:3000/tasks', {
        title:       task.title,
        description: task.description
      })

      navigate(`/show/${id}`)
    } catch (error) {
      console.error('Error to create a task', error)

      return false
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
