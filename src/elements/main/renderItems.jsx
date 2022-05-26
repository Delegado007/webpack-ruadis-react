import React, { useContext } from "react";
import "@styles/global.css";
import { RuadisContext } from "@context/";
import logo from "@images/logoPdf2.png";

function RenderItem() {
  const { buscar, libros } = useContext(RuadisContext);
  let searchedPDF = { libros: [] };

  if (!buscar.length >= 1) {
    searchedPDF.libros = libros;
  } else {
    searchedPDF.libros = libros.filter((pdf) => {
      const nombresPDF = pdf.name.toLocaleLowerCase();
      const buscarMin = buscar.toLocaleLowerCase();
      return nombresPDF.includes(buscarMin);
    });
  }

  return (
    <div className="flex flex-wrap justify-center">
      {searchedPDF.libros.map((libro) => (
        <div
          key={libro.id}
          className="card card-side bg-base-100 shadow-xl m-4 w-96"
        >
          <figure className="bg-slate-700 dark:bg-slate-700">
            <img className="w-36 px-2" src={logo} alt="Movie"></img>
          </figure>
          <div className="card-body bg-slate-50 text-black  dark:bg-slate-900 dark:text-slate-200">
            <h2 className="card-title">{libro.name}</h2>
            <p>Carillas: {libro.price}</p>
            <p>Descripcion: {libro.description}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-success">Pedir</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { RenderItem };
