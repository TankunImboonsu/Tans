import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Calculate from './Calculate'
import FetchApi from './FetchApi'
import NotFound from './NotFound'

const App = () => {
  const [originalPrice, setOriginalPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <Router>
      <nav style={{ background: '#f0f0f0', padding: '10px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0 }}>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/calculate" style={{ textDecoration: 'none' }}>Calculate</Link>
          </li>
          <li>
            <Link to="/fetchapi" style={{ textDecoration: 'none' }}>Fetch API</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/fetchapi" element={<FetchApi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App