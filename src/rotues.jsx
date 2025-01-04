import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Codigo from "./pages/Codigo";

export default function Rotas() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Codigo />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}