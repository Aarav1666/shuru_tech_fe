import React, { createContext, useContext, useState, ReactNode } from 'react'

type CounterContextType = {
  counter: number
  increment: () => void
  decrement: () => void
}

const CounterContext = createContext<CounterContextType | undefined>(undefined)

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter((c) => c + 1)
  const decrement = () => setCounter((c) => c - 1)

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => {
  const ctx = useContext(CounterContext)
  if (!ctx) {
    throw new Error('useCounter must be used within a CounterProvider')
  }
  return ctx
}

export default CounterProvider
