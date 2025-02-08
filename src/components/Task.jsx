const Task = ({ task }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
      <p>{task.description}</p>
    </div>
  )
}

export default Task
