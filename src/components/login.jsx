import React, { useState } from "react";
import "@styles/global.css";
import { NavLink } from "react-router-dom";
import { login } from "./../service/login";

function RuadisLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  console.log(user);
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await login({
        email,
        password,
      });
      setUser(user);
      setEmail("");
      setPassword("");
    } catch (error) {
      setErrorMessage(true);
      setPassword("");
      console.log(error);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  return (
    <main className="pt-36">
      <div>
        <h1 className="text-2xl text-center mb-4">Iniciar Sesi&oacute;n</h1>
      </div>
      <form onSubmit={handleLogin} className="w-80 mx-auto">
        <div className="bg-slate-300 rounded dark:bg-slate-700">
          <div className="p-4">
            <div className="">
              <label htmlFor="exampleInputEmail1" className="">
                Correo electrónico
              </label>
              <input
                type="email"
                className="text-slate-900 px-2 w-72 rounded-md leading-8 mb-4 mt-1"
                value={email}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={({ target }) => {
                  setEmail(target.value);
                }}
              />
            </div>
            <div className="relative">
              <label htmlFor="exampleInputPassword1" className="">
                Contrase&ntilde;a
              </label>
              <input
                type="password"
                className="text-slate-900 px-2 w-72 rounded-md leading-8 mb-2 mt-1"
                value={password}
                id="exampleInputPassword1"
                onChange={({ target }) => {
                  setPassword(target.value);
                }}
              />
              <a className="link link-accent absolute text-sm top-0 right-0 float-right">
                Olvidaste tu contrase&ntilde;a?
              </a>
              <div className="h-8 mb-2">
                {errorMessage !== null && (
                  <div className="flex h-full justify-center bg-red-600 rounded-sm">
                    <p className="text-white my-auto">
                      Credenciales incorrectas
                    </p>
                  </div>
                )}
              </div>
            </div>
            <button type="submit" className="w-72 btn btn-active btn-accent">
              Inciar sesi&oacute;n
            </button>
          </div>
        </div>
        <p className="p-3 mt-3 text-center border-slate-500 rounded-md">
          {`Nuevo en Ruadis? `}
          <NavLink to="/register" className="link link-accent">
            Crea una cuenta
          </NavLink>
          {`.`}
        </p>
      </form>
    </main>
  );
}

export { RuadisLogin };
