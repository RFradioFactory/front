import './App.css'
import Header from './components/header/header';
import React, {useState} from 'react';
import Registr from './components/Registration/Registration';
import LogIn from './components/LogIn/LogIn';
import { AuthContext, AuthProvider } from './components/sevise/AutoContext';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <>
      <AuthProvider>
        <Header/>
        <Routes>
          <Route path='/Reg' element = {<Registr/>}></Route>
          <Route path='/Login' element = {<LogIn/>}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
};



export default App
