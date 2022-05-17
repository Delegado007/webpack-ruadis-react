import React, { useContext, useState } from "react";
import { LoginSingUp } from "./loginSinUp";
import { RuadisContext } from "@context/";

function ContainerLoginDesktop() {
  const { user, nameUser } = useContext(RuadisContext);
  const [dropAvatar, setDropAvatar] = useState(false);
  const handleLogOut = () => {
    window.localStorage.removeItem("loggedRuadisApp");

    window.location.reload(true);
  };

  return (
    <div className=" grow-0 basis-auto justify-center perfil px-2">
      {user ? (
        <div className="dropdown dropdown-end">
          <label
            tabIndex="1"
            className="btn btn-ghost btn-circle avatar"
            onClick={() => {
              setDropAvatar((prevState) => !prevState);
            }}
            // onBlur={() => {
            //   setDropAvatar(false);
            // }}
          >
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          {dropAvatar && (
            <ul
              className="mt-3 p-2 shadow menu menu-compact absolute z-50 origin-top rounded-box w-52 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-100 dropAvatar right-0"
              id="dropMenuAvatar"
              tabIndex="1"
            >
              <li>
                <p>{nameUser}</p>
              </li>
              <li>
                <button onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          )}
        </div>
      ) : (
        <div id="login-desktop">
          <LoginSingUp />
        </div>
      )}
    </div>
  );
}

export { ContainerLoginDesktop };
