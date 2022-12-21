import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client';
import fuenteRaM from './fonts/get_schwifty.ttf'

import { BrowserRouter } from 'react-router-dom';
createRoot(

  document.getElementById('root')).render( <BrowserRouter>
    <App />
  </BrowserRouter>)

