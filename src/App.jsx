import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';

function A() {
  return <B />;
}
function B() {
  return <C />;
}
function C() {
  return (
    <ThemeContext.Consumer>
      {(color) => (
        <UserContext.Consumer>
          {(user) => (
            <div>
              <h3>{user.name}</h3>
              <h1 style={{ backgroundColor: color }}>C 내용</h1>
            </div>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}
function App() {
  const [color, setColor] = useState('gray');
  const [user, setUser] = useState({ name: 'Guest' });
  const handleClick = (value) => setColor(value);
  return (
    <div>
      <button onClick={() => handleClick('red')}>Red</button>
      <button onClick={() => handleClick('blue')}>Blue</button>
      <br />
      <ThemeContext.Provider value={color}>
        <UserContext.Provider value={user}>
          <A />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
