import React from 'react';
import { useTheme } from './ThemeContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Maps from './Pages/Maps';

const MainContent = () => {
  const { darkMode } = useTheme();

  return (
    <Router >
       <Routes>
       <Route path="/" element={<Login/>} />
       <Route path='/map' element={<Maps/>} />
        </Routes> 
    </Router>
  );
};

export default MainContent;