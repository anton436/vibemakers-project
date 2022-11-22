import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './routes/MainRoutes';

const App = () => {
    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <MainRoutes />
                <Footer />
            </AuthContextProvider>
        </>
    );
};

export default App;
