import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OurMission from './pages/OurMission'
import FeaturedTea from './pages/FeaturedTea'
import Locations from './pages/Locations'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<OurMission/>} />
          <Route path="/our-mission" element={<OurMission/>} />
          <Route path="/featured-tea" element={<FeaturedTea/>} />
          <Route path="/locations" element={<Locations/>} />
        </Routes>
      <Footer />
      <h5>©The Tea Cozy 2017</h5>
    </BrowserRouter>
  )
}

export default App
