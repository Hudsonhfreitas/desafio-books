import {useState, useEffect} from "react";
import history from "../history";

import api from "../services/api";

export default function useAtt() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }

        setLoading(false)
    }, []);

    async function handleLogin(email, password) {
        const res = await api.post("auth/sign-in", {
            email,
            password,
        });
        const name = res.data.name;
        const token = res.headers.authorization;
        const refreshToken = res.headers["refresh-token"];

        localStorage.setItem("name", JSON.stringify(name))
        localStorage.setItem("token", JSON.stringify(token))
        localStorage.setItem("refresh-token", JSON.stringify(refreshToken))

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setAuthenticated(true)
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("refresh-token");
        api.defaults.headers.Authorization = undefined;
        history.push("/login");
      }
    
      return { authenticated, loading, handleLogin, handleLogout };
    
}