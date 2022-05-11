import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Diploma from "./Diploma";

import "./App.css";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/diploma' element={<Diploma />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
