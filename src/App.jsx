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
import Admin from "./adminPages/AdminLogin.jsx";
import Dashboard from "./adminPages/Dashboard.jsx";
import Mentions from "./pages/Mentions.jsx";
import Pastry from "./adminPages/PastryManagement.jsx";
import Event from "./adminPages/EventManagement.jsx";
import Workshop from "./adminPages/WorkshopManagement.jsx";
import User from "./adminPages/UserManagament.jsx";
import Reserv from "./adminPages/ReservManagement.jsx";
import Cake from "./adminPages/cakeManagement.jsx";

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
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/mentions" element={<Mentions />}></Route>
          <Route path="/admin/dashboard/pastry" element={<Pastry />}></Route>
          <Route path="/admin/dashboard/event" element={<Event />}></Route>
          <Route
            path="/admin/dashboard/workshop"
            element={<Workshop />}
          ></Route>
          <Route path="/admin/dashboard/user" element={<User />}></Route>
          <Route
            path="/admin/dashboard/reservation"
            element={<Reserv />}
          ></Route>
          <Route path="/admin/dashboard/gateaux" element={<Cake />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
