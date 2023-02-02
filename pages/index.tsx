import React, { useEffect, useState } from 'react';
import { CounterProvider } from '../context/CountProvider';
import Counter from './../components/Counter';

const Home = () => {

  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <>
      {hydrated &&
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <h1>Counter</h1>
          <CounterProvider><Counter /></CounterProvider>
        </div>
      }
    </>
  );
};

export default Home;
