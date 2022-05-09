import React from "react";
import { RuadisMain } from "./../ruadisMain/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RuadisProvider } from "./../useContext/index";
import { RuadisLogin } from "./../ruadisLogin/index";

function App() {
  return (
    <RuadisProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<RuadisLogin />} />
          <Route path="/" element={<RuadisMain />} />
        </Routes>
      </BrowserRouter>
    </RuadisProvider>
  );
}

export default App;
