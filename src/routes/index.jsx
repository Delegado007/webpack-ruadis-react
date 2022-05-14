import React from "react";
import { Inicio } from "./../pages/inicio.jsx";
import { Login } from "./../pages/login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RuadisProvider } from "./../context";

function App() {
  return (
    <RuadisProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </RuadisProvider>
  );
}

export { App };
