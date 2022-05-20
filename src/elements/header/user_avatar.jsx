import React, { useContext, useState } from "react";
import { RuadisContext } from "@context/";
import { DarkMode } from "@elements/header/dark_mode";

function UserAvatar() {
  const { nameUser } = useContext(RuadisContext);
  const [dropAvatar, setDropAvatar] = useState(false);
  const handleLogOut = () => {
    window.localStorage.removeItem("loggedRuadisApp");
    window.location.reload(true);
  };

  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex="1"
        className="btn btn-ghost btn-circle avatar"
        onClick={() => {
          setDropAvatar((prevState) => !prevState);
        }}
      >
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      {dropAvatar && (
        <ul
          className="mt-3 p-2 shadow menu items-center menu-compact absolute z-50 origin-top rounded-box w-fit bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-100 dropAvatar right-0"
          id="dropMenuAvatar"
          tabIndex="1"
        >
          <li className="w-fit ">
            <p className="text-base">{nameUser}</p>
          </li>
          <li className="w-fit">
            <button className="text-base" onClick={handleLogOut}>
              Logout
            </button>
          </li>
          <li className="w-fit">
            <DarkMode />
          </li>
        </ul>
      )}
    </div>
  );
}

export { UserAvatar };
