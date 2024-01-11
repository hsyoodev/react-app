import Nav from './components/Nav';

function App() {
  const list = ['HTML', 'CSS', 'JavaScript'];

  return (
    <div>
      <Nav list={list} />
    </div>
  );
}

export default App;
