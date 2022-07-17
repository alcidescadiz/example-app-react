import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Masomenos } from "../utils/masmenos";
import CheckedContext from "./checkedContex";
import Cronometro from "./cronometro/Cronometro";

export default function Lectura() {
  let { idioma, biblia } = useContext(CheckedContext);
  let { id, idl, inicio, fin } = useParams();

  useEffect(()=>{
    if (typeof biblia.biblia[id].biblia === "string") {
      document.querySelector("#relato").innerHTML =
      biblia.biblia[id].biblia
    }else {
      document.querySelector("#relato1").innerHTML =biblia.biblia[id].relato[0]
      document.querySelector("#relato1a").innerHTML =biblia.biblia[id].biblia[0]
      document.querySelector("#relato2").innerHTML =biblia.biblia[id].relato[1]
      document.querySelector("#relato2a").innerHTML =biblia.biblia[id].biblia[1]
    }

  },[id, idioma, biblia])
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
          {typeof biblia.biblia[id].relato === "object"
            ? biblia.biblia[id].relato[0] + " y " + biblia.biblia[id].relato[1]
            : biblia.biblia[id].relato}
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
