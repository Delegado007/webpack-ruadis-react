import React from "react";
import "@styles/global.css";
import logo from "@images/cons2.png";

function InProgress() {
  return (
    <main className="flex max-w-screen-xl w-full mx-auto my-32">
      <img src={logo} alt="en construccion" />
    </main>
  );
}

export { InProgress };
