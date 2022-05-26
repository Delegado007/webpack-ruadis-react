import React from "react";
import { Inicio } from "./../pages/inicio.jsx";
import { Libros } from "./../pages/libros";
import { Escuelas } from "./../pages/escuelas";
import { Terciarios } from "./../pages/terciarios";
import { Varios } from "./../pages/varios";
import { Login } from "./../pages/login";
import { Registro } from "./../pages/registro";
import { Recovery } from "./../pages/recovery";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RuadisProvider } from "./../context";

function App() {
  return (
    <RuadisProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="register" element={<Registro />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="libros" element={<Libros />} />
          <Route exact path="escuelas" element={<Escuelas />} />
          <Route exact path="terciarios" element={<Terciarios />} />
          <Route exact path="varios" element={<Varios />} />
          <Route exact path="recovery" element={<Recovery />} />
          <Route exact path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </RuadisProvider>
  );
}

export { App };
