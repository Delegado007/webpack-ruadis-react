import React from "react";
import { RuadisMain } from "./../RuadisMain/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RuadisProvider } from "./../UseContext";

function App() {
  return (
    <RuadisProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="OyeCanciones" element={<OyeMain />} />
          <Route path="OyeRegistro" element={<OyeRegistro />} />
          <Route path="OyeLogin" element={<OyeLogin />} /> */}
          <Route path="/" element={<RuadisMain />} />
        </Routes>
      </BrowserRouter>
    </RuadisProvider>
  );
}

export default App;
