import React, { useContext, useState, useEffect } from "react";
import { HeaderRuadis } from "@components/header";
import { RuadisFoter } from "@components/footer.jsx";
import { RuadisContext } from "@context/";
import { Watsap } from "@elements/watsapp";
import { NavLink } from "react-router-dom";
import { changePassword } from "@service/login";
import "@styles/global.css";

function RecoveryPassword() {
  const { loading } = useContext(RuadisContext);
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const url = window.location.href;
    const index = url.indexOf("=");
    setToken(url.substring(index + 1, url.length));
  }, []);

  const handleChangePassword = async (event) => {
    event.preventDefault();
    try {
      const data = await changePassword({
        token,
        newPassword,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(token);
  return (
    <React.Fragment>
      <HeaderRuadis />
      <div className="flex flex-col min-h-screen dark:bg-[#343A40] bg-[#efefef]">
        <div className="flex-grow">
          <main className="pt-36">
            <div className="w-80 mx-auto ">
              <h1 className="text-2xl text-center mb-4">Cambiar contraseña</h1>
            </div>
            <form className="w-80 mx-auto" onSubmit={handleChangePassword}>
              <div className="bg-slate-300 rounded dark:bg-slate-700">
                <div className="p-4">
                  <div>
                    <label htmlFor="exampleInputEmail1">Nueva Contraseña</label>
                    <input
                      type="password"
                      className="text-slate-900 px-2 w-72 h-8 rounded-md leading-8 mb-4 mt-1"
                      value={newPassword}
                      onChange={({ target }) => {
                        setNewPassword(target.value);
                      }}
                    />
                  </div>
                  <div className="h-8 mb-2"></div>
                  <button
                    type="submit"
                    className="w-72 btn btn-active btn-accent"
                  >
                    Cambiar Constraseña
                  </button>
                </div>
              </div>
              <p className="p-3 mt-3 text-center border-slate-500 rounded-md">
                {`Volver a `}
                <NavLink to="/login" className="link link-accent">
                  Login
                </NavLink>
                {`.`}
              </p>
            </form>
          </main>
        </div>
        <div className="basis-auto grow-0">
          <RuadisFoter />
        </div>
      </div>
      <Watsap />
    </React.Fragment>
  );
}

export { RecoveryPassword };
