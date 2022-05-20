import React from "react";
import "@styles/global.css";
import { RenderItem } from "@elements/main/renderItems";

function RuadisMain() {
  return (
    <main className="flex max-w-screen-xl w-full mx-auto mt-16 py-5">
      <RenderItem />
    </main>
  );
}

export { RuadisMain };
