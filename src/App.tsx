import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import AddPage from './pages/AddPage';
import ReqPage from './pages/ReqPage';
import { TransactionProvider } from './context/transaction';

function App() {
  return (
    <div className="App">
      <TransactionProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/req' element={<ReqPage />} />
        </Routes>
      </TransactionProvider>
    </div>
  );
}

export default App;
