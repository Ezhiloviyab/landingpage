import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Card from "../src/pages/Card";
import  Login from "../src/pages/Login";


function App() {
  return (<>
    <div className="container">
      <nav>
        
        <ul>
          <h1 className="logo">Music Land</h1>
          <Link to="/Home" class="list">
            Home
          </Link>
          <Link to="/Card" class="list">
            Products
          </Link>
          <Link to="/Login" class="list">
            User Login
          </Link>
          
        </ul>
      </nav>

             </div>
      <Routes>
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/Card" element={<Card/>} />
        <Route path="/Login" element={<Login />} />
      
      </Routes>
      <div className="home">
      <div className="col">
                <h1>Enjoy the Music</h1><br/>
                <p>Playing instruments is an important part of music-making.<br/> This section is full of resources for popular classroom instruments <br/>It is not just an activity that involves an individual and a set of musical instruments. It is, instead,<br/> a medium that helps express the most profound human emotions.</p>
            </div>
    </div>
    <div className="landing">
    </div>
  
  
   </>
  );
}

export default App;