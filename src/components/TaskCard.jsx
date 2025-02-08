const TaskCard = ({ task }) => {
  return (
    <div className='flex justify-between'>
      <div>
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p>{task.description}</p>
      </div>

      <div>
        <a href='/edit' className="hover:underline font-medium">Edit</a> <br />
        <a href='/' className="text-red-600 hover:underline font-medium">Destroy</a>
      </div>
    </div>
  )
}

export default TaskCard
