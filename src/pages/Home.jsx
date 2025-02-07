const Home = () => {
  return (
    <div className='flex items-center justify-between mx-auto'>
      <h2 className='text-3xl'>Welcome to tasks</h2>
      <a className='text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-800 rounded-md p-2 px-6' href='/create'>New</a>
    </div>
  )
}

export default Home
