import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (

    <div className="App">


      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>

  );
}

export default App;
