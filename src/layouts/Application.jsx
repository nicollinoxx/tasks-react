import Header from './Header'

const Application = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='max-w-screen-lg mx-auto mt-12 px-2'>{children}</main>
    </div>
  )
}

export default Application
