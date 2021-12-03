import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Any from "../routes/Any";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/*" element={<Any />} />
      </Routes>
    </Router>
  );
};

export default App;
