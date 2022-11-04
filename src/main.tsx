// Default Imports
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components Imports
import { App } from './App'
import { Header } from './components/Header'
import { TaskInterface } from './components/Task'

// Styles Imports
import './Global.css'

export const TasksList: TaskInterface[] = []

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
)
