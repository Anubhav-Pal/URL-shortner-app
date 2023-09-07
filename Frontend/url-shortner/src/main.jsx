import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <div className='bg-black h-screen'>
      <App />
    </div>
  </React.StrictMode>,
)
