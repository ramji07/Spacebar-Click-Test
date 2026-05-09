import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'

const CpsTest = lazy(() => import('./pages/CpsTest'))
const KeyboardTest = lazy(() => import('./pages/KeyboardTest'))
const Guide = lazy(() => import('./pages/Guide'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const Disclaimer = lazy(() => import('./pages/Disclaimer'))

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
        <Suspense fallback={<div className="route-loader" aria-live="polite">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
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
        </Suspense>
      </div>
      <Footer />
    </Router>
  )
}

export default App
