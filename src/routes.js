import {useContext} from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AttContext } from "./contexts/AttContext";

import Home from "./pages/Home";
import Login from "./pages/Login";

function PrivateRoute({children}) {

    const { authenticated } = useContext(AttContext);
  
    return authenticated ? children : <Navigate to="/" />
    
  }

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;