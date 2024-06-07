
//import './App.css';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import SignIn from './components/Login/SignIn';
import Login from './components/Login/Login';
import Flights from './components/Flights/Flights';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="">
      
      
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/SignIn" element={<SignIn/>} />
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/flights' element={<Flights/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
