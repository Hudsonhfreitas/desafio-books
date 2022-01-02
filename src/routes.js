import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route private="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;