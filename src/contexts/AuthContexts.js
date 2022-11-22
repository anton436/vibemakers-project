import React, { createContext, useContext, useEffect, useState } from "react";
import fire from "../fire";
export const authContexts = createContext();
export const useAuth = () => {
    return useContext(authContexts);
};
const AuthContexts = ({ children }) => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState("");
    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };
    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };
    const handleSingUp = () => {
        clearErrors();
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };
    const handleLogin = () => {
        clearErrors();
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/user-disabled":
                    case "auth/invalid-email":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };
    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    const values = {
        user,
        email,
        password,
        emailError,
        passwordError,
        hasAccount,
        setEmail,
        setPassword,
        setUser,
        setHasAccount,
        handleLogin,
        handleLogout,
        handleSingUp,
    };
    return (
        <authContexts.Provider value={values}>{children}</authContexts.Provider>
    );
};

export default AuthContexts;
