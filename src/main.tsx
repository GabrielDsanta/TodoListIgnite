// Default Imports
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components Imports
import { App } from './App'
import { Header } from './components/Header'

// Styles Imports
import './Global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
)
