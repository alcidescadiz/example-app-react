import { Link } from "react-router-dom";


export default function MenuApp(){
    const divStyle = {
        'backgroundColor' : '#590696',
      }
    return (<>
        <div style={divStyle} className="fluid fixed-top mb-3  text-center p-2 ">
           <Link className='navbar-brand mx-1 text-white col-6 h1' to='/' >Programa Diario</Link>
           <Link className='navbar-brand mx-1 text-white col-6 h1' to='/conmemoracion' >Conmemoración</Link>
        </div>
 
    </>)
}