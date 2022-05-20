import React, { useContext, useState, Fragment } from "react";
import { Hamburguesa } from "@elements/header/menu_hamburguesa.jsx";
import { ImputBusquedaDesktop } from "@elements/header/search_desktop.jsx";
import { DarkMode } from "@elements/header/dark_mode";
import { LoginSingUp } from "@elements/header/login_and_singup";
import { UserAvatar } from "@elements/header/user_avatar";
import { Logo } from "@elements/header/logo.jsx";
import { ListMenuDesktop } from "@elements/header/list_menu_desktop.jsx";
import { RuadisContext } from "@context/";
import "@styles/header.css";
import "@styles/global.css";

function HeaderRuadis() {
  const { buscar, setBuscar, user } = useContext(RuadisContext);
  return (
    <header
      className="navbar flex-row flex-nowrap bg-white dark:bg-slate-800 mb-0 shadow-xl absolute"
      id="navegacion"
    >
      <div className="flex max-w-screen-xl w-full mx-auto">
        <Hamburguesa />
        <Logo />
        <ImputBusquedaDesktop valor={buscar} setBuscar={setBuscar} />
        <ListMenuDesktop />
        <div className="flex grow-0 basis-auto justify-end perfil">
          {!user ? (
            <Fragment>
              <div className="mr-2 login-displayed">
                <LoginSingUp />
              </div>
              <div className="mx-2 my-auto">
                <DarkMode />
              </div>
            </Fragment>
          ) : (
            <UserAvatar />
          )}
        </div>
      </div>
    </header>
  );
}

export { HeaderRuadis };
