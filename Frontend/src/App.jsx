import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import "./index.css"
import "remixicon/fonts/remixicon.css";
import Catogories from './Pages/Categories'
import BookDetails from './Pages/BookDetails'

const App = () => {

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Catogories/>}/>
        <Route path='/book/:id' element={<BookDetails/>}/>
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App