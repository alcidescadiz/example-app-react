import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Masomenos} from "../utils/masmenos"
import CheckedContext from "./checkedContex";
import Cronometro from "./cronometro/Cronometro";

import { commemoracion } from "../data.js";
import { commemoracion as commemorazione } from "../dataIT.js";

export default function LecturaConme(){
    let {lenguaje,idioma} = useContext(CheckedContext)
    const dataCommemoracion = {
        ES: commemoracion,
        IT: commemorazione
      }  
    let { id } = useParams();
    useEffect(()=>{
        document.querySelector("#relato").innerHTML =
        dataCommemoracion[lenguaje][id].lectura

    }, [id, idioma, lenguaje])
    return (<>
            <div className="mt-5" id="textoBiblia">
                <Masomenos color="warning"/>
                <div className="container">
                    <Link 
                        className='navbar-brand' 
                        to='/conmemoracion' >{idioma.titulos.volver}</Link>
                </div>
                <h3 className="text-center">{dataCommemoracion[lenguaje][id].relato }</h3>
                <div className="container" id="relato" >
                        {''} 
                </div>
                <div className="container">
                    <Link 
                        className='navbar-brand' 
                        to='/conmemoracion' >{idioma.titulos.volver}</Link>
                </div>
                <Cronometro />
            </div>
    </>)
}