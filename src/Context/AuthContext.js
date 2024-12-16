import React, { createContext, useState, useEffect } from "react";
import api from "../config/configApi";

const Context = createContext();

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLogin = async () => {
            const token = localStorage.getItem('token');

            if (token) {
                api.defaults.headers.Authorization = `Bearer ${token}`;
                setAuthenticated(true);
            }
            setLoading(false);
        }

        getLogin();
    }, []);

    if (loading) {
        return <h1>Carregando</h1>;
    }

    return (
        <Context.Provider value={{ authenticated }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };
