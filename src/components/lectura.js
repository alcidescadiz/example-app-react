import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Masomenos } from "../utils/masmenos";
import CheckedContext from "./checkedContex";
import Cronometro from "./cronometro/Cronometro";

import { biblia } from "../data.js";
import { biblia as bibbia } from "../dataIT.js";

export default function Lectura() {
  let { idioma, lenguaje } = useContext(CheckedContext);
  let { id, idl, inicio, fin } = useParams();
  const inicialBiblia = {
    ES: {
      biblia: biblia
    },
    IT: {
      biblia: bibbia
    },
  }

  useEffect(()=>{
    if (typeof inicialBiblia[lenguaje].biblia[id].biblia === "string") {
      document.querySelector("#relato").innerHTML =
      inicialBiblia[lenguaje].biblia[id].biblia
    }else {
      document.querySelector("#relato1").innerHTML =inicialBiblia[lenguaje].biblia[id].relato[0]
      document.querySelector("#relato1a").innerHTML =inicialBiblia[lenguaje].biblia[id].biblia[0]
      document.querySelector("#relato2").innerHTML =inicialBiblia[lenguaje].biblia[id].relato[1]
      document.querySelector("#relato2a").innerHTML =inicialBiblia[lenguaje].biblia[id].biblia[1]
    }

  },[id, idioma,lenguaje])
  return (
    <>
      <div className="mt-5" id="textoBiblia">
        <Masomenos color="success" />
        <div className="container mt-1">
          <Link
            className="navbar-brand"
            to={`/relatos/${idl}/${inicio}/${fin}`}
          >
            {idioma.titulos.volver}
          </Link>
        </div>
        <h3 className="text-center">
          {typeof inicialBiblia[lenguaje].biblia[id].relato === "object"
            ? inicialBiblia[lenguaje].biblia[id].relato[0] + " y " + inicialBiblia[lenguaje].biblia[id].relato[1]
            : inicialBiblia[lenguaje].biblia[id].relato}
        </h3>
        <div className="container " id="relato" >
            <h2 id="relato1">{''}</h2> <div id="relato1a">{''}</div>
            <h2 id="relato2">{''}</h2> <div id="relato2a">{''}</div>
        </div>
        <div className="container">
          <Link
            className="navbar-brand"
            to={`/relatos/${idl}/${inicio}/${fin}`}
          >
            {idioma.titulos.volver}
          </Link>
        </div>
        <Cronometro />
      </div>
    </>
  );
}
