import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/homePage/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <div className="app">
      {/* Navigation */}
      <Navbar />

      <Home />

      {/* Footer */}
      <Footer />

      
    </div>
    </>
  )
}

export default App
