import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from '../pages/AboutUsPage';
import AdminPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import ContactUsPage from '../pages/ContactUsPage';
import EditProductPage from '../pages/EditProductPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductsPage from '../pages/ProductsPage';

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        { link: '/', element: <HomePage />, id: 1 },
        { link: '/auth', element: <AuthPage />, id: 2 },
        { link: '/admin', element: <AdminPage />, id: 3 },
        { link: '/products', element: <ProductsPage />, id: 4 },
        { link: '/products/:id', element: <ProductDetailsPage />, id: 5 },
        { link: '*', element: <NotFoundPage />, id: 6 },
        { link: '/edit/:id', element: <EditProductPage />, id: 7 },

        { link: '/contactus', element: <ContactUsPage />, id: 8 },

        { link: '/aboutus', element: <AboutUsPage />, id: 9 },
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
