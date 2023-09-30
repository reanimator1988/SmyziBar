import React from "react";
import Header from "./components/Header/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import MenuConstr from "../src/components/Header/MenuConstr.jsx";
import Materials from "../src/components/Header/materialsComponent/materials.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Cart from "./components/Header/Shopingcart/Cart.jsx";
import SliderCorusel from "./components/Slider/SliderCorusel.jsx";
import Menu from './components/Menu/Menu.jsx';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <SliderCorusel />
            <Menu />
          </>
        }
        />
        <Route path="/menu-constructor" element={<MenuConstr />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </>
  );
};

