import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Signin from "./pages/Signin/Signin";
import Login from "./pages/Login/Login";
import Verify from "./pages/Signin/Verify";
import Profile from "./pages/profile/Profile";
function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/verify/:email" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

export default App;
