import React from "react";
import { HeaderRuadis } from "@components/header";
import { InProgress } from "@components/in_progress.jsx";
import { RuadisFoter } from "@components/footer.jsx";
import { Watsap } from "@elements/watsapp";

import "@styles/global.css";

function Terciarios() {
  return (
    <React.Fragment>
      <HeaderRuadis />
      <div className="flex flex-col min-h-screen dark:bg-[#343A40] bg-[#efefef]">
        <div className="flex-grow">
          <InProgress />
        </div>
        <div className="basis-auto grow-0">
          <RuadisFoter />
        </div>
      </div>
      <Watsap />
    </React.Fragment>
  );
}

export { Terciarios };
