import React from "react";
import { HeaderRuadis } from "../RuadisHeader";
// import "../RuadisMain/index.css";

function RuadisLogin() {
  return (
    <React.Fragment>
      <HeaderRuadis />
      <main className="min-h-screen">
        <div className=" h-44"></div>
        <div>
          <h1 className="text-2xl text-center mb-4">Sign in to Ruadis</h1>
        </div>
        <form className="w-80 mx-auto bg-slate-300 rounded">
          <div className="p-4">
            <div className="">
              <label htmlFor="exampleInputEmail1" className="">
                Correo electrónico
              </label>
              <input
                type="email"
                className=" w-72 rounded-md leading-8 mb-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
              <label htmlFor="exampleInputPassword1" className="">
                Contraseña
              </label>
              <input
                type="password"
                className="w-72 rounded-md leading-8 mb-10"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="w-72 btn btn-accent">
              Inciar sesión
            </button>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
}

export { RuadisLogin };
