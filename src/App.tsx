import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Challenge from "./pages/Challenge";
import Community from "./pages/Community";
import Description from "./pages/Description";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/community" element={<Community />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </Router>
  );
};

export default App;
