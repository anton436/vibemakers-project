import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavabarContexts from "./contexts/NavabarContexts";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ProductContextProvider>
            <AuthContextProvider>
                <NavabarContexts>
                    <App />
                </NavabarContexts>
            </AuthContextProvider>
        </ProductContextProvider>
    </BrowserRouter>
);
