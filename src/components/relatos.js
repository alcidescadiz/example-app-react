import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { biblia, detalles} from "../data";

export default function Relatos(){
    let { id, inicio, fin } = useParams();
    let [check , setCheck] = useState([])

    useEffect(()=>{
        let checked = JSON.parse(localStorage.getItem('checked')) || []; 
        setCheck(e =>  checked)
        console.log('hola')
        document.querySelector('#contenidoClick').addEventListener('click', ()=>{
            if (typeof(detalles[id].detalles) === 'string'){
                document.querySelector('#contenido').innerHTML = detalles[id].detalles
            }
            if (typeof(detalles[id].detalles[0].contenido) === 'string') {
                document.querySelector('#contenido').innerHTML = detalles[id].detalles[0].contenido
            }
        })
    },[id])
    let navigate = useNavigate()
    function checklectura(event){
        let idc = event.target.name
        check[idc]= !check[idc]
        setCheck(e => check) 
        localStorage.setItem( 'checked', JSON.stringify(check))
        navigate(`/relatos/${id}/${inicio}/${fin}`)
    }
    let relato = biblia.filter((e,i)=> i >= inicio && i <= fin)
    return (<>
        <div className="mt-5 container bg-light">
            
        
            <p className="text-center my-1 display-3">{detalles[id].libro}</p>
            <p className="text-center my-1 h4"> {detalles[id].detalles[0].autor}</p>
            <p className="text-center my-1 h4"> {detalles[id].detalles[0].donde}</p>
            <p className="text-center my-1 h4"> {detalles[id].detalles[0].cuando}</p>
            <p className="text-center my-1 h4"> {detalles[id].detalles[0].tiempo}</p>
        {
            relato.map((e,i)=>
            (<React.Fragment key={i+'div'}>
                    <div  className={`container  my-2 px-3 border bg-dark text-white  d-flex`}>
                        <p  
                            className="col-6 h4 p-1" > 
                            { typeof e.relato === 'object'? e.relato[0]+' y '+e.relato[1] :e.relato }
                        </p>
                        <Link  className='navbar-brand col text-white' to={`/lectura/${i+Number(inicio)}/${id}/${inicio}/${fin}`} >Leer</Link>
                        {e.video 
                            ? 
                                <Link  className='navbar-brand text-white col' to={`/videos/${Number(i)+Number(inicio)}/${id}/${inicio}/${fin}`} >Video</Link> 
                            : 
                                ''}
                        <form>
                            <input  
                                type="checkbox" 
                                checked = {check[e.dia] ? check[e.dia] : false}  
                                className="form-check-input " 
                                name={e.dia} 
                                onChange={(event)=> checklectura(event)} 
                            />
                        </form>    
                    </div>
                
                </React.Fragment>)
            )
        }
            <div className=" my-1 ">
                <h3 id="contenidoClick" className="btn btn-info">Contenido del libro:</h3>
                { typeof(detalles[id].detalles[0].contenido) === 'string' || typeof(detalles[id].detalles)==='string' ? 
                    <div id="contenido"></div>
                     :
                    detalles[id].detalles[0].contenido.map((e,i)=>{
                        return (<React.Fragment key={i}>
                                <p className="h5">Capitulo {i+1}:</p>
                                {e[i+1].map((c,n)=> <li  className="mx-4" key={n+'p'}> {c}</li> )}
                                    
                        </React.Fragment>)
                    })
                }
            
            </div>
        </div>
    </>)


}


