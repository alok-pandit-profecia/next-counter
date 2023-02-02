import { renderHook, act } from '@testing-library/react'
import { deleteCookie } from 'cookies-next'
import useCounter from './../../hooks/useCounter'

describe('useCounter', () => {
  it('initializes the count to 0', () => {
    deleteCookie('counter')
    const { result } = renderHook(() => useCounter())

    expect(result.current.counter).toBe(0)
  })

  it('initializes the count to 45', () => {
    deleteCookie('counter')

    const { result } = renderHook(() => useCounter(45))

    expect(result.current.counter).toBe(45)
  })

  it('increments the count', () => {
    deleteCookie('counter')

    const { result } = renderHook(() => useCounter(4))

    act(() => {
      result.current.increment()
    })

    expect(result.current.counter).toBe(5)
  })

  it('decrements the count', () => {
    deleteCookie('counter')

    const { result } = renderHook(() => useCounter())

    act(() => {
      result.current.decrement()
    })

    expect(result.current.counter).toBe(0)
  })
  it('decrements the counter with an initial count', () => {
    deleteCookie('counter')

    const { result } = renderHook(() => useCounter(3))

    act(() => {
      result.current.decrement()
    })

    expect(result.current.counter).toBe(2)
  })
})
