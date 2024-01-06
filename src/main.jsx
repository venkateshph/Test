import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './fotter.css'
import Footter from './Footter.jsx'
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" exact element={<App/>}></Route>
        <Route path="/Homepage" element={<Homepage data={false}/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)