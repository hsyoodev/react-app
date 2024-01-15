import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');

  const onClick = () => {
    setCount((prev) => {
      console.log(prev + 1);
      return prev + 1;
    });
  };
  const onClick2 = () => {
    setColor('blue');
  };

  console.log(
    `Counter 컴포넌트가 생성되거나 state가 변경되어 렌더링 될 때마다 실행`
  );

  useEffect(() => {
    console.log(`Counter 컴포넌트 생성, count 값 변경 될 때 실행`);
  }, [count]);
  useEffect(() => {
    console.log(`Counter 컴포넌트 생성, color 값 변경 될 때 실행`);
  }, [color]);
  useEffect(() => {
    return () => {
      console.log(`Counter 컴포넌트 제거`);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
      <button onClick={onClick2}>Click</button>
    </div>
  );
}

function App() {
  const [hide, setHide] = useState(false);

  const onClick3 = () => {
    setHide(!hide);
  };

  return (
    <div>
      <button onClick={onClick3}>Show / Hide</button>
      {!hide ? <Counter /> : null}
    </div>
  );
}

export default App;
