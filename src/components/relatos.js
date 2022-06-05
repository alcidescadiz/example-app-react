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
    },[])
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
        <div className="mt-5 container bg-light"></div>
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
                            className="col-6" > 
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
                                className="form-check-input" 
                                name={e.dia} 
                                onChange={(event)=> checklectura(event)} 
                            />
                        </form>    
                    </div>
                
                </React.Fragment>)
            )
        }
    </>)


}



/*

            { 
                biblia.map((e,i)=>{
                    console.log(e)
                        if (i >= data.inicio && i <= data.fin ) {
                        return (
                            <div key={i+e.dia} className={`${display} border bg-dark text-white  d-flex`}>
                                <p  key={i+e.dia+i} className="col-6" > { typeof e.relato === 'object'? e.relato[0]+' y '+e.relato[1] :e.relato }
                                </p>
                                <Link key={i+e.dia+i+i} className='navbar-brand col text-white' to={`/lectura/${i}`} >Leer</Link>
                                {e.video ? <Link key={i+e.dia+'video'} className='navbar-brand text-white col' to={`/videos/${i}`} >Video</Link> : ''}
                                <input key={e.dia} type="checkbox" checked={check[i] } className="form-check-input" name={e.dia} onChange={()=> checklectura(i)} />
                            </div>
                            )
                        }
                })
            }


*/