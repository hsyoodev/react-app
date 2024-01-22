import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NewsPage></NewsPage>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
