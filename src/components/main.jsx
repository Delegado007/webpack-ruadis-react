import React from "react";
import "@styles/global.css";
import { RenderItem } from "@elements/main/renderItems";

function RuadisMain() {
  return (
    <main className="sm:w-12/12 md:w-12/12 lg:w-12/12 mx-auto my-10 py-5">
      <RenderItem />
    </main>
  );
}

export { RuadisMain };
