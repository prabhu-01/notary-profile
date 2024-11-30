import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
