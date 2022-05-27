import React, { useState } from "react";
import { register } from "./../service/login";

import "@styles/global.css";
import "@styles/validatorImput.css";

function RuadisRegistro() {
  const [email, setEmail] = useState("");
  const [mailValid, setMailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [contentError, setContentError] = useState("");

  const validarEmail = (value) => {
    const EXP_REGULAR =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const imput = document.getElementById("mail-registro");
    if (value.length > 0) {
      if (EXP_REGULAR.test(value)) {
        imput.classList.remove("inValido");
        imput.classList.add("valido");
        setMailValid(true);
      }
      if (!EXP_REGULAR.test(value)) {
        imput.classList.remove("valido");
        imput.classList.add("inValido");
        setMailValid(false);
      }
    } else {
      imput.classList.remove("inValido");
      imput.classList.remove("valido");
      setMailValid(false);
    }
  };

  const validarPasswords = () => {
    const imput1 = document.getElementById("psw-registro");
    const imput2 = document.getElementById("psw2-registro");
    if (imput1.value.trim().length > 7) {
      imput1.classList.remove("inValido");
      imput1.classList.add("valido");
    } else if (imput1.value.trim().length > 0) {
      imput1.classList.remove("valido");
      imput1.classList.add("inValido");
    } else {
      imput1.classList.remove("valido");
      imput1.classList.remove("inValido");
    }

    if (imput2.value.length > 0) {
      if (imput1.value === imput2.value) {
        imput2.classList.remove("inValido");
        imput2.classList.add("valido");
        setPasswordValid(true);
      } else {
        imput2.classList.remove("valido");
        imput2.classList.add("inValido");
        setPasswordValid(false);
      }
    }
    if (imput2.value.length === 0) {
      imput2.classList.remove("valido");
      imput2.classList.remove("inValido");
      setPasswordValid(false);
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!mailValid) {
      event.target[0].focus();
      setContentError("Email Inválido");
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return false;
    }
    if (!passwordValid) {
      if (password.length < 8) {
        event.target[1].focus();
        setContentError("Password muy corto!");
      } else {
        event.target[2].focus();
        setContentError("Contraseñas no coinciden");
      }
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      return false;
    }
    try {
      await register({
        email,
        password,
      });

      setEmail("");
      setPassword("");
      setPassword2("");
      window.location = "login";
    } catch (error) {
      setErrorMessage(true);
      setContentError("Email ya en uso!");
      setPassword("");
      setPassword2("");
      validarPasswords();
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };
  return (
    <main className="pt-36">
      <div>
        <h1 className="text-2xl text-center mb-4">Crear nuevo usuario</h1>
      </div>
      <form className="w-80 mx-auto" id="registro" onSubmit={handleRegister}>
        <div className="bg-slate-300 rounded dark:bg-slate-700">
          <div className="p-4">
            <div>
              <label htmlFor="exampleInputEmail1">
                Correo electr&oacute;nico
              </label>
              <input
                type="email"
                className="text-slate-900 px-2 w-72 h-8 rounded-md leading-8 mb-4 mt-1 focus:outline-hidden active:outline-hidden"
                id="mail-registro"
                aria-describedby="emailHelp"
                placeholder="email@ejemplo.com"
                value={email}
                onChange={({ target }) => {
                  setEmail(target.value);
                  validarEmail(target.value);
                }}
              />
            </div>
            <div className="relative">
              <label htmlFor="exampleInputPassword1">Contrase&ntilde;a</label>
              <input
                type="password"
                className="text-slate-900 px-2 w-72 h-8 rounded-md leading-8 mb-4 mt-1"
                id="psw-registro"
                value={password}
                onChange={({ target }) => {
                  setPassword(target.value);
                  validarPasswords();
                }}
              />
            </div>
            <div className="relative">
              <label htmlFor="exampleInputPassword1">
                Verificar Contrase&ntilde;a
              </label>
              <input
                type="password"
                className="text-slate-900 px-2 w-72 h-8 rounded-md leading-8 mb-2 mt-1"
                id="psw2-registro"
                value={password2}
                onChange={({ target }) => {
                  setPassword2(target.value);
                  validarPasswords();
                }}
              />
            </div>
            <div className="h-8 mb-2">
              {errorMessage !== null && (
                <div className="flex h-full justify-center bg-red-600 rounded-sm">
                  <p className="text-white my-auto">{contentError}</p>
                </div>
              )}
            </div>
            <button type="submit" className="w-72 btn btn-active btn-accent">
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export { RuadisRegistro };
