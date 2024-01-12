import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  const list = ['HTML', 'CSS', 'JavaScript'];
  return (
    <>
      <Header title="제목" />
      <Nav list={list} />
    </>
  );
}

export default App;
