import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Add from './Component/Add';
import Update from './Component/Update';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
