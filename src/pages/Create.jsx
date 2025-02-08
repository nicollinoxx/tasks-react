import Form  from '../components/Form'
import axios from 'axios'

const Create = () => {
  const createTask = async (task) => {

    try {
      const response = await axios.post('http://localhost:3000/tasks', {
        title:       task.title,
        description: task.description
      })

      return true;
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
