import React, { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.API;


const RuadisContext = React.createContext();

function RuadisProvider(props) {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [nameUser, setNameUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedRuadisApp");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      const name = user.user.email;
      const index = name.indexOf("@");
      setNameUser(name.substring(0, index));
    }
  }, []);

  useEffect(async () => {
    const response = await axios(`${API}/api/v1/products`);
    setLibros(response.data);
    setLoading(false);
  }, []);

  const WS_URL = process.env.WS_URL;
  const [buscar, setBuscar] = React.useState("");

  return (
    <RuadisContext.Provider value={{
      libros,
      WS_URL,
      buscar,
      setBuscar,
      loading,
      user,
      nameUser,
    }}
    >
      {props.children}
    </RuadisContext.Provider>
  );
}

export { RuadisContext, RuadisProvider };