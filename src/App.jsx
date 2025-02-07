import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

import Layout from './layouts/Application'

/* components */
import Form   from './components/Form'

/* pages */
import Home   from './pages/Home'
import Create from './pages/Create'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/'       element={<Home   />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
