import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((prev) => {
      console.log(prev + 1);
      return prev + 1;
    });
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
