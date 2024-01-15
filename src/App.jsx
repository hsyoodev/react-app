import { useState, useMemo, useRef } from 'react';

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  function handleClick() {
    setIsToggleOn(!isToggleOn);
  }

  return (
    <button onClick={(e) => handleClick(e)}>
      {isToggleOn ? '켜짐' : '꺼짐'}
    </button>
  );
}

function App() {
  return (
    <div>
      <Toggle />
    </div>
  );
}

export default App;
