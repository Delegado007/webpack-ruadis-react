import React, { useState, useEffect } from "react";
import { DarkMode } from "@elements/header/darkMode";

import { NavLink } from "react-router-dom";

function ListMenuDesktop() {
  return (
    <div className=" grow-0 itemsMenu px-2">
      <ul className="menu-horizontal items-center">
        <li className="rounded dark:hover:bg-slate-700 hover:bg-slate-200 py-3">
          <NavLink to="/" className="px-2">
            Inicio
          </NavLink>
        </li>
        <li className="rounded  dark:hover:bg-slate-700 hover:bg-slate-200 py-3">
          <a className="px-2 ">Libros</a>
        </li>
        <li className="rounded  dark:hover:bg-slate-700 hover:bg-slate-200 py-3">
          <a className="px-2">Escuelas</a>
        </li>
        <li className="rounded  dark:hover:bg-slate-700 hover:bg-slate-200 py-3">
          <a className="px-2">Terciarios</a>
        </li>
        <li className="rounded  dark:hover:bg-slate-700 hover:bg-slate-200 py-3">
          <a className="px-2">Varios</a>
        </li>
      </ul>
    </div>
  );
}

export { ListMenuDesktop };
