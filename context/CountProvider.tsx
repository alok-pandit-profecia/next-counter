import React, { useContext } from 'react'
import useCounter from '../hooks/useCounter'

interface ICounterContext {
  counter: number
  increment: () => void
  decrement: () => void
}
const CounterContext = React.createContext<ICounterContext>({
  counter: 0,
  increment: () => { },
  decrement: () => { }
})

// * Everything encapsulated inside the counter provider will have the same counter value .i.e. global state ( for example a second counter can be created to test this. Both counters will always be in sync )
export const CounterProvider = ({ children }) => {
  const { counter, increment, decrement } = useCounter();
  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounterContext = () => {
  const { counter, increment, decrement } = useContext(CounterContext)
  return { counter, increment, decrement }
}