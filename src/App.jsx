import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Program from "./pages/Program.jsx";
import Partnership from "./pages/Partnership.jsx";
import Shop from "./pages/Shop.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Travaux from "./pages/Travaux.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/boutique" element={<Shop />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/agenda" element={<Program />}></Route>
          <Route path="/partenaires" element={<Partnership />}></Route>
          <Route path="/404" element={<Travaux />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
