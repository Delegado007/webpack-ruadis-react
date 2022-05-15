import React from "react";
import { LoginSingUp } from "./loginSinUp";

function ContainerLoginDesktop() {
  return (
    <div className=" grow-0 basis-auto justify-center perfil px-2">
      <div id="login-desktop">
        <LoginSingUp />
      </div>
      {/* <div className="dropdown dropdown-end">
          <label
            tabIndex="1"
            className="btn btn-ghost btn-circle avatar"
            onClick={dropAvatarMenu}
            onBlur={dropFalse}
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
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          )}
        </div> */}
    </div>
  );
}

export { ContainerLoginDesktop };
