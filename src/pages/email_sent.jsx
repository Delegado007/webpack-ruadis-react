import React from "react";
import { HeaderRuadis } from "@components/header";
import { RuadisFoter } from "@components/footer.jsx";
import { Watsap } from "@elements/watsapp";
import { NavLink } from "react-router-dom";
import { IconEmailSent } from "@elements/svg/icon_email_sent";

import "@styles/global.css";

function EmailSent() {
  const handleRecovery = async (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <HeaderRuadis />
      <div className="flex flex-col min-h-screen dark:bg-[#343A40] bg-[#efefef]">
        <div className="flex-grow">
          <main className="pt-36">
            <div className="w-80 mx-auto ">
              <h1 className="text-2xl text-center mb-4">
                Email enviado con exito!
              </h1>
              <p className="text-center pb-8">
                Por favor verifica tu inbox para seguir con las intrucciones de
                recuperarción de contraseña
              </p>
              <div className="w-36 mx-auto pb-8">
                <IconEmailSent />
              </div>
            </div>
            <div className="w-80 mx-auto">
              <div className="p-4">
                <NavLink to="/login">
                  <button className="w-72 btn btn-active btn-accent">
                    Login
                  </button>
                </NavLink>
              </div>

              <p className="p-3 mt-3 text-center border-slate-500 rounded-md">
                {`¿No recibiste el email? `}
                <NavLink to="/recovery" className="link link-accent">
                  Recovey
                </NavLink>
                {`.`}
              </p>
            </div>
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

export { EmailSent };
