import React from "react";
import { useNavigate } from "react-router-dom";
import { detalles } from "../data";

export default function Libros(){

    let navigate = useNavigate()
    function openRelatos(id){
        let {inicio, fin} = detalles[id]
        navigate(`/relatos/${id}/${inicio}/${fin}`)
    }
    return (
        <div className="container mt-5 ">
            <div className="row m-1">
                <h1 className="col-12 text-center">Libros de la Biblia</h1>
                { detalles.map((e,i) =>  (
                    <React.Fragment key={i+'div'}>
                        <div  className="col-sm col p-1  " id={e.libro} >
                            <div>
                                <button  
                                className="btn w-100 p-5 btn-lg btn-success"  
                                onClick={()=> openRelatos(i) } >{ e.libro }</button>
                            </div>
                        </div>
                    </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}