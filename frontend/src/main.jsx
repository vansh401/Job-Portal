import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
  
import { AuthProvider } from './context/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthProvider>,
)
