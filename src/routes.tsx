import { createBrowserRouter } from 'react-router'
import App from './App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/primary',
    element: <div className="min-h-screen bg-orange-50 p-8 text-orange-900">Primary route content</div>
  },
  {
    path: '/outline',
    element: <div className="min-h-screen bg-white p-8 text-orange-800 border-t-4 border-orange-300">Outline route content</div>
  },
  {
    path: '/ghost',
    element: <div className="min-h-screen bg-stone-50 p-8 text-orange-700">Ghost route content</div>
  }
])
