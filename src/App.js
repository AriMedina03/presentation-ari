import React from 'react';  
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './component/ScrollTopTop'; 
import Home from './component/pages/Home';
import VantTec from './component/pages/VantTec';
import SAIRS from './component/pages/SAIRS';
import Hobbies from './component/pages/Hobbies';
import School from './component/pages/school';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />  
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/VantTec' exact Component={VantTec} /> 
        <Route path='/SAIRS' exact Component={SAIRS} />
        <Route path='/Hobbies' exact Component={Hobbies} />
        <Route path='/School' exact Component={School} />
      </Routes>
    </Router>
    </>
  );
}
export default App;