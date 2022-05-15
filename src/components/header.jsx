import React from "react";
import "@styles/header.css";
import "@styles/global.css";

import { useState } from "react";
import { Hamburguesa } from "@elements/header/menuHamburguesa.jsx";
import { ImputBusquedaDesktop } from "@elements/header/searchDesktop.jsx";
import { ContainerLoginDesktop } from "@elements/header/containerLoginDesktop.jsx";
import { DarkMode } from "@elements/header/darkMode";
import { Logo } from "@elements/header/logo.jsx";
import { ListMenuDesktop } from "@elements/header/listMenuDesktop.jsx";
import { RuadisContext } from "@context/";

function HeaderRuadis() {
  const { buscar, setBuscar } = React.useContext(RuadisContext);
  const [desplegarMenu, setDesplegarMenu] = useState(false);
  const [dropAvatar, setDropAvatar] = useState(false);
  const label = document.getElementById("dropMenuAvatar");

  const dropAvatarMenu = function () {
    setDropAvatar((prevState) => !prevState);
  };

  const dropFalse = function () {
    setDropAvatar(false);
  };

  const actualizar = (e) => {
    setDesplegarMenu(e.target.checked);
    // console.log("desde boton" + desplegarMenu);
  };
  document.addEventListener("click", function (event) {
    if (
      event.target.id != "botonOpenMenu" &&
      event.target.id != "clickbox" &&
      desplegarMenu === false
    ) {
      setDesplegarMenu(false);
      // console.log("desde clic fuera" + desplegarMenu);
    }
  });
  return (
    <header
      className="navbar bg-white dark:bg-slate-800 mb-0 shadow-xl absolute"
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
