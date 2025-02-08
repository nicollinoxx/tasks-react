import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

import Form from '../components/Form'

const Edit = () => {
  const { id } = useParams()
  const [task, setTask] = useState({ title: '', description: '' })
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await axios.get(`http://localhost:3000/tasks/${id}`)
        setTask(response.data)
      } catch (error) {
        console.error("Can't be find the task:", error)
      }
    }

    fetchTask()
  }, [id])

  const editTask = async (updatedTask) => {
    try {
      await axios.put(`http://localhost:3000/tasks/${id}`, {
        title:       updatedTask.title,
        description: updatedTask.description
      })

      navigate(`/show/${id}`)
    } catch (error) {
      console.error('Erro ao editar a tarefa:', error)
      return false
    }
  }

  return (
    <>
      <h2 className='text-3xl mb-8'>Editar tarefa</h2>
      <Form onSubmit={editTask} task={task} />
    </>
  )
}

export default Edit
