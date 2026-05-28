import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routes'
import { CounterProvider } from './context/CounterContext'

async function init() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')
    await worker.start()
  }

  const root = document.getElementById('root')
  ReactDOM.createRoot(root!).render(
    <React.StrictMode>
      <CounterProvider>
        <RouterProvider router={router} />
      </CounterProvider>
    </React.StrictMode>,
  )
}

init()
