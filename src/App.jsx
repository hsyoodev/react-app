import { useState, useMemo, useRef } from 'react';

function Counter() {
  let value = useRef(0);
  const [count, setCount] = useState(0);

  const onClick = () => {
    value.current++;
    console.log(`value: ${value.current}`);
    setCount(count + 1);
  };
  const factorial = (n) => {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return factorial(n - 1) * n;
    }
  };
  const memo = useMemo(() => {
    console.log('factorial 연산');
    let result = factorial(count);
    return result;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <h1>팩토리얼 연산 결과: {memo}</h1>
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
