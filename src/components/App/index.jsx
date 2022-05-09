import React from "react";
import { RuadisMain } from "./../ruadisMain/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RuadisProvider } from "./../useContext";
import { RuadisLogin } from "./../ruadisLogin";

function App() {
  return (
    <RuadisProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="OyeCanciones" element={<OyeMain />} />
          <Route path="OyeRegistro" element={<OyeRegistro />} /> */}
          <Route path="login" element={<RuadisLogin />} />
          <Route path="/" element={<RuadisMain />} />
        </Routes>
      </BrowserRouter>
    </RuadisProvider>
  );
}

export default App;
