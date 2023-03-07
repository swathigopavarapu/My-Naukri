import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route,Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SmartJobs from './components/SmartJobs';
// import ProductStore from './Components/ProfileContext';

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Home/Profile' element={<Profile/>}></Route>
        <Route path='/Home/SmartJobs' element={<SmartJobs/>}></Route>
      </Routes>
      {/* </ProductStore> */}
      
    </>
  );
}

export default App;
