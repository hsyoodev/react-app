import './App.css';

function Header() {
  return (
    <header>
      <h1>WEB</h1>
      World Wide Web!
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="1.html">HTML</a>
        </li>
        <li>
          <a href="2.html">CSS</a>
        </li>
        <li>
          <a href="3.html">JavaScript</a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
    </div>
  );
}

export default App;
