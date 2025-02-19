import './App.css';
import React, { Profiler } from 'react';
import Login from './components/Login';
import Sidebar from './components/layout/Sidebar';
import Signup from './components/Signup';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Sell from './components/Sell';
import Buy from './components/Buy';
import Aboutus from './components/Aboutus';
import Howitworks from './components/Howitworks';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';
function App() {
  return (
    <>  

    <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/howitworks' element={<Howitworks/>}/> 
        <Route path='/aboutus' element={<Aboutus/>}/> 
        
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
