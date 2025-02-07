import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto">
        <h1 className="text-4xl">
          <a href="/">TASKS</a>
        </h1>
        <nav className="hidden sm:block space-x-4">
          <a href="/" className="text-lg hover:text-indigo-300">Home</a>
        </nav>

        <button className="sm:hidden text-gray-300 bg-gray-600 hover:bg-gray-500 active:bg-gray-800 rounded-md p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden mt-2 ml-2 space-y-2">
          <a href="/" className="text-lg block hover:text-indigo-300">Home</a>
        </div>
      )}
    </header>
  )
}

export default Header
