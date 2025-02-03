import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import PageNotFound from "../pages/error/PageNotFound";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/signin" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
