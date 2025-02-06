import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Challenge from "./pages/Challenge";
import Community from "./pages/Community";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default App;
