import { useState } from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Frame1 } from "./components/Frame1/Frame1";
import { Frame2 } from "./components/Frame2/Frame2";
import image from './assets/bud.png'
import { MoreLife } from "./components/MoreLife/MoreLife";
import Campaign from "./components/Campaign/Campaign";
import AboutUs from "./components/AboutUs/AboutUs";
import { LandingPage } from "./Pages/LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage";

function App() {
  return (
    <div className="app-div">
      <Router>
        
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      {/* <LandingPage/> */}
      </Router>

    </div>

  );
}

export default App;
