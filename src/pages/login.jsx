import React from "react";
import { HeaderRuadis } from "@components/header";
import { RuadisLogin } from "@components/login";
import { Prueba } from "@components/prueba";
import { Watsap } from "@elements/watsapp";
import { RuadisFoter } from "@components/footer.jsx";

function Login() {
  return (
    <React.Fragment>
      <HeaderRuadis />
      <div className="flex flex-col min-h-screen dark:bg-[#343A40] bg-[#efefef]">
        <div className=" flex-grow">
          <RuadisLogin />
        </div>
        <div className="basis-auto bg-white">
          <RuadisFoter />
        </div>
      </div>
      <Watsap />
    </React.Fragment>
  );
}

export { Login };
