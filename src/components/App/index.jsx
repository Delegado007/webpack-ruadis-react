import React from "react";
import { RuadisMain } from "../RuadisMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RuadisProvider } from "../UseContext";
import { RuadisLogin } from "./../RuadisLogin";

function App() {
  return (
    <RuadisProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<RuadisLogin />} />
          <Route exact path="/" element={<RuadisMain />} />
        </Routes>
      </BrowserRouter>
    </RuadisProvider>
  );
}

export default App;
