import logo from './logo.svg';
import './App.css';
import Login from './component/login/login';
import Dashbord from './component/dashbord/dashbord';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="">
      <BrowserRouter >
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Dashbord'element={ <Dashbord />}></Route>
      </Routes>
      </BrowserRouter>

      
     
    </div>
  );
}

export default App;
