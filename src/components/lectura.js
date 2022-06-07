import { Link, useParams } from "react-router-dom";
import { biblia } from "../data";
import {mas, menos} from "../utils/masmenos"


export default function Lectura(){
    let { id, idl, inicio, fin } = useParams();
    return (<>
            <div className="mt-5" id="textoBiblia">
            <div 
                className=" fixed-bottom my-1  text-center ">
                <button 
                    className="btn mx-1 btn-sm w-25 col btn-success" onClick={mas}>+</button >
                <button 
                    className="btn mx-1 btn-sm w-25 col btn-success" onClick={menos}>-</button>
            </div>
                <div className="container mt-1">
                    <Link className='navbar-brand' to={`/relatos/${idl}/${inicio}/${fin}`} >Volver</Link>
                </div>
                <h3 className="text-center">{typeof biblia[id].relato === 'object'? biblia[id].relato[0]+' y '+biblia[id].relato[1] :biblia[id].relato}</h3>
                <div className="container " >
                        { typeof biblia[id].biblia === 'string'? biblia[id].biblia:<><h2>{biblia[id].relato[0]}</h2> <div> {biblia[id].biblia[0]}</div><h2>{biblia[id].relato[1]}</h2> <div> {biblia[id].biblia[0]}</div></>} 
                </div>
                <div className="container">
                    <Link className='navbar-brand' to={`/relatos/${idl}/${inicio}/${fin}`} >Volver</Link>
                </div>

            </div>
    </>)
}