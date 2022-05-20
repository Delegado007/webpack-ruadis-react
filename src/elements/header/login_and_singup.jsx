import React from "react";
import { NavLink } from "react-router-dom";

function LoginSingUp() {
  return (
    <React.Fragment>
      <NavLink to="/login">
        <button className="btn btn-outline dark:btn-ghost mr-2 dark:text-white text-black ">
          Log In
        </button>
      </NavLink>
      <NavLink to="/register">
        <button className="btn btn-active dark:btn-outline dark:text-white text-white hover:text-slate-200">
          Sing Up
        </button>
      </NavLink>
    </React.Fragment>
  );
}

export { LoginSingUp };
