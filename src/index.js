import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContexts from "./contexts/AuthContexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthContexts>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContexts>
);
