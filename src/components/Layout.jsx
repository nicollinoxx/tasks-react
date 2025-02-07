import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='max-w-screen-lg mx-auto mt-16 px-2'>{children}</main>
    </div>
  )
}

export default Layout
