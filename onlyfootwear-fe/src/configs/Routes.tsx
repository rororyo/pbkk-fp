// src/configs/Routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import HomePage from "../pages/user/HomePage";
import ProductDetailPage from "../pages/user/ProductDetailPage";
import FootSizeResult from "../pages/user/FootSizeResult";
// Main Routes component for the application
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/foot-size-result" element={<FootSizeResult />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
            <HomePage />
        }
      />
      <Route
        path="/items/:id"
        element={
            <ProductDetailPage />
        }
      />
    </Routes>
  );
};

export default AppRoutes;