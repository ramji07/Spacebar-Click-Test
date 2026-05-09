import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import SpacebarTest from './pages/SpacebarTest'
import CpsTest from './pages/CpsTest'
import KeyboardTest from './pages/KeyboardTest'
import Guide from './pages/Guide'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Disclaimer from './pages/Disclaimer'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div id="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spacebar-click-test" element={<SpacebarTest />} />
          <Route path="/cps-test" element={<CpsTest />} />
          <Route path="/keyboard-test" element={<KeyboardTest />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/guide/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
