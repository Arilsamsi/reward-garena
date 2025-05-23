import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Login from './pages/Login';
import ClaimPrize from './pages/ClaimPrize';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/claim-prize"
          element={
            <ProtectedRoute>
              <ClaimPrize />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;