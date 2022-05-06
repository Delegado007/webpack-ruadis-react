import React from "react";
import logo from "./../../images/logoPdf2.png";

function ItemMain({ titulo, ano, carillas }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl m-4 w-96">
      <figure className="bg-slate-700 dark:bg-slate-700">
        <img className="w-36 px-2" src={logo} alt="Movie"></img>
      </figure>
      <div className="card-body bg-slate-50 text-black  dark:bg-slate-900 dark:text-slate-200">
        <h2 className="card-title">{titulo}</h2>
        <p>Año: {ano}</p>
        <p>Carillas: {carillas}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success">Pedir</button>
        </div>
      </div>
    </div>
  );
}

export { ItemMain };
