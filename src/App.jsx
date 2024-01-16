import { useState, useMemo, useEffect } from 'react';
import Title from './components/Title';
import Scissors from './components/Scissors';
import Rock from './components/Rock';
import Paper from './components/Paper';
import Result from './components/Result';

import './App.css';

function App() {
  const rockScissorsPaper = ['바위', '가위', '보'];
  const [com, setCom] = useState(null);
  const [player, setPlayer] = useState(null);

  const getMessage = () => {
    if ((com + 2) % 3 === player) {
      return '당신이 이겼습니다.';
    } else if (com === player) {
      return '당신이 비겼습니다.';
    } else {
      return '당신이 졌습니다.';
    }
  };

  const result = {
    com: rockScissorsPaper[com],
    player: rockScissorsPaper[player],
    message: getMessage(),
  };

  return (
    <>
      <div className="App">
        <Title />
        <Rock setPlayer={setPlayer} setCom={setCom} />
        <Scissors setPlayer={setPlayer} setCom={setCom} />
        <Paper setPlayer={setPlayer} setCom={setCom} />
        <Result result={result} />
      </div>
    </>
  );
}

export default App;
