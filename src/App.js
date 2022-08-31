import React from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar2 from './app/Navbar/Navbar2';
function App(props) {
  return (
    <div>
      <Navbar2></Navbar2>
      <Outlet></Outlet>
      </div>
      
  );
}

export default App;
