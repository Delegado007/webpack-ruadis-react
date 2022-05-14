import React from "react";
import { HeaderRuadis } from "@components/header";
import { RuadisLogin } from "@components/login";
import { Watsap } from "@elements/watsapp";

function Login() {
  return (
    <React.Fragment>
      <HeaderRuadis />
      <RuadisLogin />
      <Watsap />
    </React.Fragment>
  );
}

export { Login };
