import React, { useState } from 'react';
import { useCounterContext } from '../context/CountProvider';

const Counter = () => {
  const { counter, increment, decrement } = useCounterContext();
  const [showCount, setShowCount] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button onClick={() => setShowCount(!showCount)}>
        Toggle Count
      </button>
      <div data-testid='toggled' style={{ display: showCount ? 'flex' : 'none', alignSelf: 'center' }}>
        <button onClick={decrement}>-</button>
        <b data-testid='counter'>{counter}</b>
        <button onClick={increment}>+</button>
      </div>
    </div >
  );
};

export default Counter;
