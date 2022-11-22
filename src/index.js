import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContexts from "./contexts/AuthContexts";
import NavabarContexts from "./contexts/NavabarContexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <NavabarContexts>
        <AuthContexts>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthContexts>
    </NavabarContexts>
);
