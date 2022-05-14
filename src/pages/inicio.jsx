import React from "react";
import { HeaderRuadis } from "@components/header";
import { RuadisMain } from "@components/main.jsx";
import { Watsap } from "@elements/watsapp";
import "@styles/global.css";

function Inicio() {
  return (
    <React.Fragment>
      <HeaderRuadis />
      <RuadisMain />
      <Watsap />
    </React.Fragment>
  );
}

export { Inicio };
