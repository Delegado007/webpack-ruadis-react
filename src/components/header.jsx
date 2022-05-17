import React, { useContext, useState } from "react";
import { Hamburguesa } from "@elements/header/menuHamburguesa.jsx";
import { ImputBusquedaDesktop } from "@elements/header/searchDesktop.jsx";
import { ContainerLoginDesktop } from "@elements/header/containerLoginDesktop.jsx";
import { DarkMode } from "@elements/header/darkMode";
import { Logo } from "@elements/header/logo.jsx";
import { ListMenuDesktop } from "@elements/header/listMenuDesktop.jsx";
import { RuadisContext } from "@context/";
import "@styles/header.css";
import "@styles/global.css";

function HeaderRuadis() {
  const { buscar, setBuscar } = useContext(RuadisContext);
  return (
    <header
      className="navbar flex-row flex-nowrap bg-white dark:bg-slate-800 mb-0 shadow-xl absolute"
      id="navegacion"
    >
      <Hamburguesa />
      <Logo />
      <ImputBusquedaDesktop valor={buscar} setBuscar={setBuscar} />
      <ListMenuDesktop />
      <ContainerLoginDesktop />
      <div className="mx-2" id="darkModeMobil">
        <DarkMode />
      </div>
    </header>
  );
}

export { HeaderRuadis };
