import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Apropos from "./pages/Concept.jsx";
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
import Homepage from "./adminPages/HomepageManagement.jsx";
import Activity from "./adminPages/ActivityManagement.jsx";
import User from "./adminPages/UserManagament.jsx";
import Reserv from "./adminPages/ReservManagement.jsx";
import MenuManagement from "./adminPages/MenuManagement.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./pages/Profile.jsx";
import Politique from "./pages/Politics.jsx";
import DashBlog from "./adminPages/BlogManagement.jsx";
import { AuthProvider, useAuth } from "./contexts/AuthContext.jsx";

function App() {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <div>Chargement de l'application...</div>;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/boutique" element={<Shop />}></Route>
        <Route path="/apropos" element={<Apropos />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/agenda" element={<Program />}></Route>
        <Route path="/partenaires" element={<Partnership />}></Route>
        <Route path="/404" element={<Travaux />}></Route>
        <Route path="/mentions" element={<Mentions />}></Route>
        <Route path="/politique" element={<Politique />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/admin/dashboard/homepageManagement"
            element={<Homepage />}
          ></Route>
          <Route
            path="/admin/dashboard/activity"
            element={<Activity />}
          ></Route>
          <Route path="/admin/dashboard/user" element={<User />}></Route>
          <Route
            path="/admin/dashboard/reservation"
            element={<Reserv />}
          ></Route>
          <Route
            path="/admin/dashboard/carte"
            element={<MenuManagement />}
          ></Route>
          <Route path="/admin/dashblog" element={<DashBlog />}></Route>
        </Route>
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
