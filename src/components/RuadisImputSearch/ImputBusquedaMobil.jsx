import React from "react";
import "./ImputBusquedaMobil.css";
import "../ruadisHeader/index.css";

function ImputBusquedaMobil({ setBuscar }) {
  const actualizarBusquedaMovil = function (event) {
    setBuscar(event.target.value);
    if (event.target.value.length > 0) {
      const boton = document.querySelector("#div_cruz_reset_imput");
      boton.className = "container_button_clean_imput";
    } else {
      const boton = document.querySelector("#div_cruz_reset_imput");
      boton.className = "no_display";
    }
  };
  const efectoFocusMovil = function () {
    const div = document.querySelector("#search_movil");
    div.className = "search_mobil_transition_ease-out";
  };
  const efectoBlurMovil = function () {
    const div = document.querySelector("#search_movil");
    div.className = "search_mobil_transition_ease-in";
  };
  const borrarImputMovil = function () {
    const imput = document.querySelector("#searchInputMovil");
    imput.value = "";
    setBuscar("");
    const boton = document.querySelector("#div_cruz_reset_imput");
    boton.className = "no_display";
  };
  return (
    <div className="container_search_movil pr-3 pt-3 pb-3">
      <div
        id="search_movil"
        data-component-locator="SearchBar"
        className="search_mobil_transition_ease-in"
      >
        <div className="lupa_search_mobil">
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 17 17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6.5"
              cy="6.5"
              r="6"
              stroke="#68676F"
              strokeWidth="1"
            ></circle>
            <path
              d="M15 15L11 11"
              stroke="#68676F"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            ></path>
          </svg>
        </div>
        <input
          id="searchInputMovil"
          type="text"
          autoComplete="off"
          name="searchInput"
          aria-label="search text"
          placeholder="Busca por titulo"
          maxLength="300"
          data-test-locator="SearchBar-Input"
          className="imput_search_mobil"
          onFocus={efectoFocusMovil}
          onBlur={efectoBlurMovil}
          onChange={actualizarBusquedaMovil}
        ></input>
        <div
          id="div_cruz_reset_imput"
          className="container_button_clean_imput no_display"
        >
          <button
            aria-label="clear search button"
            data-test-locator="SearchBarClearIcon"
            type="button"
            className="button_clean_imput"
            onClick={borrarImputMovil}
          >
            <div alt="Cross in circle" className="svg_clean_imput">
              <svg
                width="22px"
                height="22px"
                fill="none"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.10803 13.8964L13.8943 6.1084"
                  stroke="#68676F"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M6.10803 6.10834L13.8943 13.8964"
                  stroke="#68676F"
                  strokeLinecap="round"
                ></path>
                <circle cx="10" cy="10" r="9.5" stroke="#68676F"></circle>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export { ImputBusquedaMobil };
