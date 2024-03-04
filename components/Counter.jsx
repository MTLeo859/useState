import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{textAlign: 'center', marginTop: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h2>Contador</h2>
      <p>El valor actual es: {count}</p>
      <button style={{padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px'}} onClick={increment}>Incrementar</button>
      <button style={{padding: '10px 20px', fontSize: '16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'}} onClick={reset}>Reiniciar</button>
    </div>
  );
};

export default Counter;
