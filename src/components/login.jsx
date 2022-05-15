import React from "react";
import "@styles/global.css";

function RuadisLogin() {
  return (
    <main className="pt-36">
      <div>
        <h1 className="text-2xl text-center mb-4">Iniciar Sesi&oacute;n</h1>
      </div>
      <form className="w-80 mx-auto">
        <div className="bg-slate-300 rounded dark:bg-slate-700">
          <div className="p-4">
            <div className="">
              <label htmlFor="exampleInputEmail1" className="">
                Correo electrónico
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
                className="text-slate-900 px-2 w-72 rounded-md leading-8 mb-10 mt-1"
                id="exampleInputPassword1"
              />
              <a className="link link-accent absolute text-sm top-0 right-0 float-right">
                Olvidaste tu contrase&ntilde;a?
              </a>
            </div>
            <button type="submit" className="w-72 btn btn-active btn-accent">
              Inciar sesi&oacute;n
            </button>
          </div>
        </div>
        <p className="p-3 mt-3 text-center border-slate-500 rounded-md ">
          {`Nuevo en Ruadis? `}
          <a className="link link-accent" href="www.asada.com/create">
            Crea una cuenta
          </a>
          {`.`}
        </p>
      </form>
    </main>
  );
}

export { RuadisLogin };
