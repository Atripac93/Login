import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorAlert from "./components/alerts/ErrorAlert";
import ProtectedRoute from "./middleware/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route exact path="*" element={<ErrorAlert />} />
      </Routes>
    </Router>
  );
};

export default App;
