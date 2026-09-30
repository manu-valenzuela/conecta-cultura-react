import { StrictMode } from 'react'
//Importación de react-router-dom (BrowserRouter)
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'

//Cambio de StrictMode a BroserRouter
createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  <App /> 
  </BrowserRouter>,
)
