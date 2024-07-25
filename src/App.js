import logo from './logo.svg';
import './App.css';
import FirstPage from './components/FirstPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/display' element={<Display />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
