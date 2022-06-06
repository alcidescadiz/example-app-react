import React from "react";
import { Link } from "react-router-dom";
import { commemoracion } from "../data";

export default function Conmemoracion(){
    return (
        <div className="container">
            <h1 className="m-2 text-center mt-5 display-3">Lectura de la Conmemoración</h1>
            { commemoracion.map((e,i) =>  (
                <React.Fragment key={i+'divPrincipal'}>
                    <div  className="d-flex m-2 border bg-light">
                        <div  className="col-4"> {e.dia} </div>
                        <p className="col-5 mx-1">{e.relato}</p>
                        <Link  
                            className='navbar-brand col-3 text-center' 
                            to={`/lecturaconme/${i}`} >Leer</Link>
                    </div>
                </React.Fragment>))}
        </div>
    )
}