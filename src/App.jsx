import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <>
      <ToastContainer position="top-center" />

      <Router>
        <Layout>
          <Routes>
            <Route path='/'               element={<Home   />} />
            <Route path='/tasks/new'      element={<Create />} />
            <Route path='/tasks/:id'      element={<Show />}   />
            <Route path='/tasks/:id/edit' element={<Edit />}   />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
