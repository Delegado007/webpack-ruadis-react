import React, { useContext } from "react";
import { HeaderRuadis } from "@components/header";
import { RuadisMain } from "@components/main.jsx";
import { RuadisFoter } from "@components/footer.jsx";
import { RuadisContext } from "@context/";
import { Watsap } from "@elements/watsapp";
import { Loading } from "@elements/main/loading";

import "@styles/global.css";

function Inicio() {
  const { loading } = useContext(RuadisContext);

  return (
    <React.Fragment>
      <HeaderRuadis />
      <div className="flex flex-col min-h-screen dark:bg-[#343A40] bg-[#efefef]">
        <div className="flex-grow">
          {loading ? <Loading /> : <RuadisMain />}
        </div>
        <div className="basis-auto grow-0">
          <RuadisFoter />
        </div>
      </div>
      <Watsap />
    </React.Fragment>
  );
}

export { Inicio };
