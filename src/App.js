import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './components/Read';
import Edit from './components/Edit';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Read/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
