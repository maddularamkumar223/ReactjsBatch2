import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./compoent/navbar/Navbar";
import HomePage from "./compoent/HomePage";
import Contact from "./compoent/Contact";
import About from "./compoent/About";
import Products from "./compoent/Products";
import Men from "./compoent/Men";
import Women from "./compoent/Women";
import Kids from "./compoent/Kids";
import DisplaySigleProduct from "./compoent/DisplaySigleProduct";

const App = () => {
  console.log(BrowserRouter);
  console.log(Routes);
  console.log(Route);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/singleProduct/:id" element={<DisplaySigleProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
