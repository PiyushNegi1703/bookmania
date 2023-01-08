import './App.css';
import Main from './MainComponents/Main';
import { Route, Routes } from 'react-router-dom';
import Register from './FormComponents/Form';
import Registered from './RegisteredComponents/Register';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/register' element={<Register />} />
      <Route path='/registered' element={<Registered />} />
    </Routes>
  );
}

export default App;
