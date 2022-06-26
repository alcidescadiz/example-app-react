import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Masomenos} from "../utils/masmenos"
import CheckedContext from "./checkedContex";
import Cronometro from "./cronometro/Cronometro";

export default function LecturaConme(){
    let {idioma} = useContext(CheckedContext)
    let { id } = useParams();
    useEffect(()=>{
        document.querySelector("#relato").innerHTML =
        idioma.commemoracion[id].lectura

    }, [id, idioma])
    return (<>
            <div className="mt-5" id="textoBiblia">
                <Masomenos color="warning"/>
                <div className="container">
                    <Link 
                        className='navbar-brand' 
                        to='/conmemoracion' >{idioma.titulos.volver}</Link>
                </div>
                <h3 className="text-center">{idioma.commemoracion[id].relato }</h3>
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