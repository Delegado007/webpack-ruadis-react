import React, { useState, useEffect } from "react";
import axios from "axios";
const API = "https://serene-ocean-03988.herokuapp.com/api/v1/products";

const RuadisContext = React.createContext();

function RuadisProvider(props) {
  const [libros, setLibros] = useState([]);
  useEffect(async () => {
    const response = await axios(API);
    setLibros(response.data);
  }, []);

  const WS_URL = process.env.WS_URL;
  const [buscar, setBuscar] = React.useState("");

  return (
    <RuadisContext.Provider value={{
      libros,
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