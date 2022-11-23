import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
<<<<<<< HEAD
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/auth", element: <AuthPage />, id: 2 },
        { link: "/admin", element: <AdminPage />, id: 3 },
        { link: "/products", element: <ProductsPage />, id: 4 },
        { link: "/products/:id", element: <ProductDetailsPage />, id: 5 },
        { link: "*", element: <NotFoundPage />, id: 6 },
=======
        { link: '/', element: <HomePage />, id: 1 },
        { link: '/auth', element: <AuthPage />, id: 2 },
        { link: '/admin', element: <AdminPage />, id: 3 },
        { link: '/products', element: <ProductsPage />, id: 4 },
        { link: '/products/:id', element: <ProductDetailsPage />, id: 5 },
        { link: '*', element: <NotFoundPage />, id: 6 },
>>>>>>> c4b536b3770ded489d8822014f1a3490af0e202f
    ];
    return (
        <>
            <Routes>
                {PUBLIC_ROUTES.map((item) => (
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
