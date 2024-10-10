// src/configs/Routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import HomePage from "../pages/user/HomePage";
import DetailItemPage from "../pages/user/DetailItemPage";
import PrivateRoute from "../components/PrivateRoute";

// Main Routes component for the application
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/auth" element={<AuthPage />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/item/:id"
        element={
          <PrivateRoute>
            <DetailItemPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
