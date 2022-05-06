import React, { useState } from "react";

const RuadisContext = React.createContext();

function RuadisProvider(props) {
  const datosLibros = {
    libros: [
      {
        id: 1,
        titulo: "Derecho 2",
        ano: 2015,
        carillas: 312,
      },
      {
        id: 2,
        titulo: "Matematica",
        ano: 2014,
        carillas: 200,
      },
      {
        id: 3,
        titulo: "Lengua",
        ano: 2017,
        carillas: 158,
      },
      {
        id: 4,
        titulo: "Biologia Cursis",
        ano: 2018,
        carillas: 158,
      },
      {
        id: 5,
        titulo: "Quimica inorganica",
        ano: 2154,
        carillas: 9844,
      },
      {
        id: 6,
        titulo: "Ciencias",
        ano: 2145,
        carillas: 454,
      },
      {
        id: 7,
        titulo: "Psicologia",
        ano: 2564,
        carillas: 90,
      },
      {
        id: 8,
        titulo: "Ed. Fisica",
        ano: 1988,
        carillas: 564,
      },
      {
        id: 9,
        titulo: "Historia 2",
        ano: 2025,
        carillas: 980,
      },
      {
        id: 10,
        titulo: "Lengua 4",
        ano: 2025,
        carillas: 980,
      },
      {
        id: 11,
        titulo: "Ciencias",
        ano: 2025,
        carillas: 980,
      },
      {
        id: 12,
        titulo: "Ed. artistica y contemporanea de la hera del hielo",
        ano: 2025,
        carillas: 980,
      },
      {
        id: 13,
        titulo: "El ladron del Rayo",
        ano: 2025,
        carillas: 980,
      },
      {
        id: 14,
        titulo: "El tanque de Agua",
        ano: 2025,
        carillas: 980,
      },
      {
        id: 15,
        titulo: "Anatomia",
        ano: 2025,
        carillas: 980,
      },
      {
        id: 16,
        titulo: "Filosofia",
        ano: 2025,
        carillas: 980,
      },
    ],
  };
  const WS_URL = process.env.WS_URL;
  const [buscar, setBuscar] = React.useState("");





  return (
    <RuadisContext.Provider value={{
      datosLibros,
      WS_URL,
      buscar,
      setBuscar,
    }}
    >
      {props.children}
    </RuadisContext.Provider>
  );
}

export { RuadisContext, RuadisProvider };