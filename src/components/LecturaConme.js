import { Link, useParams } from "react-router-dom";
import { commemoracion } from "../data";
import {mas, menos} from "../utils/masmenos"

export default function LecturaConme(){
    let { id } = useParams();
    return (<>
            <div className="mt-5" id="textoBiblia">
                <div 
                    className=" fixed-bottom my-1  text-center ">
                    <button 
                        className="btn mx-1 btn-sm w-25 col h1 btn-warning" 
                        onClick={mas}>+</button >
                    <button 
                        className="btn mx-1 btn-sm w-25 col h1 btn-warning" 
                        onClick={menos}>-</button>
                </div>
                <div className="container">
                    <Link 
                        className='navbar-brand' 
                        to='/conmemoracion' >Volver</Link>
                </div>
                <h3 className="text-center">{commemoracion[id].relato }</h3>
                <div className="container" >
                        {commemoracion[id].lectura} 
                </div>
                <div className="container">
                    <Link 
                        className='navbar-brand' 
                        to='/conmemoracion' >Volver</Link>
                </div>
            </div>
    </>)
}