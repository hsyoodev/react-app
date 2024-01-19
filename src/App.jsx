import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

function ComponentN() {
  const { number } = useParams();
  return <div>{number}번째 화면</div>;
}
function ComponentNN() {
  const { a, b } = useParams();
  return (
    <div>
      {a} / {b} 번째 화면
    </div>
  );
}
function ComponentAZ() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // console.log(searchParams);
  const { id, name } = Object.fromEntries(searchParams);
  return (
    <div>
      ID-{id}, NAME-{name}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM</h1>
        <h2>Link</h2>
        <Link to="/1">1번으로 이동</Link> /&nbsp;
        <Link to="/2">2번으로 이동</Link> /&nbsp;
        <Link to="/1/2">1/2번으로 이동</Link> /&nbsp;
        <Link to="/a?id=10&name=abc">/a번으로 이동</Link> /&nbsp;
        <Routes>
          <Route path="/:number" element={<ComponentN />} />
          <Route path="/:a/:b" element={<ComponentNN />} />
          <Route path="/a" element={<ComponentAZ />} />
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
