import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import AddPage from './pages/AddPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddPage />} />
      </Routes>
    </div>
  );
}

export default App;
