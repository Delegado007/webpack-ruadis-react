import React, { useContext } from "react";
import { HeaderRuadis } from "@components/header";
import { RuadisFoter } from "@components/footer.jsx";
import { RuadisContext } from "@context/";
import { Watsap } from "@elements/watsapp";
import "@styles/global.css";

function Recovery() {
  const { loading } = useContext(RuadisContext);

  return (
    <React.Fragment>
      <HeaderRuadis />
      <div className="flex flex-col min-h-screen dark:bg-[#343A40] bg-[#efefef]">
        <div className="flex-grow">
          <main className="pt-36">
            <div className="w-80 mx-auto ">
              <h1 className="text-2xl text-center mb-4">
                Recuperar contraseña
              </h1>
              <p className="text-center pb-8">
                Introduce tu dirección de Email con la que te registraste
              </p>
            </div>
            <form className="w-80 mx-auto">
              <div className="bg-slate-300 rounded dark:bg-slate-700">
                <div className="p-4">
                  <div>
                    <label htmlFor="exampleInputEmail1">
                      Correo electr&oacute;nico *
                    </label>
                    <input
                      type="email"
                      className="text-slate-900 px-2 w-72 h-8 rounded-md leading-8 mb-4 mt-1"
                      aria-describedby="emailHelp"
                      placeholder="email@ejemplo.com"
                    />
                  </div>
                  <div className="h-8 mb-2"></div>
                  <button
                    type="submit"
                    className="w-72 btn btn-active btn-accent"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </main>
        </div>
        <div className="basis-auto grow-0">
          <RuadisFoter />
        </div>
      </div>
      <Watsap />
    </React.Fragment>
  );
}

export { Recovery };
