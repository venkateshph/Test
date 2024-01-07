import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './fotter.css'
import Safe from './security/Safe.jsx'
import { BrowserRouter , Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Admin
        </a>
       
      </nav>
    <BrowserRouter>
      <Routes>
        <Route element={<Safe></Safe>}>
          <Route element={<Homepage/>} path='/Homepage'/>
        </Route>
        <Route path="/" exact element={<App/>}></Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
