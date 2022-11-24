import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPage from '../pages/AdminPage';
import AuthPage from '../pages/AuthPage';
import EditProductPage from '../pages/EditProductPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductsPage from '../pages/ProductsPage';

const MainRoutes = () => {
<<<<<<< HEAD
    const PUBLIC_ROUTES = [
        { link: '/', element: <HomePage />, id: 1 },
        { link: '/auth', element: <AuthPage />, id: 2 },
        { link: '/admin', element: <AdminPage />, id: 3 },
        { link: '/products', element: <ProductsPage />, id: 4 },
        { link: '/products/:id', element: <ProductDetailsPage />, id: 5 },
        { link: '*', element: <NotFoundPage />, id: 6 },
        { link: '/edit/:id', element: <EditProductPage />, id: 7 },
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
=======
  const PUBLIC_ROUTES = [
    { link: '/', element: <HomePage />, id: 1 },
    { link: '/auth', element: <AuthPage />, id: 2 },
    { link: '/admin', element: <AdminPage />, id: 3 },
    { link: '/products', element: <ProductsPage />, id: 4 },
    { link: '/products/:id', element: <ProductDetailsPage />, id: 5 },
    { link: '*', element: <NotFoundPage />, id: 6 },
    { link: '/edit/:id', element: <EditProductPage />, id: 7 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
>>>>>>> fe1e30d10da9971562f1146299d33959dac452d7
};

export default MainRoutes;
