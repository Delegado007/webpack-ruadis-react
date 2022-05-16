import React from "react";
import { HeaderRuadis } from "@components/header";
import { RuadisRegistro } from "@components/registerUser";
import { Watsap } from "@elements/watsapp";
import { RuadisFoter } from "@components/footer";

function Registro() {
  return (
    <React.Fragment>
      <HeaderRuadis />
      <div className="flex flex-col min-h-screen dark:bg-[#343A40] bg-[#efefef]">
        <div className="flex-grow">
          <RuadisRegistro />
        </div>
        <div className="basis-auto grow-0">
          <RuadisFoter />
        </div>
      </div>
      <Watsap />
    </React.Fragment>
  );
}

export { Registro };
