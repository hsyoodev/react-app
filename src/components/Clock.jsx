import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';

function Clock() {
  const [clock, setClock] = useState('');

  const getClock = useCallback(() => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    setClock(`${hours} : ${minutes} : ${seconds}`);
  }, []);

  useEffect(() => {
    getClock();

    setInterval(getClock, 1000);
  }, []);

  return (
    <h1>
      <strong>{clock}</strong>
    </h1>
  );
}

export default Clock;
