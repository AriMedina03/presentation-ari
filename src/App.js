import React from 'react';  
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/pages/Home';
import VantTec from './component/pages/VantTec';
import SAIRS from './component/pages/SAIRS';
import Hobbies from './component/pages/Hobbies';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/VantTec' exact Component={VantTec} /> 
        <Route path='/SAIRS' exact Component={SAIRS} />
        <Route path='/Hobbies' exact Component={Hobbies} />
      </Routes>
    </Router>
    </>
  );
}
export default App;