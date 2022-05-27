import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const switchMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar mode={mode} switchMode={switchMode} />
        <Routes>
          <Route path="/" element={<Home mode={mode} />} />
          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
