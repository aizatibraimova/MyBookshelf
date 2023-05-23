import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Bookshelf from "./components/Bookshelf";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="bookshelf" element={<Bookshelf />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Bookshelf />
    </div>
  );
}

export default App;
