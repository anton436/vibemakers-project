import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";

const MainRoutes = () => {
    const PUBLICK_ROUTES = [
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/auth", element: <AuthPage />, id: 2 },
    ];
    return (
        <>
            <Routes>
                {PUBLICK_ROUTES.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </>
    );
};

export default MainRoutes;
