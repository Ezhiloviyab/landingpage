import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Homepage";
import Collection from "./pages/Collection.js";
import Order from "./pages/Order";
import About from "./pages/About";





function App() {
  return (<>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection/>} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/About" element={<About/>} />
      
      </Routes>
    
  
   </>
  );
}

export default App;