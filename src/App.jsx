import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

import Layout from './layouts/Application'

/* components */
import Form   from './components/Form'

/* pages */
import Home   from './pages/Home'
import Create from './pages/Create'
import Edit   from './pages/Edit'
import Show   from './pages/Show'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/'         element={<Home   />} />
          <Route path='/create'   element={<Create />} />
          <Route path='/show/:id' element={<Show />}   />
          <Route path='/edit/:id' element={<Edit />}   />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
