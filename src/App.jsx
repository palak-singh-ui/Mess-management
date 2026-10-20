import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Students from './AdminPages/Students'
const App = () => {
  return (
   <>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/students' element={<Students/>} />
      </Routes>
     </Router>
   </>
  )
}

export default App