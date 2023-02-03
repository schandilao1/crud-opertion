import React from 'react'
// import SingleSeperator from './components/SingleSeperator';
// import Employess from './components/Employess'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Add />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </Router>
      {/* <SingleSeperator /> */}
      {/* <Employess /> */}
    </>
  )
}

export default App
