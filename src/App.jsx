import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home';
import Footer from './components/Footer'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
        
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
  )
}

export default App
