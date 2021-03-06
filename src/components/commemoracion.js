import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CheckedContext from "./checkedContex";

export default function Conmemoracion(){
    let {idioma} = useContext(CheckedContext)
    let titulos = idioma.titulos
    return (
        <div className="container">
            <h1 className="m-2 text-center mt-5 display-3">
                { titulos.tituloCommemoracion }
            </h1>
            { idioma.commemoracion.map((e,i) =>  (
                <React.Fragment key={i+'divPrincipal'}>
                    <div  className="d-flex m-2 border bg-light">
                        <div  className="col-4"> {e.dia} </div>
                        <p className="col-5 mx-1">{e.relato}</p>
                        <Link  
                            className='navbar-brand col-3 text-center' 
                            to={`/conmemoracion/lecturaconme/${i}`} >{titulos.leer}</Link>
                    </div>
                </React.Fragment>))}
        </div>
    )
}