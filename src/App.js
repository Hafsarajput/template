import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
   <div className="App">
      <Header/>
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/Pr' element={<Hero />} />
          <Route path='/Cardd' element={<Card />} />
          <Route path = '/Contactt' element ={<Contact/>} />
        </Routes>
      
    </div>
  );
}

export default App;
