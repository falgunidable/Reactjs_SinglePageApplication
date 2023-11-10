import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import SongDash from "./Component/SongDash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/songdashboard" element={<SongDash />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
