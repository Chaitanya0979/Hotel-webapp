import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Bookings from '../pages/Bookings';
import Hotels from '../pages/Hotels';
import Profile from '../pages/Profile';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
