import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ImputBusquedaMobil } from "@elements/header/searchMobil";
import { LoginSingUp } from "@elements/header/loginSinUp";
import { RuadisContext } from "@context/";
import "@styles/header.css";

function Hamburguesa() {
  const label = document.getElementById("dropMenuAvatar");
  const { buscar, setBuscar } = React.useContext(RuadisContext);
  // const [isOpen, setIsOpen] = useState(false);
  // const btnRef = useRef();

  // useEffect(() => {
  //   const closeDropdown = (e) => {
  //     console.log(e);
  //     if (e.path[3] !== btnRef.current) {
  //       setIsOpen(false);
  //     }
  //   };
  //   document.body.addEventListener("click", closeDropdown);
  //   return () => document.body.removeEventListener("click", closeDropdown);
  // }, []);

  return (
    <div className="navbar-start items">
      <div className="hamburguesa dropdown" id="botonOpenMenu">
        <button
          type="button"
          tabIndex="0"
          className="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 btn btn-ghost"
        >
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </button>

        <div
          className="dropdown-content menuDesplegable w-96 min-h-screen max-w-[calc(100%-3rem)] pl-6 bg-slate-200 text-slate-700 dark:border-slate-700 dark:bg-gray-800"
          id="clickbox"
          tabIndex="0"
        >
          <div>
            <ImputBusquedaMobil valor={buscar} setBuscar={setBuscar} />
          </div>
          <ul
            className="flex my-2 flex-col list-none space-y-6 lg:space-y-2 border-l dark:border-slate-100  border-slate-400 "
            id="MenuDesplegable"
          >
            <li className="flex border-l border-transparent hover:border-slate-900 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 dark:hover:white hover:text-black">
              <NavLink to="/" className="pl-3 flex my-3">
                <svg
                  className="fill-current w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
                </svg>
                Inicio
              </NavLink>
            </li>
            <li className="flex border-l  border-transparent hover:border-slate-900 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 dark:hover:text-white hover:text-black">
              <a className="pl-3 flex my-3">
                <svg
                  className="fill-current w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z" />
                </svg>
                Libros
              </a>
            </li>
            <li className="flex border-l  border-transparent hover:border-slate-900 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 dark:hover:text-white hover:text-black">
              <a className="pl-3 flex my-3">
                <svg
                  className="fill-current w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M320 128C328.8 128 336 135.2 336 144V160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128zM476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM256 512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM496 272C496 280.8 503.2 288 512 288H544C552.8 288 560 280.8 560 272V208C560 199.2 552.8 192 544 192H512C503.2 192 496 199.2 496 208V272zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM496 400C496 408.8 503.2 416 512 416H544C552.8 416 560 408.8 560 400V336C560 327.2 552.8 320 544 320H512C503.2 320 496 327.2 496 336V400zM320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88z" />
                </svg>
                Escuelas
              </a>
            </li>
            <li className="flex border-l  border-transparent hover:border-slate-900 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 dark:hover:text-white hover:text-black">
              <a className="pl-3 flex my-3">
                <svg
                  className="fill-current w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path d="M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z" />
                </svg>
                Terciarios
              </a>
            </li>
            <li className="flex border-l  border-transparent hover:border-slate-900 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 dark:hover:text-white hover:text-black">
              <a className="pl-3 flex my-3">
                <svg
                  className="fill-current w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M32 432C32 458.5 53.49 480 80 480h352c26.51 0 48-21.49 48-48V160H32V432zM160 236C160 229.4 165.4 224 172 224h168C346.6 224 352 229.4 352 236v8C352 250.6 346.6 256 340 256h-168C165.4 256 160 250.6 160 244V236zM480 32H32C14.31 32 0 46.31 0 64v48C0 120.8 7.188 128 16 128h480C504.8 128 512 120.8 512 112V64C512 46.31 497.7 32 480 32z" />
                </svg>
                Varios
              </a>
            </li>
          </ul>
          <div className=" flex justify-center pt-3">
            <LoginSingUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hamburguesa };
