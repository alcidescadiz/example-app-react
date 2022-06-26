import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { detalles } from "../data";
import CheckedContext from "./checkedContex";

export default function Libros(){
    let {idioma} = useContext(CheckedContext)
    let navigate = useNavigate()
    function openRelatos(id){
        let {inicio, fin} = detalles[id]
        navigate(`/relatos/${id}/${inicio}/${fin}`)
    }
    return (
        <div className="container mt-5 ">
            <div className="row text-center mt-1">
                <h1 className="display-3">{idioma.titulos.tituloBiblia}</h1>
                { idioma.detalles.map((e,i) =>  (
                    <React.Fragment key={i+'div'}>
                        <div  
                            className="col-xl-3 col "   
                            id={e.libro} >
                            <div >
                                <button  
                                style={{backgroundColor: e.color ? e.color : 'blue'}}
                                className="btn w-100 px-5 py-3 btn-lg text-white h1"  
                                onClick={()=> openRelatos(i) } >{ e.abreviatura }</button>
                            </div>
                        </div>
                    </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}