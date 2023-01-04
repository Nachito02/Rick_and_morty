import React from 'react'
import './index.css'
import App from './App'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

createRoot(

  document.getElementById('root')).render(
    <Provider store={store}>
       <BrowserRouter>
    <App />
  </BrowserRouter>
    </Provider>
  )

