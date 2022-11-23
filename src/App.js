import React from "react";
import NavbarTest from "./components/Navbar/NavbarTest";
import UpNavbar from "./components/Navbar/UpNavbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
    return (
        <div>
            <UpNavbar />
            <NavbarTest />
            <MainRoutes />
        </div>
    );
};

export default App;
