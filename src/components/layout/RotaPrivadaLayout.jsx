import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RotaPrivadaLayout = () => {
    console.log("Checking authentication:", !!localStorage.getItem("user"));
    const user = localStorage.getItem("user") ? true : false;
    return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default RotaPrivadaLayout;