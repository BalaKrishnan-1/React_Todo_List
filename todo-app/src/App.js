import React from 'react';
import './App.css';
import { useCallback, useState, useEffect,useRef} from "react";
import { BrowserRouter,Link,Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import FrontPage from "./components/Front-Page.jsx";
import Dashboard from "./components/Main.jsx";
import Analyzer from "./components/Analyzer.jsx";
import "./assets/fonts/Merriweather_48pt-Bold.woff";

function App() {
  return (
    <>
     <BrowserRouter  future={{ v7_startTransition: true,v7_relativeSplatPath: true }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Main" element={<Dashboard/>}/>
        <Route path="/Analyzer" element={<Analyzer/>} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
