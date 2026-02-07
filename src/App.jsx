import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from "./components/Header";
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SportField from './components/SportField';
import PhotosVideos from './components/PhotosVideos';
import FrenchDrain from './components/FrenchDrain';
import SpiralRake from './components/SpiralRake';
import SepticSystem from './components/SepticSystem';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<SepticSystem />} />
            <Route path='/Systems' element={<SpiralRake />} />
            <Route path='/' element={<FrenchDrain />} />
            <Route path='/Photos' element={<PhotosVideos />} />
            <Route path='/' element={<SportField />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </Router>
  )
}

export default App
