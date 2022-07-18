import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CheckedContext from "./checkedContex";

export default function Relatos() {
  let { id, inicio, fin } = useParams();
  let { idioma, biblia , checkedList, setCheckedList, setTrueList, 
       checkedListIT,setCheckedListIT,setTrueListIT,
       lenguaje} = useContext(CheckedContext);
  let [arrayCheck, setarrayCheck]=useState(checkedList)

  useEffect(() => {
    console.log("hola");
    if (typeof idioma.detalles[id].detalles === "string") {
      document.querySelector("#contenido").innerHTML =
        idioma.detalles[id].detalles;
    }
    if (typeof idioma.detalles[id].detalles[0].contenido === "string") {
      document.querySelector("#contenido").innerHTML =
        idioma.detalles[id].detalles[0].contenido;
    }
    if (lenguaje === 'IT'){
      setarrayCheck(checkedListIT)
    }
    if (lenguaje === 'ES'){
      setarrayCheck(checkedList)
    }
  }, [id, idioma, lenguaje, checkedList, checkedListIT]);
  function checklecturaIT(event) {
    let idc = event.target.name;
    checkedListIT[idc] = !checkedListIT[idc];
    setCheckedListIT((e) => checkedListIT);
    setTrueListIT(
      ((checkedListIT.filter((e) => e === true).length * 100) / 365).toFixed(2)
    );
    localStorage.setItem("checkedIT", JSON.stringify(checkedListIT));
  }
  function checklectura(event) {
    let idc = event.target.name;
    checkedList[idc] = !checkedList[idc];
    setCheckedList((e) => checkedList);
    setTrueList(
      ((checkedList.filter((e) => e === true).length * 100) / 365).toFixed(2)
    );
    localStorage.setItem("checked", JSON.stringify(checkedList));
  }
  function checkListFunction(event){
    if(lenguaje === 'ES'){
      checklectura(event)
    }else{
      checklecturaIT(event)
    }
  }

  let relato = biblia.biblia.filter((e, i) => i >= inicio && i <= fin);
  return (
    <>
      <div className="mt-5 container bg-light">
        <p className="text-center my-1 display-3">
          {idioma.detalles[id].libro}
        </p>
        <p className="text-center my-1 h4">
          {" "}
          {idioma.detalles[id].detalles[0].autor}
        </p>
        <p className="text-center my-1 h4">
          {" "}
          {idioma.detalles[id].detalles[0].donde}
        </p>
        <p className="text-center my-1 h4">
          {" "}
          {idioma.detalles[id].detalles[0].cuando}
        </p>
        <p className="text-center my-1 h4">
          {" "}
          {idioma.detalles[id].detalles[0].tiempo}
        </p>
        {relato.map((e, i) => (
          <React.Fragment key={i + "div"}>
            <div
              className={`container  my-2 px-3 border bg-dark text-white  d-flex`}
            >
              <p className="col-6 h4 p-1">
                {typeof e.relato === "object"
                  ? e.relato[0] + " y " + e.relato[1]
                  : e.relato}
              </p>
              <Link
                className="navbar-brand col text-white"
                to={`/lectura/${i + Number(inicio)}/${id}/${inicio}/${fin}`}
              >
                {idioma.titulos.leer}
              </Link>
              {e.video ? (
                <Link
                  className="navbar-brand text-white col"
                  to={`/videos/${
                    Number(i) + Number(inicio)
                  }/${id}/${inicio}/${fin}`}
                >
                  Video
                </Link>
              ) : (
                ""
              )}
              <form>
                <input
                  type="checkbox"
                  checked={ arrayCheck[e.dia] ? arrayCheck[e.dia] : false }
                  className="form-check-input "
                  name={e.dia}
                  onChange={(event) => checkListFunction(event)}
                />
              </form>
            </div>
          </React.Fragment>
        ))}
        <div className=" my-1 ">
          <h3 id="contenidoClick" className="btn btn-info">
            {idioma.titulos.contenido}
          </h3>
          {typeof idioma.detalles[id].detalles[0].contenido === "string" ||
          typeof idioma.detalles[id].detalles === "string" ? (
            <div id="contenido"></div>
          ) : (
            idioma.detalles[id].detalles[0].contenido.map((e, i) => {
              return (
                <React.Fragment key={i}>
                  <p className="h5">Capitulo {i + 1}:</p>
                  {e[i + 1].map((c, n) => (
                    <li className="mx-4" key={n + "p"}>
                      {" "}
                      {c}
                    </li>
                  ))}
                </React.Fragment>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
