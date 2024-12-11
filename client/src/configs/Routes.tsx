// src/configs/Routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import HomePage from "../pages/user/HomePage";
import ProductDetailPage from "../pages/user/ProductDetailPage";
import FootSizePage from "../pages/user/FootSizePage";
import AccountPage from "../pages/user/AccountPage";
import CartPage from "../pages/user/CartPage";
import OverviewPage from "../pages/admin/OverviewPage";
import UserPage from "../pages/admin/UserPage";
import OrdersPage from "../pages/admin/OrdersPage";
import ProductsPage from "../pages/admin/ProductsPage";
import ReportsPage from "../pages/admin/ReportsPage";
import CategoryPage from "../pages/user/CategoryPage";
import ProfilePage from "../pages/user/ProfilePage";
import NotFound from "../pages/NotFound";

// Main Routes component for the application
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/foot-measurement" element={<FootSizePage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/dashboard" element={<OverviewPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/categories/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/profile" element={<ProfilePage />} />

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;