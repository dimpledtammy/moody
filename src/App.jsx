import React from "react";
import Header from "./COMPONENTS/Pages/Header";
import Home from "./COMPONENTS/Pages/Home";
import Footer from "./COMPONENTS/Footer";
import { BrowserRouter, Route, Router, } from "react-router-dom";
import { Routes } from "react-router"
const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
       <Footer/> 
    </div>
  );
};
export default App;

