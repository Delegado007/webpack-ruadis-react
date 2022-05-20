import React, { useState, useEffect } from "react";

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
          <NavLink to="/libros" className="px-2 ">
            Libros
          </NavLink>
        </li>
        <li className="rounded  dark:hover:bg-slate-700 hover:bg-slate-200 py-3">
          <NavLink to="/escuelas" className="px-2">
            Escuelas
          </NavLink>
        </li>
        <li className="rounded  dark:hover:bg-slate-700 hover:bg-slate-200 py-3">
          <NavLink to="/terciarios" className="px-2">
            Terciarios
          </NavLink>
        </li>
        <li className="rounded  dark:hover:bg-slate-700 hover:bg-slate-200 py-3">
          <NavLink to="/varios" className="px-2">
            Varios
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export { ListMenuDesktop };
