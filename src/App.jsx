import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';

function Component1() {
  return <div>1 번 화면</div>;
}
function Component2() {
  return <div>2 번 화면</div>;
}
function Component3() {
  return <div>3 번 화면</div>;
}
function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM</h1>
        <h2>Link</h2>
        {/* a 태그에 class 가 안 붙는다. */}
        {/* <Link to="/1">1번으로 이동</Link> /&nbsp;
        <Link to="/2">2번으로 이동</Link> /&nbsp;
        <Link to="/3">3번으로 이동</Link> */}
        <h2>NavLink</h2>
        {/* a 태그에 class 가 붙는다 */}
        <NavLink to="/1">1번으로 이동</NavLink> /&nbsp;
        <NavLink to="/2">2번으로 이동</NavLink> /&nbsp;
        <NavLink to="/3">3번으로 이동</NavLink>
        <Routes>
          <Route path="/1" element={<Component1 />} />
          <Route path="/2" element={<Component2 />} />
          <Route path="/3" element={<Component3 />} />
        </Routes>
        <footer
          style={{
            marginTop: '50px',
            background: 'lightblue',
          }}
        >
          꼬리말
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
