import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import ErrorPage from '../pages/ErrorPage'

// Creation of router
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path='login' element={<SignIn />} />
      <Route path='profile' element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;