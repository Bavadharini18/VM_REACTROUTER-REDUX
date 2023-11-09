import React from "react";
import Home from './Home';
import './App.css';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Login from "./Login";

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </BrowserRouter>
  )
}