import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RouterProvider, createBrowserRouter } from 'react-router'
import App from './App'

describe('App Component', () => {
  it('renders the hello world heading', () => {
    const router = createBrowserRouter([{ path: '/', element: <App /> }])
    render(<RouterProvider router={router} />)
    
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('displays the Shuru Theme badge', () => {
    const router = createBrowserRouter([{ path: '/', element: <App /> }])
    render(<RouterProvider router={router} />)
    
    expect(screen.getByText('Shuru Theme')).toBeInTheDocument()
  })

  it('renders all three buttons', () => {
    const router = createBrowserRouter([{ path: '/', element: <App /> }])
    render(<RouterProvider router={router} />)
    
    expect(screen.getByRole('button', { name: /Primary/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Outline/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Ghost/i })).toBeInTheDocument()
  })

  it('displays the version info callout', () => {
    const router = createBrowserRouter([{ path: '/', element: <App /> }])
    render(<RouterProvider router={router} />)
    
    expect(screen.getByText('Version ready in .env')).toBeInTheDocument()
  })

  it('renders the body text about theme and typography', () => {
    const router = createBrowserRouter([{ path: '/', element: <App /> }])
    render(<RouterProvider router={router} />)
    
    expect(screen.getByText(/Shuru global theme/i)).toBeInTheDocument()
  })

  it('buttons have correct CSS classes', () => {
    const router = createBrowserRouter([{ path: '/', element: <App /> }])
    render(<RouterProvider router={router} />)
    
    const primaryBtn = screen.getByRole('button', { name: /Primary/i })
    const outlineBtn = screen.getByRole('button', { name: /Outline/i })
    const ghostBtn = screen.getByRole('button', { name: /Ghost/i })
    
    expect(primaryBtn).toHaveClass('btn-primary')
    expect(outlineBtn).toHaveClass('btn-outline')
    expect(ghostBtn).toHaveClass('btn-ghost')
  })
})
