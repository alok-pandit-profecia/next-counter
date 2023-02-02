import { useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const useCounter = (initialCounter: number = 0) => {
  // * Number is at least 6x faster than parseInt
  const countCookie = hasCookie('counter') ? Number(getCookie('counter')) : initialCounter
  const [counter, setCounter] = useState(countCookie)

  // TODO: Not using useCallback hook here since the function is small and adding useCallback will be an extra overhead. We can use useCallback to memoize these functions if they were returning something big instead of just a number.

  const increment = () => {
    setCookie('counter', String(counter + 1), { maxAge: 60 * 60 * 24 })
    setCounter(counter + 1)
  }
  // * If the counter value is 0, prevent it from becoming negative
  const decrement = () => {
    setCookie('counter', String(counter - 1), { maxAge: 60 * 60 * 24 })
    counter < 1 ? undefined : setCounter(counter - 1)
  }

  return { counter, increment, decrement }
}

export default useCounter