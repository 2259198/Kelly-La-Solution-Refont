import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home';
import Header from "./components/Header";
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SportField from './components/SportField';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<SportField />} />
            <Route path='/' element={<Contact />} />
            <Route path='/' element={<FAQ />} />
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
  )
}

export default App
