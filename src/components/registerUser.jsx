import React from "react";
import "@styles/global.css";

function RuadisRegistro() {
  return (
    <main className="pt-36">
      <div>
        <h1 className="text-2xl text-center mb-4">Crear nuevo usuario</h1>
      </div>
      <form className="w-80 mx-auto">
        <div className="bg-slate-300 rounded dark:bg-slate-700">
          <div className="p-4">
            <div className="">
              <label htmlFor="exampleInputEmail1" className="">
                Correo electr&oacute;nico
              </label>
              <input
                type="email"
                className="text-slate-900 px-2 w-72 rounded-md leading-8 mb-4 mt-1"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="relative">
              <label htmlFor="exampleInputPassword1" className="">
                Contrase&ntilde;a
              </label>
              <input
                type="password"
                className="text-slate-900 px-2 w-72 rounded-md leading-8 mb-4 mt-1"
                id="exampleInputPassword1"
              />
            </div>
            <div className="relative">
              <label htmlFor="exampleInputPassword1" className="">
                Verificar Contrase&ntilde;a
              </label>
              <input
                type="password"
                className="text-slate-900 px-2 w-72 rounded-md leading-8 mb-10 mt-1"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="w-72 btn btn-active btn-accent">
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export { RuadisRegistro };
