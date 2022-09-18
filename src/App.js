import React from "react";
import Wrapper from "../src/hoc/Wrapper/Wrapper";
import Home from "./pages/Home";
import Movie from "./pages/Movie"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./scss/styles"


const App = () => {
    return (
        <Router>
            <Wrapper>
                <main className="column column-xs-12 column-md-12 column-lg-12">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:id" element={<Movie />} />
                    </Routes>
                </main>
            </Wrapper>
        </Router>
    )
}

export default App