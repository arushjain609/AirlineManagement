
//import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SignIn from './components/Login/SignIn';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="">
      <Navbar/>
      <div className='h-[4.2rem]'></div>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/SignIn" element={<SignIn/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
