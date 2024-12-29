import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <Router>
        <div className="flex relative ">
          <SideBar />
          <div className="flex-1  absolute left-0 right-0 ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorite />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
