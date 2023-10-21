import './App.css';
import React, { useState,useEffect } from 'react';
import Home from "./pages/Home.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinesPage from "./pages/LinesPage";
import About from "./pages/About";



function App() {

  const [propColor, setPropColor] = useState("");
  

  return (

    
    <>

        
      <BrowserRouter>
        <Routes>
        <Route index element={<Home setPropColor={setPropColor}/>} />
          <Route path={"linespage"} element={<LinesPage propColor={propColor}/>} />
          <Route path={"about"} element={<About />} />

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
