import {useState, useEffect} from "react";
import history from "../history";

import api from "../services/api";

export default function useAtt() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const local = localStorage.getItem("ioasys");
        const json = JSON.parse(local)
        
        if(json) {
            api.defaults.headers.Authorization = `Bearer ${json.token}`
            setAuthenticated(true)
        }

        setLoading(false)
    }, []);

    async function handleLogin(email, password) {
        const res = await api.post("auth/sign-in", {
            email,
            password,
        });

        const ioasys = {
            token: res.headers.authorization,
            refreshToken: res.headers["refresh-token"],
            name: res.data.name,
        }

        localStorage.setItem("ioasys", JSON.stringify(ioasys))

        api.defaults.headers.Authorization = `Bearer ${ioasys.token}`;

        setAuthenticated(true)
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem("ioasys");
        api.defaults.headers.Authorization = undefined;
        history.push("/login");
      }
    
      return { authenticated, loading, handleLogin, handleLogout };
    
}