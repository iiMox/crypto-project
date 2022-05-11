import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Department from "./Department";
import University from "./University";
import Ministry from "./Ministry";
import Diploma from "./Diploma";

import "./App.css";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/department' element={<Department />} />
                    <Route path='/university' element={<University />} />
                    <Route path='/ministry' element={<Ministry />} />
                    <Route path='/diploma' element={<Diploma />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
