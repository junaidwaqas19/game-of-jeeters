import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { RouterProvider,Routes,Route, Navigate } from 'react-router'

import App from './App.jsx'
import './index.css'
import About from './frontend/about/About.jsx'
import KeyStats from './frontend/KeyStats/KeyStats.jsx'
import HomePage from './frontend/Home/HomePage'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
           
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about_us" element={<About />} />
        <Route path="/key-stats" element={<KeyStats />} />
        <Route path="*" element={<Navigate to="/" replace />} />  
                           
     
           
          </Routes>
        </BrowserRouter>
    
  </React.StrictMode>,
)
