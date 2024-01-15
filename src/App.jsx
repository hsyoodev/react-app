import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './pages/Read';
import Adsform from './pages/Adsform';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/read" element={<Read />} />
          <Route path="/adsform" element={<Adsform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
