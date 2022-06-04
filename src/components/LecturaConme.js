import { Link, useParams } from "react-router-dom";
import { commemoracion } from "../data";

export default function LecturaConme(){
    let { id } = useParams();
    return (<>
            <div className="mt-5"></div>
            <div className="container">
                <Link className='navbar-brand' to='/conmemoracion' >Volver</Link>
            </div>
            <h3 className="text-center">{commemoracion[id].relato }</h3>
            <div className="container" >
                    {commemoracion[id].lectura} 
            </div>
            <div className="container">
                <Link className='navbar-brand' to='/conmemoracion' >Volver</Link>
            </div>
    </>)
}